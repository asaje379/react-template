import React, { useState, useEffect } from 'react'
import { fixture } from './fixture'
import Input from '../Inputs/Input';
import Checkbox from '../Inputs/Checkbox';
import MenuButton from '../Buttons/MenuButton';
import MenuButtonItem from '../Buttons/MenuButtonItem';
import Paginator from './Paginator';
import { csvExport } from '../../services/data-export/csvExport';
import ProgressBar from '../ProgressBar/ProgressBar';

const _DATA = fixture(100);

export default function Datatable({
    data = _DATA,
    exportName = 'data',
    onRowClick = () => { },
    checkValues = false,
    onSelectionChange = () => { }
}) {

    const [dataValues, setData] = useState([]);
    const [attrs, setAttrs] = useState(Object.keys(data[0]));
    const [originalData] = useState(data);
    const [pageSize, setPageSize] = useState(10);
    const [paginationStart, setPaginationStart] = useState(0);
    const [selectedValues, setSelectedValues] = useState([]);
    const [allSelected, setAllSelected] = useState(false);
    const [dataCopie, setDataCopie] = useState([]);
    const [searchValue, setSearchValue] = useState([]);

    useEffect(() => {
        if (pageSize === 'all') {
            setData(dataCopie);
        } else {
            setData([...dataCopie.slice(paginationStart * pageSize, paginationStart * pageSize + pageSize)]);
        }
    }, [pageSize, paginationStart, dataCopie]);

    useEffect(() => {
        setAttrs(Object.keys(data[0]));
        const values = data.map(el => Object.values(el).map(it => {
            if (typeof it === typeof new Date()) {
                console.log(it.toLocaleDateString())
                if (it.toLocaleDateString())
                    return it.toLocaleDateString();
                else {
                    if (it.hasOwnProperty('info')) {
                        return it;
                    }
                    return new Date(it.seconds * 1000).toLocaleDateString();
                }
            }
            return it;
        }));
        setData(values);
        setDataCopie(values);
        setPageSize(10);
    }, [data]);

    return (
        <div className="datatable">
            <div className="d-flex jc-btw ai-center mb-3">
                <MenuButton width="170px" title="Exporter">
                    <MenuButtonItem onClick={() => {
                        csvExport(originalData, exportName);
                    }}>Exporter en EXCEL</MenuButtonItem>
                    <MenuButtonItem onClick={() => console.log('PDF')}>Exporter en PDF</MenuButtonItem>
                </MenuButton>

                <Input onChange={value => {
                    setSearchValue(value);
                    const str = value.toLowerCase();
                    const s = [];
                    const converted = dataCopie.map(it => it.join(' '));
                    for (let i = 0; i < converted.length; ++i) {
                        if (converted[i].toLowerCase().indexOf(str) !== -1) {
                            s.push(dataCopie[i]);
                        }
                    }
                    setData(s);
                    setPaginationStart(0);
                    setPageSize('all');
                }} icon="search" mb="0" value={searchValue} placeholder="Rechercher" />
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            {checkValues && <th className="checkbox-th">
                                <div>
                                    <Checkbox onChange={value => {
                                        setAllSelected(value)
                                        if (value) {
                                            const values = dataCopie.map(el => el[0]);
                                            setSelectedValues(values);
                                            onSelectionChange(values)
                                        } else {
                                            setSelectedValues([]);
                                            onSelectionChange([]);
                                        }
                                    }} />
                                </div>
                            </th>}
                            {attrs.map((el, index) => <th key={index}>
                                {el}
                            </th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {dataValues.map((el, index) => <tr key={index} onClick={() => {
                            onRowClick(el);
                        }}>
                            {checkValues && <td className="checkbox-th">
                                <div>
                                    <Checkbox onChange={() => {
                                        const values = JSON.parse(JSON.stringify(selectedValues));
                                        if (!selectedValues.includes(el[0])) {
                                            values.push(el[0]);
                                        } else {
                                            const index = values.findIndex(it => el[0] === it);
                                            values.splice(index, 1);
                                        }
                                        setSelectedValues(values);
                                        onSelectionChange(values);
                                    }} checked={allSelected} />
                                </div>
                            </td>}
                            {el.map((it, idx) => <td key={idx}>
                                {/* {JSON.stringify(it)} */}
                                {it.info !== undefined ? (it.progression !== undefined ? <div>
                                    <ProgressBar color={it.color} percentage={it.progression} />
                                    <span style={{ color: 'red' }}>{it.info}</span>
                                </div> : <span style={{ color: 'red' }}>{it.info}</span>) : it}
                            </td>)}
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <div className="d-flex ai-fxend jc-btw mt-4">
                <MenuButton top title="Elts/page" width="120px">
                    <MenuButtonItem onClick={() => setPageSize(10)}>10</MenuButtonItem>
                    <MenuButtonItem onClick={() => setPageSize(25)}>25</MenuButtonItem>
                    <MenuButtonItem onClick={() => setPageSize(100)}>100</MenuButtonItem>
                    <MenuButtonItem onClick={() => setPageSize(500)}>500</MenuButtonItem>
                    <MenuButtonItem onClick={() => setPageSize('all')}>Tout</MenuButtonItem>
                </MenuButton>

                <Paginator
                    data={dataCopie}
                    pageSize={pageSize}
                    setPaginationStart={setPaginationStart} />
            </div>
        </div>
    )
}
