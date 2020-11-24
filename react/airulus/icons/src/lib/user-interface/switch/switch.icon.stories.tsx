import * as React from 'react';
import { SwitchIcon } from './switch.icon';


export default {
  title: 'user-interface/SwitchIcon',
  component: SwitchIcon,
}

export const Basic = (args) => {
  return (<SwitchIcon {...args}/>);
}

export const Off = () => (<SwitchIcon state="off"/>);

export const On = () => (<SwitchIcon state="on"/>);