import { getShowByIds } from "../api/tvmaze_api";
import { TextCenter } from "../components/common/TextCenter";
import ShowGrid from "../components/show/ShowGrid";
import { useStarredShows } from "../lib/useStarredShow";
import { useQuery } from "@tanstack/react-query";
const Starred = ()=>{
    const [starredShowsIds] = useStarredShows();

    const { data:starredShows,error:starredShowsError } = useQuery({
        queryKey: ['starred', starredShowsIds],
        queryFn: () => 
        getShowByIds(starredShowsIds).then(result => 
            result.map(show => ({show}))),
        refetchOnWindowFocus:false,  //use for prevent fetching the same page 
    })

    if(starredShows?.length ===0){
        return <TextCenter>No shows were starred</TextCenter>
    }
    if(starredShows?.length >0){
        return <ShowGrid shows={starredShows}/>
    }
    if(starredShowsError){
        return <TextCenter>Error Occur:{starredShowsError.message}</TextCenter>
    }
    return(
        <TextCenter>The show are loading</TextCenter>
    )
}
export default Starred;