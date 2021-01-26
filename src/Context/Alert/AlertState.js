import React, {useReducer} from 'react'
import AlertContext from './AlertContext';
import {v4 as uuid} from "uuid"; 
import AlertReducer from './AlertReducer';
import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types'

const AlertState = props => {
  const intitialState = []
    

  const [state, dispatch] = useReducer(AlertReducer, intitialState)

// Set Alert
  const setAlert = (msg, type, timeout= 5000) => {
    const id = uuid()
    dispatch({
      type:SET_ALERT,
      payload: { msg, type, id}
    })

    setTimeout(() => dispatch({type:REMOVE_ALERT, payload:id}), timeout )
  }


  return (
    <AlertContext.Provider 
      value={{
        alerts: state,
        setAlert
      }}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState;