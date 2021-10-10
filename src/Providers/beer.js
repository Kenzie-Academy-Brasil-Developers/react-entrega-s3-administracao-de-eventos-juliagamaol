import {createContext,useState,useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
export const BeerContext = createContext([])

export const BeerProvider = ({children}) =>{
    const [beer, setBeer] = useState([])
   
    useEffect(()=>{
        axios
        .get('https://api.punkapi.com/v2/beers')
        .then(response=>setBeer(response.data))
        .catch((_)=> toast.error('Bebida não encontrada')) 
    },[])

    return(
        <BeerContext.Provider value={{beer, setBeer}}>
            {children}
        </BeerContext.Provider>
    )
}