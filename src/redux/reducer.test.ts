import {
   InitialStateType,
   reducer,
   setCount,
   setError,
   setMaxValue,
   setMessage,
   setSettingsMode, setShowMainButtons,
   setStartValue
} from './reducer';

let startState: InitialStateType;
beforeEach(() => {
   startState = {
      startValue: 1,
      maxValue: 5,

      count: 1,
      message: '',
      error: '',

      settingsMode: false,
      showMainButtons: true
   }
})

test('start value should be changed', () => {
   const endState: InitialStateType = reducer(startState, setStartValue(3));

   expect(endState.startValue).toBe(3)
});

test('max value should be changed', () => {
   const endState: InitialStateType = reducer(startState, setMaxValue(10));

   expect(endState.maxValue).toBe(10)
});

test('count value should be changed', () => {
   const endState: InitialStateType = reducer(startState, setCount(1));

   expect(endState.count).toBe(1)
});

test('message should be changed', () => {
   const endState: InitialStateType = reducer(startState, setMessage('Stand Up'));

   expect(endState.message).toBe('Stand Up')
});

test('error message should be changed', () => {
   const endState: InitialStateType = reducer(startState, setError('Incorrect value!'));

   expect(endState.error).toBe('Incorrect value!')
});

test('settings mode should be changed', () => {
   const endState: InitialStateType = reducer(startState, setSettingsMode(true));

   expect(endState.settingsMode).toBe(true)
});

test('show main buttons should be false', () => {
   const endState: InitialStateType = reducer(startState, setShowMainButtons(false));

   expect(endState.showMainButtons).toBe(false)
});
