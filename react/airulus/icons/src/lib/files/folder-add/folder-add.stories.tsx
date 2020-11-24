import * as React from 'react';
import { FolderAddIcon } from './folder-add.icon';


export default {
  title: 'UI/Icons/Files/FolderAdd',
  component: FolderAddIcon,
}

export const Basic = (args) => {
  return (<FolderAddIcon {...args}/>);
}

export const Standard = () => (<Basic viewType="standard"/>);

export const Filled = () => (<Basic viewType="filled"/>);
