import * as React from 'react';
import { ExpandArrowIcon } from './expand-arrow.icon';


export default { 
  title: 'UI/Icons/Arrows/ExpandArrrowIcon',
  component: ExpandArrowIcon,
  decorators: [(Story) => <div style={{width: '250px'}}><Story /></div>]
}

export const Basic = (args) => <ExpandArrowIcon {...args}/>;

Basic.args = {
  rotate: 'top'
}

Basic.argTypes = {
  rotate: { control: 'text'}
}

export const Top = () => <ExpandArrowIcon rotate="top"/>;

export const Left = () => <ExpandArrowIcon rotate="left"/>;

export const Right = () => <ExpandArrowIcon rotate="right"/>;

export const Bottom = () => <ExpandArrowIcon rotate="bottom"/>;
