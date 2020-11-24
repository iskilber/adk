import * as React from 'react';
import { UploadToCloudIcon } from './upload-to-cloud.icon';


export default {
  title: 'UI/Icons/Network/UploadToCloud',
  component: UploadToCloudIcon,
}

export const Basic = (args) => {
  return (<UploadToCloudIcon {...args}/>);
}

export const Standard = () => (<Basic viewType="standard"/>);

export const Filled = () => (<Basic viewType="filled"/>);
