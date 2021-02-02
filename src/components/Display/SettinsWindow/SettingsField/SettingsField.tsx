import React, {ChangeEvent} from 'react';
import s from './SettingsField.module.css';

export type PropsType = {
   value: number
   error: string
   onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
   label: string
}

export const SettingsField: React.FC<PropsType> = (props) => {
   const {value, error, onChangeHandler, label} = props;

   return (
      <div className={`${s.field} ${s.fieldSecond}`}>
         <div className={s.label}>
            <label> {label} </label>
         </div>
         <div className={s.fieldItem}>
            <input type="number"
                   value={value}
                   size={15}
                   className={`${s.input} ${error ? s.error : ''}`}
                   onChange={onChangeHandler}/>
         </div>
      </div>
   );
}