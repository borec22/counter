import React, {useState} from 'react';
import {Button} from './Button';
import {action} from '@storybook/addon-actions';


export default {
   title: 'Buttons stories',
   component: Button,
}

export const ButtonDefault = () => {
   const callback = action('when clicked count changed value plus one');
   return <Button onClick={callback}>Add</Button>
}

export const ButtonDisabled = () => {
   const callback = action('when clicked count changed value plus one');
   return <Button onClick={callback} isDisable={true}>Add</Button>
}