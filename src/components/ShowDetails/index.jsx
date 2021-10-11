import { Button } from '@material-ui/core'
import React from 'react'
import { Content, Details } from './style'

export default function ShowDetails({selected,setSelected,description}) {
    return (
        <Details>
            <Content>
                <Button size="small" color="error" variant="contained" onClick={()=>setSelected(!selected)}> X </Button>
                <p>{description.substring(0,250)}</p>
            </Content>
        </Details>
    )
}
