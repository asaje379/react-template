import React from 'react'
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
    const values = data.map(el => Object.values(el));
    console.log(values);

    return (
        <div className="datatable">
            <div className="d-flex jc-btw">
                <Select defaultValue="csv" width="200px">
                    <Option value="csv">Exporter en CSV</Option>
                    <Option value="pdf">Exporter en PDF</Option>
                </Select>

                <Input icon="search" placeholder="Rechercher" />
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
                        {values.map((el, index) => <tr key={index}>

                        </tr>)}
                    </tbody>
                </table>
            </div>
            <div>

            </div>
        </div>
    )
}
