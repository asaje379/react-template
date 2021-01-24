import React, { useState } from 'react'
import { fixture } from './fixture'
import Select from '../Inputs/Select';
import Option from '../Inputs/Option';
import Input from '../Inputs/Input';
import Checkbox from '../Inputs/Checkbox';

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
    const [dataCopie, setDataCopie] = useState(values);

    return (
        <div className="datatable">
            <div className="d-flex jc-btw">
                <Select defaultValue="csv" width="200px">
                    <Option value="csv">Exporter en CSV</Option>
                    <Option value="pdf">Exporter en PDF</Option>
                </Select>

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
                    console.log(s)
                }} icon="search" placeholder="Rechercher" />
            </div>
            <div>
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
