import React from 'react'
import { HeaderView, TitleHeader } from './styles'

interface PropsHeader {
    title: string
}
function Header(props: PropsHeader) {

    return (
        <HeaderView>  
            <TitleHeader>{props.title}</TitleHeader>          
        </HeaderView>
    )
}

export default Header