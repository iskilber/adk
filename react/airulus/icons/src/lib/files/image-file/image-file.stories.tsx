import * as React from 'react';
import { ImageFileIcon } from './image-file.icon';


export default {
  title: 'UI/Icons/Files/ImageFile',
  component: ImageFileIcon,
}

export const Basic = (args) => {
  return (<ImageFileIcon {...args}/>);
}

export const Standard = () => (<Basic viewType="standard"/>);

export const Filled = () => (<Basic viewType="filled"/>);
