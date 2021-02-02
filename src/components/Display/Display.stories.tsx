import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {Display, PropsType} from './Display';

export default {
   title: 'Counter/Display',
   component: Display,
} as Meta;

const setMaxValueCallback = action('Max value changed');
const setStartValueCallback = action('Start value changed');

const Template: Story<PropsType> = (args) => <Display {...args} />;

const baseArgs = {
   setMaxValue: setMaxValueCallback,
   setStartValue: setStartValueCallback,
}

export const DisplayMainWindowExample = Template.bind({});

DisplayMainWindowExample.args = {
   ...baseArgs,
   count: 1,
   maxValue: 5,
   startValue: 1,
   view: 'main',
   error: ''
}

export const DisplaySettingsWindowExample = Template.bind({});

DisplaySettingsWindowExample.args = {
   ...baseArgs,
   count: 1,
   maxValue: 5,
   startValue: 1,
   view: 'settings',
   error: ''
}