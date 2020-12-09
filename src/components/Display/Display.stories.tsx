import React from 'react';
import {Display} from './Display';
import {Story} from '@storybook/react/types-6-0';

type DisplayType = {
   count: number
   maxTotal: number
}

export default {
   title: 'Display stories',
   component: Display,
}

const Template: Story<DisplayType> = (args) => <Display {...args} />

export const DisplayDefault = Template.bind({});
DisplayDefault.args = {
   count: 3,
   maxTotal: 5
}

export const DisplayWhenCountMoreThenMaximum = Template.bind({});
DisplayWhenCountMoreThenMaximum.args = {
   count: 6,
   maxTotal: 5
}