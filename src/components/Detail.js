import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="/images/bao-bg.jfif"/>
            </Background>
            <ImageTitle>
                <img src="/images/bao.png"/>
            </ImageTitle>
            <Controlls>
                <PlayButton>
                <img src="/images/play-icon-black.png"/>
                <span>PLAY</span>

                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png"/>
                <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controlls>
            <SubTitle>
                2018 - 7m - Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Description>
        </Container>
    )
}

export default Detail

const Container= styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`

const Background=styled.div`
    position: fixed;
    top 0;
    left 0;
    right 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


`

const ImageTitle=styled.div`

    height: 50vh;   
    min-height: 170px;
    width: 35vw;    
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controlls=styled.div`
    display: flex;
    align-items: center;
`

const PlayButton=styled.button`
     
   height: 56px;
   border-radius: 4px;
   padding: 0px 24px;
   margin-right: 22px;
   font-size: 15px;
   color: black;
   display: flex;
   align-items: center;
   background: rgb(249, 249, 249);
   letter-spacing: 1.8px;
   cursor: pointer;

   &:hover {
        background: rgb(198, 198, 198);
   }
`
const TrailerButton=styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const AddButton=styled.button`
   margin-right: 16px;
   width: 44px;
   height: 44px;
   display: flex;
   align-items: center;
   justify-content: center;   
   border: 2px solid white;
   border-radius: 50%;
   background-color: rgba(0, 0, 0, 0.6);
   cursor: pointer;
   span {
       font-size: 30px;
       color: white;
   }

`
const GroupWatchButton=styled(AddButton)`
    background-color: rgb(0, 0, 0);
`

const SubTitle=styled.div`
   color:rgb(249, 249, 249);
   font-size: 15px;
   min-height: 20px;
   margin-top: 26px;

`
const Description=styled.div`
   line-height: 1.4;
   font-size: 20px;
   margin-top: 16px;
   color:rgb(249, 249, 249);
   width:50vw;

`