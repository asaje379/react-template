import React from 'react';
import classes from './navbar.module.scss';
import bkgd from '../../../assets/bkgd.jpeg';
import opencts from '../../../assets/opencts.png';
import { Icon } from '../Icons/Icon';
import { Link } from 'react-router-dom';

const Sidebar = ({
    logo = opencts,
    bgColor=null,
    title = 'Open CTS',
    image = bkgd,
    opacity = 0.5,
    navigations = [],
    opened = true,
    children
}) => {
    const color = bgColor ? bgColor : `rgba(0, 0, 0, ${opacity})`;

    let css = classes.sidebar;
    css += ' ' + (!opened ? classes['hide-sidebar'] : '');

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