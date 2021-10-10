import React, { useContext } from 'react'
import CardBeerOnList from '../../components/CardBeerOnList'
import { WeedingContext } from '../../Providers/weeding'
import { BeersOnWeeding, Content } from './styles'

export default function Weeding() {
    const{weeding} = useContext(WeedingContext)
    
    return (
        <BeersOnWeeding>
            
                <Content>
                    {weeding.map((item)=>(
                        <CardBeerOnList 
                        key={item.id}
                        item={item}
                        event="weeding"/>
                    ))}
                </Content>
        </BeersOnWeeding>
    )
}
