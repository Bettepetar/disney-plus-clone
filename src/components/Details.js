import styled from "styled-components";
import {useParams} from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { colRef } from "../firebase";
import { useEffect, useState } from "react";

const Details = () => {
    const { id } = useParams()
    const [detailData, setDetailData] = useState({});
    useEffect(() => {
        getDoc(doc(colRef, id))
        .then((doc) => setDetailData({...doc.data()}))
        .catch((err) => console.log(err.message))
    }, [id])

    console.log(detailData)

    return ( 
        <Container>
            <Background>
                <img src={detailData.backgroundImg} alt="" />
            </Background>

            <ImageTtitle> 
                <img src={detailData.titleImg} alt="" />
            </ImageTtitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>play</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span></span>
                        <span></span>
                    </AddList>
                    <GroupWatch>
                        <img src="/images/group-icon.png" alt="" />
                    </GroupWatch>
                </Controls>
                <Subtitle>
                    {detailData.title}
                </Subtitle>
                <Description>
                    {detailData.description}
                </Description>
            </ContentMeta>
        </Container>
     );
}
 


const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hiddem;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw - 5px);

`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .8;
    z-index: -1;

    img{
        width: 100%;
        height: 100%;

        @media (max-width: 786px){
                width: initial;
        }
    }
`
 
const  ImageTtitle = styled.div`
    display: flex;
    align-items: flex-start;
    -webkit-box-park: end;
    jsutify-content: flex-end;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;
    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`
const ContentMeta = styled.div`
    max-width: 874px;
`
const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 24px 0;
    min-height: 56px;
`
const Player = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    border-radius: 4px;
    border: transparent;
    margin: 0 22px 0 0;
    font-size: 15px;
    height: 56px;
    cursor: pointer;
    text-transform: uppercase;
    backgroung: rgb (249, 249, 249);
    letter-spacing: 1.8px;
    color: rgb (0 ,0 ,0);
    transition: all .3s ease;
    img{
        width: 32px;
    }
    &:hover{
        background: rgb(198, 198, 198);
    }
    @media (max-width: 768px){
        height: 45px;
        padding: 0 12px;
        font-size: 12px;
        margin: 0 10px 0 0;
        img{
            width: 25px;
        }
    }
`
const Trailer = styled(Player)`
    background: rgba(0,0,0,.3);
    border: 1px solid rgb(249, 249. 249);
    color: rgb(249, 249, 249);
`
const AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, 0.8);
    border-radius: 50%;
    border: 3px solid #fff;
    cursor: pointer;
    span {
        background-color: rgba(249, 249, 249);
        display: inline-block;
        
        &:first-child{
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }
        &:nth-child(2){
            height: 16px;
            transform: translate(-8px, 0px) rotate(0deg);
            width: 2px;
        }
    }
`
const GroupWatch = styled(AddList)`

`
const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;

    @media (max-width: 768px){
        font-size: 12px;
    }
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0;
    color: rgb(249, 249, 249);
    @media (max-width: 768px){
        font-size: 14px;
    }
`
export default Details;