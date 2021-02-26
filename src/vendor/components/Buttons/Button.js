import React from 'react';
import classes from './button.module.scss';

const Button = ({
    outline = false,
    rounded = false,
    expand = false,
    lg = false,
    mini = false,
    color = 'primary',
    style = {},
    onClick = () => {},
    form = null,
    type = 'button',
    title = '',
    children
}) => {

    let css = classes.btn;
    css += ' ' + classes[color];
    if (outline) css += ' ' + classes.outline + ' text-'+color;
    if (expand) css += ' ' + classes.expand;
    if (rounded) css += ' ' + classes.rounded;
    if (lg) css += ' ' + classes.lg;
    if (mini) css += ' ' + classes.mini;


    return <button title={title} form={form} type={type} onClick={onClick} className={css} style={style}>{children}</button>
};

export default Button;