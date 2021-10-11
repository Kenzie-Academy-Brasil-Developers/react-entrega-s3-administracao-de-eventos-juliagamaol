import React, { useContext } from 'react'
import Button from '../../components/Button'
import CardBeerOnList from '../../components/CardBeerOnList'
import { WeedingContext } from '../../Providers/weeding'
import { ContentWeed } from './styles'

export default function Weeding() {
    const{weeding} = useContext(WeedingContext)
    
    return (
        <div>
            <Button />
            <ContentWeed>
                    {weeding.map((item)=>(
                        <CardBeerOnList 
                        key={item.id}
                        item={item}
                        event="weeding"/>
                    ))}
                </ContentWeed>
        </div>
    )
}
