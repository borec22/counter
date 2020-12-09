import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button/Button';
import {Display} from './components/Display/Display';

function App() {
   const max = 4;
   const min = 0;
   let [count, setCount] = useState<number>(min);

   const increase = () => setCount(count + 1);
   const reset = () => setCount(0);

   return (
      <div className='App'>
         <div className='AppWrapper'>
            <Display count={count} maxTotal={max} />
            <div className='control'>
               <Button onClick={increase} isDisable={count > max}>INC</Button>
               <Button onClick={reset} isDisable={count === min}>RESET</Button>
            </div>
         </div>
      </div>
   );
}

export default App;



