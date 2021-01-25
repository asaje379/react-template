import React, { useState } from 'react'
import { fixture } from './fixture'
import Input from '../Inputs/Input';
import Checkbox from '../Inputs/Checkbox';
import MenuButton from '../Buttons/MenuButton';
import MenuButtonItem from '../Buttons/MenuButtonItem';

const _DATA = fixture(100);

export default function Datatable({
    data = _DATA
}) {
    const attrs = Object.keys(data[0]);
    const values = data.map(el => Object.values(el).map(it => {
        if (typeof it === typeof new Date()) {
            return it.toLocaleDateString();
        }
        return it;
    }));

    const [dataValues, setData] = useState(values);
    const [dataCopie] = useState(values);

    return (
        <div className="datatable">
            <div className="d-flex jc-btw ai-center mb-3 fx-wrap">
                <MenuButton width="200px" title="Exporter">
                    <MenuButtonItem onClick={() => console.log('CSV')}>Exporter en CSV</MenuButtonItem>
                    <MenuButtonItem onClick={() => console.log('PDF')}>Exporter en PDF</MenuButtonItem>
                </MenuButton>

                <Input onChange={value => {
                    const str = value.toLowerCase();
                    const s = [];
                    const converted = dataCopie.map(it => it.join(' '));
                    for (let i = 0; i < converted.length; ++i) {
                        if (converted[i].indexOf(str) !== -1) {
                            s.push(dataCopie[i]);
                        }
                    }
                    setData(s);
                }} icon="search"  mb="0" placeholder="Rechercher" />
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="checkbox-th">
                                <div>
                                    <Checkbox />
                                </div>
                            </th>
                            {attrs.map((el, index) => <th key={index}>
                                {el}
                            </th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {dataValues.map((el, index) => <tr key={index}>
                            <td className="checkbox-th">
                                <div>
                                    <Checkbox />
                                </div>
                            </td>
                            {el.map((it, idx) => <td key={idx}>{it}</td>)}
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <div>

            </div>
        </div>
    )
}
