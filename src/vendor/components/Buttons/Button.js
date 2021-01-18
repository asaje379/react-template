import React from 'react';
import classes from './button.module.scss';

const Button = ({
    outline = false,
    rounded = false,
    expand = false,
    color = 'primary',
    children
}) => {

    let css = classes.btn;
    if (outline) css += ' ' + classes.outline;
    if (expand) css += ' ' + classes.expand;
    if (rounded) css += ' ' + classes.rounded;
    css += ' ' + classes[color];
    console.log(css);

    return <button className={css}>{children}</button>
};

export default Button;