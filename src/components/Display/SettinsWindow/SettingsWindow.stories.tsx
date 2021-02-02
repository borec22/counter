import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {SettingsWindow, PropsType} from './SettingsWindow';

export default {
   title: 'Counter/SettingsWindow',
   component: SettingsWindow,
} as Meta;

const setMaxValueCallback = action('Max value changed');
const setStartValueCallback = action('Start value changed');

const Template: Story<PropsType> = (args) => <SettingsWindow {...args} />;

const baseArgs = {
   setMaxValue: setMaxValueCallback,
   setStartValue: setStartValueCallback,
}

export const SettingsWindowBaseExample = Template.bind({});

SettingsWindowBaseExample.args = {
   ...baseArgs,
   maxValue: 10,
   startValue: 1,
   error: ''
}