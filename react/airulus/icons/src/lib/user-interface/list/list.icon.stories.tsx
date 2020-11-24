import * as React from 'react';
import { ListIcon } from './list.icon';


export default {
  title: 'UI/Icons/UserInterface/ListIcon',
  component: ListIcon,
}

export const Basic = (args) => {
  return (<ListIcon {...args}/>);
}

export const Standard = () => (<ListIcon viewType="standard"/>);

export const Filled = () => (<ListIcon viewType="filled"/>);
