import React, { useState, useEffect } from 'react'

export default function Paginator({
    data,
    pageSize,
    setPaginationStart = v => v
}) {

    const [pages, setPages] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const nbr = Math.ceil(data.length / pageSize);

        const p = [];
        for (let i = 0; i < nbr; ++i) {
            p.push(i + 1);
        }

        setPages(p);
    }, [pageSize]);

    return (
        <div className="paginator">
           {pages.map((el, index) => <div 
            key={index} 
            onClick={() => {
                setActive(index);
                setPaginationStart(index);
            }}
            className={index === active ? 'active' : ''}>
               {el}
           </div>)} 
        </div>
    )
}
