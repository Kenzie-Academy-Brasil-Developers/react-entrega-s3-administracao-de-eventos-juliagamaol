import { Button } from '@material-ui/core'
import React from 'react'
import { useContext } from 'react'
import { ConfraternizationContext } from '../../Providers/confraternization'
import { GraduationContext } from '../../Providers/graduation'
import { WeedingContext } from '../../Providers/weeding'
import { ContentEvent, Events } from './styles'


export default function ChooseEvent({item,event,setEvent}) {
    const{addToListWeeding} = useContext(WeedingContext)
    const{addToListGraduation} = useContext(GraduationContext)
    const{addToListConfraternization} = useContext(ConfraternizationContext)

    return (
        <Events>
            
            <ContentEvent>
            <Button size="small" color="error" variant="contained" onClick={()=>setEvent(!event)}>X</Button>
                <section className="events">
                    <Button variant="contained" color="success" onClick={()=>addToListWeeding(item)}>Casamento</Button>
                    <Button variant="contained" color="success" onClick={()=>addToListGraduation(item)}>Formatura</Button>
                    <Button variant="contained" color="success" onClick={()=>addToListConfraternization(item)}>Confraternização</Button>
                </section>
            </ContentEvent>
        </Events>
    )
}
