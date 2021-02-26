import React, { useState, useEffect } from 'react'
import { Icon } from '../Icons/Icon';

export default function Paginator({
    data,
    pageSize,
    setPaginationStart = v => v
}) {

    const [pages, setPages] = useState([]);
    const [active, setActive] = useState(0);
    const [start, setStart] = useState(0);
    const nbr = Math.ceil(data.length / pageSize);

    useEffect(() => {

        // console.log(Math.ceil(data.length / pageSize))
        if (start <= nbr) {
            const p = [];
            for (let i = start; i < start + 3 && i < nbr; ++i) {
                p.push(i + 1);
            }
            setPages(p);
        }
    }, [pageSize, data, start, nbr]);

    const handleNext = () => {
        setStart(start + 3);
        setPaginationStart(start + 3);
    };

    const handleBack = () => {
        setStart(start - 3);
        setPaginationStart(start - 3);
    };

    return (
        <div className="paginator">
            {start !== 0 && <div>
                <Icon name="back" onClick={handleBack} />
            </div>}
            {pages.map((el, index) => <div
                key={index}
                onClick={() => {
                    setActive(index);
                    setPaginationStart(index);
                }}
                className={index === active
                    ? 'active'
                    : ''}>
                {el}
            </div>)}
            {start + 3 < nbr && <div>
                <Icon name="next" onClick={handleNext} />
            </div>}
        </div>
    )
}
