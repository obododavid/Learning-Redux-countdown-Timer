const reducer = (state, action) =>{
	const activeSession = state.activeSession
	switch(action.type){
		case "SET_SESSION":
			return{
				...state,
				activeSession: action.activeSession
			};
		case "INCREASE_VALUE":
			console.log(activeSession)
			if(activeSession=== "DAYS"){
				return {
					...state,
					days : state.days + 1
				}
			}else if(activeSession=== "HOURS"){
				return{
					...state,
					hours : state.hours + 1
				}
			}else if(activeSession=== "MINUTES"){
				return{
					...state,
					minutes: state.minutes + 1
				}
			}else if(activeSession=== "SECONDS"){
				return{
					...state,
					seconds: state.seconds + 1
				}	
			};
		case "DECREASE_VALUE":
			console.log(activeSession)
			if(activeSession=== "DAYS"){
				return {
					...state,
					days : state.days - 1
				}
			}else if(activeSession=== "HOURS"){
				return{
					...state,
					hours : state.hours - 1
				}
			}else if(activeSession=== "MINUTES"){
				return{
					...state,
					minutes: state.minutes - 1
				}
			}else if(activeSession=== "SECONDS"){
				return{
					...state,
					seconds: state.seconds - 1
				}	
			};
		default:
			return state;
	}
}

export default reducer