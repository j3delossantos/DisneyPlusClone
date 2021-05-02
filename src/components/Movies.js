import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended for you</h4>

            <Content>
                <Wrap>
                    <img src="/images/Disney_MLP_GridItem_Frozen2_AUNZ.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/AvengersEndgame.png"/>
                </Wrap>
                <Wrap>
                    <img src="/images/Onward_es-419.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/XMenWolverine_ES.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/Disney_MLP_GridItem_Frozen2_AUNZ.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/AvengersEndgame.png"/>
                </Wrap>
                <Wrap>
                    <img src="/images/Onward_es-419.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/XMenWolverine_ES.jpg"/>
                </Wrap>

                <Wrap>
                    <img src="/images/Disney_MLP_GridItem_Frozen2_AUNZ.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/AvengersEndgame.png"/>
                </Wrap>
                <Wrap>
                    <img src="/images/Onward_es-419.jpg"/>
                </Wrap>
                <Wrap>
                    <img src="/images/XMenWolverine_ES.jpg"/>
                </Wrap>


            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26x 30x -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        width: 100%;
        height:100%
        objetc-fit: cover;
    }
    &:hover{
        transform: scale(1.05);        
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58x -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }

`