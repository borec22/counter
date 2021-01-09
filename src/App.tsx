import React, {ChangeEvent, useEffect, useReducer, useState} from 'react';
import './App.css';
import {Button} from './components/Button/Button';
import {Display} from './components/Display/Display';
import {
   InitialStateType,
   reducer,
   setCount,
   setError,
   setMaxValue, setMessage,
   setSettingsMode,
   setShowMainButtons, setStartValue
} from './redux/reducer';

function App() {
   // let [startValue, setStartValue] = useState<number>(JSON.parse(localStorage.getItem('start value') || '0'));
   // let [maxValue, setMaxValue] = useState<number>(JSON.parse(localStorage.getItem('max value') || '5'));
   //
   // let [count, setCount] = useState<number>(startValue);
   // let [message, setMessage] = useState<string>('');
   // let [error, setError] = useState<string>('');
   //
   // let [settingsMode, setSettingsMode] = useState<boolean>(false);
   // let [showMainButtons, setShowMainButtons] = useState<boolean>(true);

   let min = JSON.parse(localStorage.getItem('start value') || '0');
   let max = JSON.parse(localStorage.getItem('max value') || '5');

   const initialState: InitialStateType = {
      startValue: min,
      maxValue: max,

      count: min,
      message: '',
      error: '',

      settingsMode: false,
      showMainButtons: true
   }

   let [state, dispatch] = useReducer(reducer, initialState);

   let {startValue, maxValue, count, message, error, settingsMode, showMainButtons} = state;

   useEffect(() => {
      if (startValue < 0 || maxValue <= startValue) {
         dispatch(setError('Incorrect value!'))
      } else {
         dispatch(setError(''))
      }
   }, [startValue, maxValue]);

   const activateSettingsMode = () => {
      dispatch(setSettingsMode(true));
      dispatch(setShowMainButtons(false));
   };
   const deactivateSettingsMode = () => dispatch(setSettingsMode(false));

   const increase = () => dispatch(setCount(count + 1));
   const reset = () => dispatch(setCount(startValue));

   const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setMaxValue(+e.currentTarget.value));
      dispatch(setMessage(`enter values and press 'set'`));
   };
   const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setStartValue(+e.currentTarget.value));
      dispatch(setMessage(`enter values and press 'set'`));
   };
   const set = () => {
      localStorage.setItem('start value', JSON.stringify(startValue));
      localStorage.setItem('max value', JSON.stringify(maxValue));

      dispatch(setCount(startValue));
      deactivateSettingsMode();
      dispatch(setMessage(''));
      dispatch(setShowMainButtons(true));
   }

   return (
      <div className='App'>
         <div className='wrapper'>
            <Display count={count}
                     maxValue={maxValue}
                     view={settingsMode ? 'settings' : 'main'}
                     message={message}
                     error={error}

                     setMaxValue={changeMaxValueHandler}
                     setStartValue={changeStartValueHandler}
                     startValue={startValue}
            />
            <div className='control'>
               {
                  showMainButtons ?
                     <>
                        <Button onClick={increase}
                                isDisable={count >= maxValue}>
                           INC
                        </Button>
                        <Button onClick={reset}
                                isDisable={count === startValue}>
                           RESET
                        </Button>
                        <Button onClick={settingsMode ? set : activateSettingsMode}
                                isDisable={Boolean(error)}>
                           SET
                        </Button>
                     </> :
                     <Button onClick={settingsMode ? set : activateSettingsMode}
                             isDisable={Boolean(error)}>
                        SET
                     </Button>
               }
            </div>
         </div>

      </div>
   );
}

export default App;



