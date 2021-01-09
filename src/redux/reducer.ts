export type InitialStateType = {
   startValue: number
   maxValue: number
   count: number
   message: string
   error: string
   settingsMode: boolean
   showMainButtons: boolean
}

type ActionsType =
   ReturnType<typeof setStartValue> |
   ReturnType<typeof setMaxValue> |
   ReturnType<typeof setCount> |
   ReturnType<typeof setMessage> |
   ReturnType<typeof setError> |
   ReturnType<typeof setSettingsMode> |
   ReturnType<typeof setShowMainButtons>;

const SET_START_VALUE = 'SET-START-VALUE-REDUCER';
const SET_MAX_VALUE = 'SET-MAX-VALUE-REDUCER';
const SET_COUNT = 'SET-COUNT-VALUE-REDUCER';
const SET_MESSAGE = 'SET-MESSAGE-REDUCER';
const SET_ERROR = 'SET-ERROR-REDUCER';
const SET_SETTINGS_MODE = 'SET-SETTINGS-MODE-REDUCER';
const SET_SHOW_MAIN_BUTTONS = 'SET-SHOW-MAIN-BUTTONS-REDUCER';

export const reducer = (state: InitialStateType, action: ActionsType): InitialStateType => {
   switch (action.type) {
      case SET_START_VALUE: {
         return {...state, startValue: action.value}
      }
      case SET_MAX_VALUE: {
         return {...state, maxValue: action.value}
      }
      case SET_COUNT: {
         return {...state, count: action.value}
      }
      case SET_MESSAGE: {
         return {...state, message: action.message}
      }
      case SET_ERROR: {
         return {...state, error: action.text}
      }
      case SET_SETTINGS_MODE: {
         return {...state, settingsMode: action.typeMode}
      }
      case SET_SHOW_MAIN_BUTTONS: {
         return {...state, showMainButtons: action.isShow}
      }
      default:
         return state;
   }
}

export const setStartValue = (value: number) => ({type: SET_START_VALUE, value}) as const;
export const setMaxValue = (value: number) => ({type: SET_MAX_VALUE, value}) as const;
export const setCount = (value: number) => ({type: SET_COUNT, value}) as const;
export const setMessage = (message: string) => ({type: SET_MESSAGE, message}) as const;
export const setError = (text: string) => ({type: SET_ERROR, text}) as const;
export const setSettingsMode = (typeMode: boolean) => ({type: SET_SETTINGS_MODE, typeMode}) as const;
export const setShowMainButtons = (isShow: boolean) => ({type: SET_SHOW_MAIN_BUTTONS, isShow}) as const;
