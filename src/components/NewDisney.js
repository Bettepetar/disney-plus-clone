import styled from "styled-components";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectNewDsiney } from "../features/movies/movieSlice";
// import { onSnapshot } from "firebase/firestore";
// import { colRef } from "../firebase";

const NewDisney = (props) => {
    let movies = useSelector(selectNewDsiney);
    return ( 
        <Container>
            <h4>New to Disney +</h4>
            <Content>
                {
                    movies && 
                        movies.map((movie, key) => (
                            <Wrap key={key}>
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} alt="" />
                                </Link>
                            </Wrap>
                        ))
                }
            </Content>
        </Container>
     );
}

const Container = styled.div`
    padding: 0 0 26px;
`
const Content = styled.div`
    margin-top: 20px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4 , minmax(0, 1fr));

    @media (max-width: 768px){
        grid-template-columns: repeat(2 , minmax(0, 1fr));
    }

`
const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    // transform: scale(1.05);
    overflow: hidden;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, .1);;
    position: relative;

    img{
        inset: 0px;
        object-fit: cover;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all .5s ease;
        z-index: 1;
    }
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
          rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, .8);
        tansform: scale(1.5)
    }
`;


export default NewDisney;