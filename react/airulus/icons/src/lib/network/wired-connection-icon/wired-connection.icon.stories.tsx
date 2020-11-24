import * as React from 'react';
import {
  WiredConnectionIcon,
  WiredConnectionIconState
  } from './wired-connection.icon';


export default { 
  title: 'UI/Icons/Network/WiredConnectionIcon',
  component: WiredConnectionIcon,
  decorators: [(Story) => <div style={{width: '250px'}}><Story /></div>]
}

export const Basic = (args) => <WiredConnectionIcon {...args}/>;

Basic.args = {
  state: WiredConnectionIconState.ON
}

export const Connected = () => <WiredConnectionIcon state={WiredConnectionIconState.ON}/>;

export const Connecting = () => <WiredConnectionIcon state={WiredConnectionIconState.CONNECING}/>;

export const FilledConnecting = () => <WiredConnectionIcon 
  state={WiredConnectionIconState.CONNECING} 
  viewType="filled"/>
