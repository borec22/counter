import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {SettingsField, PropsType} from './SettingsField';

export default {
   title: 'Counter/SettingsField',
   component: SettingsField,
} as Meta;

const onChangeHandlerCallback = action('Value changed');

const Template: Story<PropsType> = (args) => <SettingsField {...args} />;

const baseArgs = {
   onChangeHandler: onChangeHandlerCallback
}

export const SettingsFieldBaseExample = Template.bind({});

SettingsFieldBaseExample.args = {
   ...baseArgs,
   value: 2,
   error: '',
   label: 'start value'
}