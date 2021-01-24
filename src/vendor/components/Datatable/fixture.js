// Columns : id, lastname, firstname, gender, price, email, date

export function fixture(nbr) {
    const data = [];
    for (let i = 0; i < nbr; ++i) {
        data.push({
            id: (i + 1),
            lastname: genWord(),
            firstname: genWord(),
            gender: 'MF'[Math.floor(Math.random() * 2)],
            price: Math.floor(Math.random() * 1000),
            email: genWord() + '@gmail.com',
           date: new Date(Date.now() + Math.floor(Math.random() * 1000000000))
        })
    }
    return data;
}

function genWord() {
    const consomns = 'bcdfghjklmnpqrstvwxz';
    const vowels = 'aouiey';
    const nbr = Math.ceil(Math.random() * 5 + 5);
    let word = '';

    for (let i = 0; i < nbr; ++i) {
        if (i % 2 === 0) {
            word += consomns[Math.floor(Math.random() * consomns.length)];
        } else {
            word += vowels[Math.floor(Math.random() * vowels.length)];
        }
    }

    return word;
}