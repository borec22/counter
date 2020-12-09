import React from 'react';
import s from './Display.module.css';

type PropsType = {
   count: number
   maxTotal: number
}

export const Display: React.FC<PropsType> = (props) => {
   const {count, maxTotal} = props;

   return (
      <div className={s.display}>
         <div className={`${s.total} ${count > maxTotal ? s.red : s.total}`}>
            {count}
         </div>
      </div>
   );
}