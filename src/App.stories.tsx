import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import App from './App';
import {ReduxStoreProviderDecorator} from './stories/decorators/ReduxStoreProviderDecorator';

export default {
   title: 'Counter/App',
   component: App,
   decorators: [ReduxStoreProviderDecorator]
} as Meta;


const Template: Story = () => <App/>;

export const AppBaseExample = Template.bind({});

AppBaseExample.args = {}

