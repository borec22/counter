import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {MainWindow, PropsType} from './MainWindow';


export default {
   title: 'Counter/MainWindow',
   component: MainWindow,
} as Meta;

const Template: Story<PropsType> = (args) => <MainWindow {...args} />;

export const MainWindowBaseExample = Template.bind({});

MainWindowBaseExample.args = {
   start: 1,
   finish: 10
}