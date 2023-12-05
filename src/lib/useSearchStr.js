import { useEffect,useState } from "react";


const usePersistedState = ( initialState,sessionStorageKey) =>{
    const [state,setState] = useState(() =>{
        const persistedValue = sessionStorage.getItem(sessionStorageKey);

        return persistedValue ? JSON.parse(persistedValue) : initialState;
    });
   

    useEffect(()=>{
        sessionStorage.setItem(sessionStorageKey,JSON.stringify(state));
    },[state,sessionStorageKey]);

    console.log('state2',state)
    return [state,setState];
    
}

export const useSearchStr = () => {
    return usePersistedState('', 'searchString')
}