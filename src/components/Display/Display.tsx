import React, {ChangeEvent} from 'react';
import s from './Display.module.css';
import {SettingsWindow} from './Settins/SettingsWindow';
import {MainWindow} from './MainWindow/MainWindow';

export type ViewType = 'settings' | 'main';
export type PropsType = {
   count: number
   maxValue: number
   startValue: number
   view: ViewType
   message: string
   error: string
   setMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
   setStartValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Display: React.FC<PropsType> = (props) => {
   const {
      count = 0,
      maxValue = 1,
      startValue = 0,
      view,
      setMaxValue,
      setStartValue,
      message,
      error,
   } = props;

   return (
      <div className={s.display}>
         {
            view === 'settings' ?
               <SettingsWindow startValue={startValue}
                               maxValue={maxValue}
                               setStartValue={setStartValue}
                               setMaxValue={setMaxValue}
                               error={error}  /> :
               <MainWindow start={count}
                           finish={maxValue}
                           message={message}
                           error={error}/>
         }
      </div>
   );
}
