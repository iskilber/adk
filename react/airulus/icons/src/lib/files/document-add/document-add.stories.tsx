import * as React from 'react';
import { DocumentAddIcon } from './document-add.icon';


export default {
  title: 'UI/Icons/Files/DocumentAdd',
  component: DocumentAddIcon,
}

export const Basic = (args) => {
  return (<DocumentAddIcon {...args}/>);
}

export const Standard = () => (<Basic viewType="standard"/>);

export const Filled = () => (<Basic viewType="filled"/>);
