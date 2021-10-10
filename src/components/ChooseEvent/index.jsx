import React from 'react'
import { useContext } from 'react'
import { ContentEvent, Events } from './styles'


export default function ChooseEvent({item,event,setEvent}) {
  

        
    return (
        <Events>
            <button onClick={()=>setEvent(!event)}>X</button>
            <ContentEvent>
                <section className="events">
                    
                </section>
            </ContentEvent>
        </Events>
    )
}
