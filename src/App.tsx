import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from './components/Button/Button';
import {Display} from './components/Display/Display';

function App() {
   let [startValue, setStartValue] = useState<number>( JSON.parse(localStorage.getItem('start value') || '0'));
   let [maxValue, setMaxValue] = useState<number>(JSON.parse(localStorage.getItem('max value') || '5'));

   let [count, setCount] = useState<number>(startValue);
   let [message, setMessage] = useState<string>('');
   let [error, setError] = useState<string>('');
   let [isDisabledSet, setIsDisabledSet] = useState<boolean>(true);

   useEffect(() => {
      if (startValue < 0 || maxValue <= startValue) {
         setError('Incorrect value!');
      } else {
         setError('')
      }
   }, [startValue, maxValue]);

   const increase = () => setCount(count + 1);
   const reset = () => setCount(startValue);
   const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setMaxValue && setMaxValue(+e.currentTarget.value);
      setMessage(`enter values and press 'set'`);
      setIsDisabledSet(false);
   };
   const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setStartValue && setStartValue(+e.currentTarget.value);
      setMessage(`enter values and press 'set'`);
      setIsDisabledSet(false);
   };
   const set = () => {
      localStorage.setItem('start value',  JSON.stringify(startValue));
      localStorage.setItem('max value', JSON.stringify(maxValue));

      setCount(startValue);
      setMessage('');
      setIsDisabledSet(true);
   }

   return (
      <div className='App'>

         <div className='wrapper'>
            <Display count={count}
                     maxValue={maxValue}
                     startValue={startValue}
                     view='settings'
                     error={error}
                     setMaxValue={changeMaxValueHandler}
                     setStartValue={changeStartValueHandler}
            />
            <div className='control'>
               <Button onClick={set} isDisable={Boolean(error) || isDisabledSet}>SET</Button>
            </div>
         </div>

         <div className='wrapper'>
            <Display count={count}
                     maxValue={maxValue}
                     view='main'
                     message={message}
                     error={error}
            />
            <div className='control'>
               <Button onClick={increase}
                       isDisable={!isDisabledSet || count >= maxValue}>
                  INC
               </Button>
               <Button onClick={reset}
                       isDisable={!isDisabledSet || count === startValue}>
                  RESET
               </Button>
            </div>
         </div>

      </div>
   );
}

export default App;



