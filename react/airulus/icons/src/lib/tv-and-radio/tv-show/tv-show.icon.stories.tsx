import * as React from 'react';
import { TvShowIcon } from './tv-show.icon';


export default {
  title: 'UI/Icons/Tv & Radio/TvShowIcon',
  component: TvShowIcon,
}

export const Basic = (args) => {
  return (<TvShowIcon {...args}/>);
}

export const Standard = () => (<Basic viewType="standard"/>);

export const Filled = () => (<Basic viewType="filled"/>);
