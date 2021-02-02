import {Provider} from 'react-redux';
import {store} from '../../redux/store';
import React from 'react';

export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => {
   return <Provider store={store}>{storyFn()}</Provider>
}