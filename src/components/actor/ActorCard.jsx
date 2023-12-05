import { SearchCard, SearchImgWrapper } from "../common/SearchCard";

const ActorCard = ({name,image,gender,country,birthday,dethday}) =>{
    return(
        <SearchCard>
            <SearchImgWrapper>
                <img src={image} alt={name} />
            </SearchImgWrapper>
            <h1>{name} {`(${gender})`}</h1>
            <p>{country? `Come FRom ${country}`: `no country known`}</p>

            {!!birthday&& <p>Born {birthday}</p>}

            <p>{dethday? `Died ${dethday}`: `Alive`}</p>
        </SearchCard>
    )
}

export default ActorCard;