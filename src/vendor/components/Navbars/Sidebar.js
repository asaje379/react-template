import React from 'react';
import classes from './navbar.module.scss';
import bkgd from '../../../assets/bkgd.jpeg';
import opencts from '../../../assets/opencts.png';
import { Icon } from '../Icons/Icon';
import { Link } from 'react-router-dom';

const links = [
    {
        title: 'Navigation',
        links: [
            {
                icon: 'home',
                label: 'Dashboard',
                url: '/admin'
            }
        ]
    },
    {
        title: 'Ui Element',
        links: [
            {
                icon: 'chart',
                label: 'Components',
                links: [
                    {
                        icon: 'home',
                        label: 'Buttons',
                        url: '/admin/test'
                    },
                    {
                        icon: 'chart',
                        label: 'Typographies',
                        url: '/admin/test'
                    },
                ]
            },
            {
                icon: 'home',
                label: 'Layouts',
                url: '/admin/test'
            },
            {
                icon: 'message',
                label: 'Views',
                url: '/admin/test'
            }
        ]
    },
];

const Sidebar = ({
    logo = opencts,
    title = 'Open CTS',
    image = bkgd,
    opacity = 0.5,
    navigations = links,
    opened = true,
    children
}) => {
    const color = `rgba(0, 0, 0, ${opacity})`;
    console.log(children);

    let css = classes.sidebar;
    css += ' ' + (!opened ? classes['hide-sidebar'] : '');
    console.log(css);

    return <div className={css} style={{
        backgroundColor: color,
        backgroundImage: `url(${image})`,
        backgroundBlendMode: 'multiply',
        backgroundSize: 'cover',
        padding: children ? '0' : '10px'

    }}>

        {children ? children : <div>
            <div className={classes['sb-company']}>
                <div>
                    <img src={logo} alt="LOGO" width="50" height="50" />
                </div>
                <div>
                    {title}
                </div>
            </div>

            <div>
                {navigations.map((el, i) => <div key={i}>
                    <div className={classes['lk-title']}>
                        {el.title}
                    </div>
                    <ul>
                        {el.links.map((val, i) => <li key={i}>
                            <Link to={val.url} className={classes.links}>
                                <div className={classes['lk-group']}>
                                    <Icon name={val.icon} />
                                    <span className={classes['lk-label']}>{val.label}</span>
                                </div>
                                {val.links ? <div>
                                    <Icon name="angleRight" />
                                </div> : null}
                            </Link>
                        </li>)}
                    </ul>
                </div>)}
            </div>
        </div>}

    </div>
};

export default Sidebar;