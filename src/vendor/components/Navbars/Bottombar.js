import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '../Icons/Icon';
import classes from './navbar.module.scss';

export default function Bottombar({
    navigations = [],
    user
}) {
    return (
        <div className={classes['bottom-bar']}>
            {navigations.filter(el => el.roles.includes(user.role)).map((link, index) => <div key={index}>
                {<Link to={link.url} className={classes.lk}>
                    <div className={classes.link}>
                        <Icon name={link.icon} />
                        <div className="text-center">
                            {link.label}
                        </div>
                    </div>
                </Link>}
            </div>)}
        </div>
    )
}
