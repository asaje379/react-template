import { ipcRenderer } from 'electron';

export default async function notify(title, body) {
  return await ipcRenderer.sendSync('notify', {title, body});
}
