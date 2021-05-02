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

                </AddButton>
                <GroupWatchButton>

                </GroupWatchButton>

            </Controlls>
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
    bottom:0;
    z-index: -1;
    opacity: 0.8;

    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }


`

const ImageTitle=styled.div`

    height: 30vh;   
    min-height: 170px;
    width: 35vw;    
    min-width: 200px;

    img{
        width:100%;
        height:100%;
        object-fit: contain;
    }
`

const Controlls=styled.div`
    display: flex;
`

const PlayButton=styled.div`
     
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
   cursor-pointer;

   &:hover{
        background: rgb(198, 198, 198);
   }
`
const TrailerButton=styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const AddButton=styled.div`

`
const GroupWatchButton=styled.div`

`