import { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";


export const WeedingContext = createContext()

export const WeedingProvider = ({children}) => {
    const [weeding, setWeeding] = useState([])

    const addToListWeeding = item =>{
        setWeeding([...weeding,item])
        toast.success(`${item.name} adicionado a lista de casamento`)
    }

    const removeFromListWeeding = itemId => {
        const removedOfList = el => el.id === itemId
        const index = weeding.findIndex(removedOfList)
        const newList = weeding.map(item=>item)
        newList.splice(index,1)
        setWeeding(newList)
    }

    return(
        <WeedingContext.Provider value={{weeding,addToListWeeding,removeFromListWeeding}}>
            {children}
            
        </WeedingContext.Provider>

    )
}