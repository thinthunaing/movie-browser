//import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import {useQuery} from '@tanstack/react-query';
import { getShowById } from "../api/tvmaze_api";
import ShowMainData from "../components/show/ShowMainData";
import Detail from "../components/show/Detail";
import Season from "../components/show/Season";
import Cast from "../components/show/Cast";

import styled from "styled-components";
// const useShowById = showId =>{

//     const [showData,setShowdata]= useState(null);
//     const [showError,setShowerror]= useState(null);
    
//     useEffect(()=>{
//         async function fetchData(){
//             try{
//                 const data = await getShowById(showId);
//                 setShowdata(data);
//             }catch(error){
//                 setShowerror(error);
//             }
            
//         }
//         fetchData();
//     },[showId])
//     return({showData,showError})
// }


const Show = ()=>{
    const {showId} = useParams();
    const {data:showData, error:showError} = useQuery({
         queryKey: ['show',showId], queryFn: ()=> getShowById(showId) })
   
   
    if(showData){return <ShowPageWrapper> 
        <BackHomeWrapper>
        <Link to={'/'}>Go Back Home</Link>
        </BackHomeWrapper>
       
        
        <ShowMainData 
        image={showData.image} 
        name={showData.name}
        rating={showData.rating}
        summary={showData.summary}
        genres={showData.genres}/>
        
        <InfoBlock>
            <h2>Details</h2>
            <Detail
            status={showData.status}
            premired={showData.premired}
            network={showData.network}/> 
        </InfoBlock>
       
        <InfoBlock>
            <h2>Seasons</h2>
            <Season
            seasons={showData._embedded.seasons}/>
        </InfoBlock>

        <InfoBlock>
            <h2>Casts</h2>
            <Cast
        casts={showData._embedded.cast}/>
        </InfoBlock>
       

        
{/* 
       <div>Counter: {counter}</div>
       <button type="button" onClick={onIncrease}>Count</button> */}


        </ShowPageWrapper> 
    
       }
    if(showError){return <div>We have an error: {showError.message}</div> }
   
    
    
    return (
        <div>
           Data is Loading
        </div>
    )
    
    
}
export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;