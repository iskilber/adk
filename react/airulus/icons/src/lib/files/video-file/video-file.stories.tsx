import * as React from 'react';
import { VideoFileIcon } from './video-file.icon';


export default {
  title: 'UI/Icons/Files/VideoFileIcon',
  component: VideoFileIcon,
}

export const Basic = (args) => {
  return (<VideoFileIcon {...args}/>);
}

export const Standard = () => (<Basic viewType="standard"/>);

export const Filled = () => (<Basic viewType="filled"/>);
