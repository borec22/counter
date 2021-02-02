import React, {ChangeEvent, useEffect} from 'react';
import classes from './App.module.css';
import {Button} from './components/Button/Button';
import {Display} from './components/Display/Display';
import {
   InitialStateType as counterType,
   useDispatch,
   setCount,
   setError,
   setMaxValue, setMessage,
   setSettingsMode,
   setShowMainButtons, setStartValue
} from './redux/reducer';
import {useSelector} from 'react-redux';
import {AppRootStateType} from './redux/store';

function App() {
   const dispatch= useDispatch();
   const state = useSelector<AppRootStateType, counterType>(state => state.counter);

   let {startValue, maxValue, count, error, settingsMode, showMainButtons} = state;

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
      <div className={classes.App}>
         <div className={classes.wrapper}>
            <Display count={count}
                     maxValue={maxValue}
                     view={settingsMode ? 'settings' : 'main'}
                     error={error}

                     setMaxValue={changeMaxValueHandler}
                     setStartValue={changeStartValueHandler}
                     startValue={startValue}
            />
            <div className={classes.control}>
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
                        <Button onClick={activateSettingsMode}
                                isDisable={Boolean(error)}>
                           SET
                        </Button>
                     </> :
                     <Button onClick={set}
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



