import React, { Component } from 'react'
import styled from 'styled-components'

export class Header extends Component {
    render() {
        return (
            <Container>
                header
            </Container>
        )
    }
}

export default Header

const Container = styled.div`
    height: 70px;
    background:#090b13;
`
