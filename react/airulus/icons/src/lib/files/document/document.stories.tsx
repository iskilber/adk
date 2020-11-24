import * as React from 'react';
import { DocumentIcon } from './document.icon';


export default {
  title: 'UI/Icons/Files/Document',
  component: DocumentIcon,
}

export const Basic = (args) => {
  return (<DocumentIcon {...args}/>);
}

export const Standard = () => (<Basic viewType="standard"/>);

export const Filled = () => (<Basic viewType="filled"/>);
