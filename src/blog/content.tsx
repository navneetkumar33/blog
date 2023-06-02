import React from 'react'
import MenuBar from './menu'
import CardList from './card'
import { StyledContentDiv } from './content.style'


const ContentWeb=()=>{
    return(
        <StyledContentDiv>
        <MenuBar/>
        <CardList/>
        </StyledContentDiv>
    )
}

export default ContentWeb