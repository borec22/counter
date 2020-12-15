import React, {useState} from 'react';
import s from './Button.module.css';

type PropsType = {
   onClick: () => void
   isDisable?: boolean
}

export const Button: React.FC<PropsType> = (props) => {
   const {children, onClick, isDisable, ...restProps} = props;

   const [isMouseDown, setIsMouseDown] = useState(false);

   const onMouseDownHandler = () => setIsMouseDown(true);
   const onMouseUpHandler = () => setIsMouseDown(false);

   return (
      <button disabled={isDisable}
              onClick={onClick}
              className={`${s.button} ${isMouseDown ? s.buttonDown : ''}`}
              {...restProps}
              onMouseDown={onMouseDownHandler}
              onMouseUp={onMouseUpHandler}>
         {children}
      </button>
   );
}