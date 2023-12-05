import { useStarredShows } from "../../lib/useStarredShow";
import ShowCard from "./ShowCard";
import { FlexGrid } from "../common/FlexGrid";
import NOTFOUND from '../../lib/not-found-image.png';


const ShowGrid = ({shows}) =>{
    const [starredShows,dispatchStarred] = useStarredShows();

    console.log(starredShows)

    const onstarredMeClick = showId =>{
        const isStarred = starredShows.includes(showId);

        if(isStarred){
            dispatchStarred({type: 'UNSTAR', showId})
        }else{
            dispatchStarred({type: 'STAR', showId})
        }
    }
    console.log(shows)
    return (
        <FlexGrid>
            {shows.map(data=> <ShowCard key={data.show.id} name={data.show.name}
            image={data.show.image?  data.show.image.medium : NOTFOUND} 
            summary={data.show.summary} id={data.show.id}
            onstarredMeClick={onstarredMeClick}
            isStarred={starredShows.includes(data.show.id)}/>)}
        </FlexGrid>
    )

    }  

export default ShowGrid;