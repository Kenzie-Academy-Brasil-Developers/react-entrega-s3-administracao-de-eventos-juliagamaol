
import React, { useContext, useState } from 'react'
import { WeedingContext } from '../../Providers/weeding'
import { GraduationContext } from '../../Providers/graduation'
import { ConfraternizationContext } from '../../Providers/confraternization'
import { Card,Container } from './styles'
import ShowDetails from '../ShowDetails'
import ChooseEvent from '../ChooseEvent'

export default function CardBeerToList({item}) {
    const[selected, setSelected] = useState(false)
    const[event, setEvent] = useState(false)
    const{
        id,
        image_url,
        name,
        first_brewed,
        description,
        volume} = item
    
    

    return (
        <Card>
            <Container key={id}>
                        <img src={image_url} alt={name}/>
                    
                     <section className="info">
                        <h4><b>Nome: </b>{name}</h4>
                        <p><b>Data Inicio de fabricação: </b>{first_brewed}</p>
                        <p><b>Quantidade: {volume.value}{volume.unit}</b></p>
                     </section>
                     
                     <div className="btns">
                        <button onClick={()=>setSelected(!selected)} size="small" variant="contained" color="success">Descrição</button>
                        <button  onClick={()=>setEvent(!event)} size="small" variant="contained" color="success" >Evento</button>
                     </div>
                    
                    {selected && <ShowDetails 
                                selected={selected}
                                setSelected={setSelected}
                                description={description}/>}

                    {event && <ChooseEvent 
                                item={item}
                                event={event}
                                setEvent={setEvent}/>}
            </Container>
        </Card>
    )
}
