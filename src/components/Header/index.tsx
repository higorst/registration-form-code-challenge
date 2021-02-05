import React from 'react'
import { HeaderView, TitleHeader } from './styles'

interface PropsHeader {
    title: string
}
const Header = (props: PropsHeader) => {

    return (
        <HeaderView>  
            <TitleHeader>{props.title}</TitleHeader>          
        </HeaderView>
    )
}

export default Header