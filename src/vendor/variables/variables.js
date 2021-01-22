export function mkcss(classes, css) {
    return css.split(' ').map(el => classes[el]).join(' ');
}