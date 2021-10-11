import React, { useContext } from 'react'
import Button from '../../components/Button'
import CardBeerOnList from '../../components/CardBeerOnList'
import { ConfraternizationContext } from '../../Providers/confraternization'
import { ContentConf } from './styles'

export default function Confraternization() {
    const{confraternization} = useContext(ConfraternizationContext)
    return (
        <div>
            <Button />
            <ContentConf>
                    {confraternization.map((item)=>(
                        <CardBeerOnList 
                        key={item.id}
                        item={item}
                        event="confraternization"/>   
                    ))}
               
            </ContentConf>
        </div>
    )
}
