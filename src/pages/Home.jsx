import { useState } from 'react';
import { searchForshow, searchForpeople } from '../api/tvmaze_api';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/show/ShowGrid';
import ActorGrid from '../components/actor/ActorGrid';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  //this is using other library called tanstack cause of can do 
  const [filter, setFilter] = useState(null)

  const { data:apiData,error:apidataError } = useQuery({
      queryKey: ['search', filter],
      queryFn: () => filter.searchOption === 'shows'? searchForshow(filter.searchStr)
      : searchForpeople(filter.searchStr),
      // ⬇️ disabled as long as the filter is empty
      enabled: !!filter,
      refetchOnWindowFocus:false,  //use for prevent fetching the same page 
  })

  

  
  

  const onSearch = async ({searchStr,searchOption}) => {
   
   
    setFilter({searchStr,searchOption});
    

    

   
  };

  const renderApidata = ()=>{

    if(apidataError){
      return <div>Error Occured:{apidataError.message}</div>
    }

    if(apiData?.length === 0){
      return <div>result not found</div>
    }

    if(apiData){
      return apiData[0].show? <ShowGrid shows={apiData}/> : <ActorGrid actors={apiData}/>
     
     
    }

    return null;
  }

   //https://api.tvmaze.com/search/shows?q=girls

  //  const [counter,setCount] = useCustom(0);
  //  const onIncrease= () =>{
  //   setCount(counter+1);
  //   console.log(setCount)
  
  return (
    <div>
      <SearchForm onSearch={onSearch}/>
      <div>{renderApidata()}</div>
     
    </div>
  );
};



export default Home;




// const reducerFn = (currentState,dispatchArg)=> { console.log(dispatchArg) 
//   return dispatchArg}

// const initializer = initialArg => { console.log(initialArg) 
//   return initialArg}



//   const useCustom = (initialValue)=>{
//     return useReducer(reducerFn,initialValue)
//   }

 

  
 
