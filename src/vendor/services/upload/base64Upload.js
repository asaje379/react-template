export function uploadTask(file) {
    return new Promise(resolve => {
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onloadend = () => {
            resolve(fr.result);
        }
    });
}

export async function base64Upload(file) {
    return await uploadTask(file);
}