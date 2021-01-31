import React from 'react';
import classes from './button.module.scss';

const Button = ({
    outline = false,
    rounded = false,
    expand = false,
    color = 'primary',
    style = {},
    onClick = () => {},
    children
}) => {

    let css = classes.btn;
    css += ' ' + classes[color];
    if (outline) css += ' ' + classes.outline + ' text-'+color;
    if (expand) css += ' ' + classes.expand;
    if (rounded) css += ' ' + classes.rounded;
    console.log(css);

    return <button onClick={onClick} className={css} style={style}>{children}</button>
};

export default Button;