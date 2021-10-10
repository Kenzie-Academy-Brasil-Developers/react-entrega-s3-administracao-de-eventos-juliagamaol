
import React, { useContext } from 'react'
import { WeedingContext } from '../../Providers/weeding'
import { GraduationContext } from '../../Providers/graduation'
import { ConfraternizationContext } from '../../Providers/confraternization'
import { Card,Container } from './styles'

export default function CardBeerToList({item}) {
    const{
        id,
        image_url,
        name,
        first_brewed,
        description,
        volume} = item
    
    // const{addToListWeeding} = useContext(WeedingContext)
    // const{addToListGraduation} = useContext(GraduationContext)
    // const{addToListConfraternization} = useContext(ConfraternizationContext)

    return (
        <Card>
            <Container key={id}>
                    <figure>
                        <img src={image_url} alt={name}/>
                    </figure>
                    
                     <section className="info">
                        <h4><b>Nome: </b>{name}</h4>
                        <p><b>Data Inicio de fabricação: </b>{first_brewed}</p>
                        <p><b>Quantidade: {volume.value}{volume.unit}</b></p>
                     </section>
                     
                     <button size="small" variant="contained" color="success">Descrição</button>
                     <button  size="small" variant="contained" color="success" >Evento</button>
                    {/* <h5>Para o evento:</h5>
                        <button onClick={()=>addToListWeeding(item)}>Casamento</button>
                        <button onClick={()=>addToListGraduation(item)}>Formatura</button>
                        <button onClick={()=>addToListConfraternization(item)}>Confraternização</button> */}
            </Container>
        </Card>
    )
}
