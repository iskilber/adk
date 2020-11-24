import * as React from 'react';
import { View } from './view.component';


export default {
  title: 'Airulus/Layout/View',
  component: View,
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
  <View {...props} style={{ 
    background: '#f6f9fc', 
    height: '400px', 
    width: '600px', 
    border: '5px solid #9596a6'
  }}>
    Story content
  </View>;


export const Default = Template.bind({})