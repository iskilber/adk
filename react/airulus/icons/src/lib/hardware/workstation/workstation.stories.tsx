import * as React from 'react';
import { WorkstationIcon } from './workstation.icon';


export default {
  title: 'UI/Icons/Hardware/Workstation',
  component: WorkstationIcon,
}

export const Basic = (args) => {
  return (<WorkstationIcon {...args}/>);
}

export const Standard = () => (<Basic viewType="standard"/>);

export const Filled = () => (<Basic viewType="filled"/>);
