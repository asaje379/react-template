import React, { useContext, useState } from 'react'
import { store } from './firebase.config';

const DatabaseContext = React.createContext();

export function useDatabase() {
    return useContext(DatabaseContext);
}

export default function DatabaseProvider({
    children
}) {

    const [value, setValue] = useState({});

    function all(collection) {
        return new Promise(resolve => {
            store.collection(collection).where('enabled', '==', true).onSnapshot(snapshot => {
                const data = [];
                snapshot.forEach(doc => data.push({
                    id: doc.id,
                    ...doc.data()
                }));
                setValue({
                    ...value,
                    [collection]: data.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
                });
                resolve(data);
            });
        });
    }

    async function save(collection, item, id) {
        const data = item;
        if (!id) {
            data.createdAt = new Date();
            data.lastUpdatedAt = new Date();
            data.enabled = true;
            await store.collection(collection).add(data);
        } else {
            delete data.id;
            data.lastUpdatedAt = new Date();
            await store.collection(collection).doc(id).update(data);
        }
        return true;
    }

    async function one(collection, value, attr) {
        console.log(value, attr);
        let item;
        if (!attr) {
            const res = await store.collection(collection).doc(value).get();
            item = {
                id: res.id,
                ...res.data()
            }
        } else {
            const items = await store.collection(collection).where(attr, '==', value).get();
            if (items.docs.length > 0) {
                item = {
                    id: items.docs[0].id,
                    ...items.docs[0].data()
                }
            }
        }
        return item;
    }

    async function remove(collection, item) {
        const data = item;
        const id = item.id;
        delete data.id;
        data.removedAt = new Date();
        await store.collection(collection).doc(id).update(data);
    }

    function find(collection, condition) {
        return new Promise(resolve => {
            let ref = store.collection(collection);
            for (const attr in condition) {
                ref = ref.where(attr, '==', condition[attr]);
            }
            ref.onSnapshot(snapshot => {
                const data = [];
                snapshot.docs.forEach(doc => {
                    data.push({ id: doc.id, ...doc.data() });
                }); 
                resolve(data);
            });
        });
    }

    return (
        <DatabaseContext.Provider value={{
            all,
            save,
            remove,
            data: value,
            one,
            find
        }}>
            {children}
        </DatabaseContext.Provider>
    )
}
