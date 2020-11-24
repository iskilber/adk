import * as React from 'react';
import { FolderIcon } from './folder.icon';


export default { 
  title: 'UI/Icons/Files/Folder',
  component: FolderIcon,
  decorators: [(Story) => <div style={{width: '250px'}}><Story /></div>]
}

export const Basic = (args) => <FolderIcon {...args}/>;

Basic.args = {
  viewType: 'filled'
}
