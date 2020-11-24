import * as React from 'react';
import { OpenFolderIcon } from './open-folder.icon';


export default { 
  title: 'UI/Icons/Files/OpenFolder',
  component: OpenFolderIcon,
  decorators: [(Story) => <div style={{width: '250px'}}><Story /></div>]
}

export const Basic = (args) => <OpenFolderIcon {...args}/>;

Basic.args = {
  viewType: 'filled'
}
