import * as React from 'react';
import { CloudIcon } from './cloud.icon';


export default {
  title: 'UI/Icons/Network/Cloud',
  component: CloudIcon,
}

export const Basic = (args) => {
  return (<CloudIcon {...args}/>);
}

export const Standard = () => (<Basic viewType="standard"/>);

export const Filled = () => (<Basic viewType="filled"/>);
