import React, { useContext } from 'react'
import CardBeerToList from '../../components/CardBeerToList'
import { BeerContext } from '../../Providers/beer'
import { Beers,Content } from './styles'
import  Button  from '../../components/Button'

export default function Home() {
    const {beer} = useContext(BeerContext)
   
    return (
        <Beers>
            <Button />
            <Content>
                {beer.map((item)=>( 
                    <>
                      <CardBeerToList 
                        key={item.id}
                        item={item}/>  

                    </>

                    
                ))}
            </Content>
        </Beers>
    )
}
