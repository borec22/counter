import s from './MainWindow.module.css';
import React from 'react';

type PropsType = {
   start: number
   finish: number
   error: string
   message: string
}

export function MainWindow(props: PropsType) {
   const {start, finish, error, message} = props;

   return (
      <div className={s.mainWindow}>
         {
            message ?
               <div className={error ? s.errorMessage : s.message}>
                  {error ? error : message}
               </div> :
               <div className={`${s.total} ${start >= finish ? s.red : s.total}`}>
                  {start}
               </div>
         }
      </div>
   );
}