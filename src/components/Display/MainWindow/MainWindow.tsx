import s from './MainWindow.module.css';
import React from 'react';

export type PropsType = {
   start: number
   finish: number
}

export function MainWindow(props: PropsType) {
   const {start, finish} = props;

   return (
      <div className={s.mainWindow}>
         <div className={`${s.total} ${start >= finish ? s.red : s.total}`}>
            {start}
         </div>
      </div>
   );
}