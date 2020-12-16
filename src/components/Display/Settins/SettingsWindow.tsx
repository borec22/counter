import React, {ChangeEvent} from 'react';
import s from './SettingsWindow.module.css';

type PropsType = {
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
         <div className={`${s.field} ${s.fieldFirst}`}>
            <div className={s.label}>
               <label> max value </label>
            </div>
            <div className={s.fieldItem}>
               <input type="number"
                      value={maxValue}
                      size={10}
                      className={`${s.input} ${error ? s.error : ''}`}
                      onChange={setMaxValue}/>
            </div>
         </div>
         <div className={`${s.field} ${s.fieldSecond}`}>
            <div className={s.label}>
               <label> start value </label>
            </div>
            <div className={s.fieldItem}>
               <input type="number"
                      value={startValue}
                      size={15}
                      className={`${s.input} ${error ? s.error : ''}`}
                      onChange={setStartValue}/>
            </div>
         </div>
      </div>
   );
}