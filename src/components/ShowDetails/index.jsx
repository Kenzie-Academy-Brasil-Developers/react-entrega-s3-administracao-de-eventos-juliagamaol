import React from 'react'
import { Content, Details } from './style'

export default function ShowDetails({selected,setSelected,description}) {
    return (
        <Details>
            <Content>
                <button onClick={()=>setSelected(!selected)}> X </button>
                <p>{description}</p>
            </Content>
        </Details>
    )
}
