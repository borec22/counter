import React from 'react';
import s from './Button.module.css';

type PropsType = {
   onClick: () => void
   isDisable?: boolean
}

export const Button: React.FC<PropsType> = (props) => {
   const {children, onClick, isDisable, ...restProps} = props;

   return (
      <button disabled={isDisable}
              onClick={onClick}
              className={s.button} {...restProps}>
         {children}
      </button>
   );
}