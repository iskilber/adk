import * as React from 'react';
import { ThumbnailsIcon } from './thumbnails.icon';


export default {
  title: 'UI/Icons/UserInterface/ThumbnailsIcon',
  component: ThumbnailsIcon,
}

export const Basic = (args) => {
  return (<ThumbnailsIcon {...args}/>);
}

export const Standard = () => (<Basic viewType="standard"/>);

export const Filled = () => (<Basic viewType="filled"/>);
