import React, { Children, cloneElement } from 'react';
import classes from './grid.module.scss';

const Grid = ({
    children,
    reverse,
    width,
    spacing = 0,
    bgColor = 'transparent',
    justify = 'between'
}) => {

    const childWidth = Math.trunc(100 / children.length);
    
    const newChildren = Children.map(children, child => {
        return cloneElement(child, {width: childWidth, margin: spacing});
    });

    let css = classes.grid;
    if (reverse) css += ' ' + classes.reverse;
    css += ' ' + classes[justify];

    console.log(justify, css);

    return <div className={css} style={{ width, backgroundColor: bgColor }}>
        {newChildren}
    </div>
};

export default Grid;