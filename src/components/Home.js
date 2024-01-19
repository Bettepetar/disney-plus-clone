import { onSnapshot } from "firebase/firestore"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { setMovies } from "../features/movies/movieSlice"
import { selectUserName } from "../features/user/userSclice"
import { colRef } from "../firebase"
import ImgSlider from "./ImgSlider"
import NewDisney from "./NewDisney"
import Orignals from "./Originals"
import Recommends from "./Recommends"
import Trending from "./Trending"
import Viewers from "./Viewers"

 const  Home = (props)  => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        console.log('Hello manny');
    }, [])
    // console.log('hey')

    useEffect(() => {
        //useEffect to collect all existing data frm db and cycle through them and insert into appropriate var for dispatch
        onSnapshot(colRef, (snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, {id: doc.id, ...doc.data()}];
                        // console.log(recommends)
                        break;
                    case 'trending': 
                        trending =[...trending, {id: doc.id, ...doc.data()}];
                        // console.log(trending)
                        break;
                    case 'new':
                        newDisney = [...newDisney, {id: doc.id, ...doc.data()}]
                        // console.log(newDisney)
                        break;
                    case 'original':
                        originals = [...originals, {id: doc.id, ...doc.data()}]
                        // console.log(originals)
                        break
                    default:
                        break;
                }
            })
            dispatch(setMovies({
                newDisney: newDisney,
                trending: trending,
                original: originals,
                recommend: recommends,
                // payload of the setMovies action to be dispached to the reducer
            }))
        })
    }, [userName])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Orignals />
            <Trending />
        </Container>
    )
}


const Container = styled.main`
    position: relative;
    top: 72px;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    padding: 0 calc(3.5vw + 5px);

    &::after{
        content: '';
        background: url('/images/home-background.png') center center / cover no-repeat;
        position: absolute;
        inset: 0;
        opacity: 1;
        z-index: -1;
        height: 100%;
    }
`;
export default  Home ;