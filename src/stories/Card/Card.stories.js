import { fn } from '@storybook/test';
import {Card }from './Card';
// import { Component } from 'react';
export default {
    title: 'Example/Card',
    component: Card,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    
    tags: ['autodocs'],
   
    argTypes: {
      backgroundColor: { control: 'color' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
  };

  
  export const Primary = {
    args: {
      primary: true,
      label: 'Button',
    },
  };
  
  export const Secondary = {
    args: {
      label: 'Button',
    },
  };
  
  export const Large = {
    args: {
      size: 'large',
      label: 'Button',
    },
  };
  
  export const Small = {
    args: {
      size: 'small',
      label: 'Button',
    },
  };
  