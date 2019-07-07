import {createStore} from 'redux'
import reducer from '../reducer/reducer'

const initState = {
	days: 11,
    hours: 31,
    minutes: 27,
    seconds: 11,
    activeSession: "DAYS"
}

export const store = createStore(reducer, initState)