export function mkcss(classes, css) {
    return css.split(' ').map(el => classes[el]).join(' ');
}

export function deepCopie(object) {
    return JSON.parse(JSON.stringify(object));
}