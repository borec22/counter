import React, {ChangeEvent} from 'react';
import s from './SettingsWindow.module.css';
import {SettingsField} from './SettingsField/SettingsField';

export type PropsType = {
   maxValue: number
   startValue: number
   setStartValue: (e: ChangeEvent<HTMLInputElement>) => void
   setMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
   error: string
}

export function SettingsWindow(props: PropsType) {
   const {maxValue, startValue, setStartValue, setMaxValue, error} = props;

   return (
      <div className={s.settings}>
         <SettingsField value={maxValue}
                        error={error}
                        onChangeHandler={setMaxValue}
                        label='max value'
         />
         <SettingsField value={startValue}
                        error={error}
                        onChangeHandler={setStartValue}
                        label='start value'
         />
      </div>
   );
}

