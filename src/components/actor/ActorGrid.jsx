import ActorCard from "./ActorCard";
import { FlexGrid } from "../common/FlexGrid";
const ActorGrid = ({actors}) =>{
    return (
        <FlexGrid>
            {actors.map(data=> <ActorCard key={data.person.id} 
                name={data.person.name}
                image={data.person.image ? data.person.image.medium: '/not-found-image.png'} 
                gender={data.person.gender}
                country={data.person.country? data.person.country.name: null}
                birthday={data.person.birthday? data.person.birthday: null}
                dethday={data.person.dethday? data.person.dethday: null}/>)}
        </FlexGrid>
    )

}

export default ActorGrid;