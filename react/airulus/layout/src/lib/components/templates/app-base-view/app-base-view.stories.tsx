import * as React from 'react';
import { AppBaseView } from './app-base-view.component';


export default {
  title: 'Airulus/Layout/App Base View',
  component: AppBaseView,
  argTypes: {
    contentVerticalPosition: {
      control: { 
        type: 'select', 
        options: [ 'top', 'centered', 'bottom' ]}
    },
    contentHorizontalPosition: {
      control: { 
        type: 'select', 
        options: [ 'left', 'centered', 'right' ]}
    }
  }
}

const Template = (props) => 
  <AppBaseView {...props} style={{ 
    height: '400px', 
    width: '600px', 
    border: '5px solid #9596a6'
  }}>
    Story content
  </AppBaseView>;


export const Default = Template.bind({})