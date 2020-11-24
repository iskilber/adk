import * as React from 'react';
import { BasicArrowIcon } from './basic-arrow.icon';


export default {
  title: 'UI/Icons/Arrows/BasicArrow',
  component: BasicArrowIcon,
}

export const Basic = (args) => {
  return (<BasicArrowIcon {...args}/>);
}

export const Standard = () => (<Basic viewType="standard"/>);

export const Filled = () => (<Basic viewType="filled"/>);
