import React, { useRef, useState } from 'react';
import { Icon } from '../vendor/components/Icons/Icon';
import { Link } from 'react-router-dom';
import classes from './sidebar.module.scss';

export default function Sidebar() {

    const [sub1, setSub1] = useState({
        opened: false,
        ref: useRef(null)
    });

    const toggleSub = () => {
        const item = sub1.ref.current;
        if (item) {
            if (item.className === classes['sub-ul']) {
                item.className = classes['sub-ul'] + ' ' + classes['sub-ul-show'];
                setSub1({
                    opened: !sub1.opened,
                    ref: sub1.ref
                });
            } else {
                item.className = classes['sub-ul'];
                setSub1({
                    opened: !sub1.opened,
                    ref: sub1.ref
                });
            }
        }
    };

    return (
        <>
            <div className="d-flex fxd-col jc-btw h-100">
                <div>
                    <ul className="lst-none m-0">
                        <li className="m-0 p-3 bdb-solid bd-light bd-w-1 light-hover fs-15">
                            <Link className="d-flex ai-center link" to="/admin/archives">
                                <Icon name="book" />
                                <span className="ml-3">Archives</span>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="m-0 fs-12">
                            <div
                                className="p-3 d-flex jc-btw ai-center light-hover"
                                onClick={() => toggleSub(sub1)}>
                                <div>
                                    <Icon name="tools" />
                                    <span className="ml-3">Plans</span>
                                </div>
                                {!sub1.opened ? <Icon name="angleRight" /> :
                                    <Icon name="angleDown" />}
                            </div>
                            <ul ref={sub1.ref} className={classes['sub-ul']}>
                                <li className="pt-1 p-4 light-hover">
                                    <Link className="d-flex ai-center link" to="/admin/plan/1">
                                        <Icon name="checkCircle" /> <span className="ml-2">Plan1</span>
                                    </Link>
                                </li>
                                <li className="pt-4 p-4 light-hover">
                                    <Link className="d-flex ai-center link" to="/admin/plan/2">
                                        <Icon name="checkCircle" /> <span className="ml-2">Plan2</span>
                                    </Link>
                                </li>
                                <li className="pt-4 p-4 light-hover">
                                    <Link className="d-flex ai-center link" to="/admin/plan/3">
                                        <Icon name="checkCircle" /> <span className="ml-2">Plan3</span>
                                    </Link>
                                </li>
                                <li className="pt-4 p-4 light-hover">
                                    <Link className="d-flex ai-center link" to="/admin/plan/4">
                                        <Icon name="checkCircle" /> <span className="ml-2">Plan4</span>
                                    </Link>
                                </li>
                                <li className="pt-4 p-4 light-hover">
                                    <Link className="d-flex ai-center link" to="/admin/plan/5">
                                        <Icon name="checkCircle" /> <span className="ml-2">Plan5</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="lst-none m-0">
                        <li className="m-0 p-3 bdt-solid bd-light bd-w-1 light-hover fs-15">
                            <Link className="d-flex ai-center link" to="/admin/logs">
                                <Icon name="list" />
                                <span className="ml-3">Logs</span>
                            </Link>
                        </li>
                        <li className="m-0 p-3 bdt-solid bd-light bd-w-1 light-hover fs-15">
                            <Link className="d-flex ai-center link" to="/admin/settings">
                                <Icon name="cog" />
                                <span className="ml-3">Paramètres</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
