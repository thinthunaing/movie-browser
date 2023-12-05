import styled from "styled-components";

const Detail = ({status,premired,network}) =>{
    return(
        <DetailsWrapper>
            <p>Status: {status}</p>
            <p>Premired {premired} {!!network && `on ${network.name}` }</p>
         </DetailsWrapper>
    )
}
export default Detail;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;