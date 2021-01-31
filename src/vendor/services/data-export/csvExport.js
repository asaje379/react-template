export function csvExport(data, name) {
    const headers = Object.keys(data[0]).map(el => `"${el.toUpperCase()}"`);
    const dataValues = data.map(el => Object.values(el).map(it => {
        if (typeof it === typeof new Date()) {
            return `"${it.toLocaleDateString()}"`;
        }
        return `"${it}"`;
    }).join(';'));

    const finalData = headers.join(';') + '\r\n' + 
        dataValues.join('\r\n');

    const file = new Blob([ '\ufeef', finalData ], { type: 'text/csv' });
    const fileURI = window.URL.createObjectURL(file);

    const downloadLink = document.createElement('a');
    downloadLink.download = name + '.csv';
    downloadLink.href = fileURI;
    
    downloadLink.click();

    setTimeout(() => {
        window.URL.revokeObjectURL(fileURI);
    }, 1000);
    
}