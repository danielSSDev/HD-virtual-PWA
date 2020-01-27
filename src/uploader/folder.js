import getPath from './utils/path';
import { app } from '../firebase';
import { UserClass } from '../auth/user';

export default function () {
    let dirName = prompt('Qual o nome do novo diretorio', 'Minha pasta')

    if(dirName == null || dirName == ''){
        console.log('ESTA ENTRANDO AQUI NO IF')
        return;
    }
    
    let path = getPath();

    let userInstance = new UserClass;

    let folderRef = app.database().ref('files/' +  userInstance.user.uid + path);
    folderRef.push({
        type: 'folder-open',
        title: dirName
    })
}
