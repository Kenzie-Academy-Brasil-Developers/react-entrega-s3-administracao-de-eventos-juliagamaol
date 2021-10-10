import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import {Container, Nav } from './styles'

export default function Buttons() {
    const history = useHistory()
    return (
        <Container>
            <Nav>
            <div>
                <Link to="/"><h2>KenzieBeers</h2></Link>
            </div>
                <section className="btns">
                    <button onClick={()=>history.push('/confraternization')}>Confraternização</button>
                    <button onClick={()=>history.push('/graduation')}>Formatura</button>
                    <button onClick={()=>history.push('/weeding')}>Casamento</button>
                </section>
            </Nav>
        </Container>
    )
}
