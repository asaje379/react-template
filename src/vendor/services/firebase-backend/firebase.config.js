import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA90UBjv79clj-g6fwbhnuYyw3SiQvT_Js",
    authDomain: "desktop-app-76c22.firebaseapp.com",
    projectId: "desktop-app-76c22",
    storageBucket: "desktop-app-76c22.appspot.com",
    messagingSenderId: "56387016699",
    appId: "1:56387016699:web:839d1f62319abc698b1d5e"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const store = firebase.firestore();
export const messaging = firebase.messaging();

export async function registerSW() {
    if ('serviceWorker' in navigator) {
        const rg = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
        const token = await messaging.getToken({
            vapidKey: 'BC1fUbAa4I3oxomBjCw1CAjgfrwT0FlHlPISTCw94vFWyt7GB7E3BBeiNJJ9wiDAlvqllXunrHpI2VDQ3bociSA',
            serviceWorkerRegistration: rg
        });
        return token;
    }
}

messaging.onMessage(payload => {
    console.log('Message received !', payload);
    const n = payload.notification;

    window.customAlert(n.title, n.body);
})

export const storage = firebase.storage();

const storageRef = storage.ref();

export async function upload(collection, name, data) {
    const child = storageRef.child(`${collection}/${Date.now() + '_' + name.split(' ').join('_')}`);
    const snapshot = await child.put(data);
    const url = await snapshot.ref.getDownloadURL();
    return url;
}