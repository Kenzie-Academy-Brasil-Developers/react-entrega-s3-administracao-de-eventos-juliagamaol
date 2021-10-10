import React, { useContext } from 'react'
import CardBeerOnList from '../../components/CardBeerOnList'
import { GraduationContext } from '../../Providers/graduation'

export default function Graduation() {
    const{graduation} = useContext(GraduationContext)
    return (
        <div>
           
            <div>
                <ul>
                    {graduation.map((item)=>(
                        <CardBeerOnList 
                        key={item.id}
                        item={item}
                        event="graduation"/>   
                    ))}
                </ul>
            </div>
        </div>
    )
}
