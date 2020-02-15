export const setSession = (activeSession) => {
	return {
		type: "SET_SESSION",
		activeSession
	}
}

export const countUp = (direction)=> {
	return {
		type: "INCREASE_VALUE",
		direction
	}
}

export const countDown = (direction) => {
	return {
		type: "DECREASE_VALUE",
		direction
	}
}

