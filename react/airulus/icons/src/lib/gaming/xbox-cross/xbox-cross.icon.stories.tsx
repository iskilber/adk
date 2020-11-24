import * as React from 'react';
import { XBoxCrossIcon } from './xbox-cross.icon';


export default {
  title: 'UI/Icons/Gaming/XBox Cross',
  component: XBoxCrossIcon,
}

export const Basic = (args) => {
  return (<XBoxCrossIcon {...args}/>);
}

export const Standard = () => (<Basic viewType="standard"/>);

export const Filled = () => (<Basic viewType="filled"/>);
