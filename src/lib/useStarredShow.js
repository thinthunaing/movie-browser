import { useEffect,useReducer } from "react";


const usePersistedReducer = (reducer, initialState,localStorageKey) =>{
    const [state,dispatch] = useReducer(reducer,initialState, initial =>{
        const persistedValue = localStorage.getItem(localStorageKey);

        return persistedValue ? JSON.parse(persistedValue) : initial;
    });
    console.log('state1',state)

    useEffect(()=>{
        localStorage.setItem(localStorageKey,JSON.stringify(state));
    },[state,localStorageKey]);

    console.log('state2',state)
    return [state,dispatch];
    
}

const starredShowsReducer = (currentStarred,action) =>{
    switch(action.type){
        case 'STAR':
            return currentStarred.concat(action.showId);
        case 'UNSTAR':
            return currentStarred.filter(showId => showId !== action.showId);
        default:
            return currentStarred;
    }
}

export const useStarredShows= () =>{
    return usePersistedReducer(starredShowsReducer,[],'starredShows')
}