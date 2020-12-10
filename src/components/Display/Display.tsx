import React, {ChangeEvent} from 'react';
import s from './Display.module.css';

export type ViewType = 'settings' | 'main';
export type PropsType = {
   count?: number
   maxValue?: number
   startValue?: number
   view: ViewType
   message?: string
   error?: string
   setMaxValue?: (e: ChangeEvent<HTMLInputElement>) => void
   setStartValue?: (e: ChangeEvent<HTMLInputElement>) => void
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
               </div> :
               <div className={s.mainWindow}>
                  {
                     message ?
                        <div className={error ? s.errorMessage : s.message}>
                           {error ? error : message}
                        </div> :
                        <div className={`${s.total} ${count >= maxValue ? s.red : s.total}`}>
                           {count}
                        </div>
                  }
               </div>
         }
      </div>
   );
}