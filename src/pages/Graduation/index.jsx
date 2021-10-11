import React, { useContext } from 'react'
import Button from '../../components/Button'

import CardBeerOnList from '../../components/CardBeerOnList'
import { GraduationContext } from '../../Providers/graduation'
import { ContentGradu } from './style'

export default function Graduation() {
    const{graduation} = useContext(GraduationContext)
    return (
        <div>
            <Button />
            <ContentGradu>
                {graduation.map((item)=>(
                    <CardBeerOnList 
                    key={item.id}
                    item={item}
                    event="graduation"/>   
                ))}
            </ContentGradu>
        </div>
    )
}
