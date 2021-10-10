import React, { useContext } from 'react'
import CardBeerOnList from '../../components/CardBeerOnList'
import { ConfraternizationContext } from '../../Providers/confraternization'

export default function Confraternization() {
    const{confraternization} = useContext(ConfraternizationContext)
    return (
        <div >
            
            <div>
                <ul>
                    {confraternization.map((item)=>(
                        <CardBeerOnList 
                        key={item.id}
                        item={item}
                        event="confraternization"/>   
                    ))}
                </ul>
               
            </div>
        </div>
    )
}
