import React, {useState} from 'react';
import {Button, PropsType} from './Button';
import {action} from '@storybook/addon-actions';
import {Meta, Story} from '@storybook/react/types-6-0';


export default {
   title: 'Counter/Button',
   component: Button,
} as Meta;

const callback = action('count changed value plus one');

const Template: Story<PropsType> = (args) => <Button {...args}>increase</Button>

const baseArgs = {
   onClick: callback
}

export const ButtonDefaultExample = Template.bind({});

ButtonDefaultExample.args = {
   ...baseArgs,
   isDisable: false
}

export const ButtonDisabledExample = Template.bind({});

ButtonDisabledExample.args = {
   ...baseArgs,
   isDisable: true
}
