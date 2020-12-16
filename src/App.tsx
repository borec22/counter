import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from './components/Button/Button';
import {Display} from './components/Display/Display';

function App() {
   let [startValue, setStartValue] = useState<number>(JSON.parse(localStorage.getItem('start value') || '0'));
   let [maxValue, setMaxValue] = useState<number>(JSON.parse(localStorage.getItem('max value') || '5'));

   let [count, setCount] = useState<number>(startValue);
   let [message, setMessage] = useState<string>('');
   let [error, setError] = useState<string>('');

   let [settingsMode, setSettingsMode] = useState<boolean>(false);
   let [showMainButtons, setShowMainButtons] = useState<boolean>(true);

   useEffect(() => {
      if (startValue < 0 || maxValue <= startValue) {
         setError('Incorrect value!');
      } else {
         setError('')
      }
   }, [startValue, maxValue]);

   const activateSettingsMode = () => {
      setSettingsMode(true);
      setShowMainButtons(false);
   };
   const deactivateSettingsMode = () => setSettingsMode(false);

   const increase = () => setCount(count + 1);
   const reset = () => setCount(startValue);
   const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setMaxValue && setMaxValue(+e.currentTarget.value);
      setMessage(`enter values and press 'set'`);
   };
   const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setStartValue && setStartValue(+e.currentTarget.value);
      setMessage(`enter values and press 'set'`);
   };
   const set = () => {
      localStorage.setItem('start value', JSON.stringify(startValue));
      localStorage.setItem('max value', JSON.stringify(maxValue));

      setCount(startValue);
      deactivateSettingsMode();
      setMessage('');
      setShowMainButtons(true);
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



