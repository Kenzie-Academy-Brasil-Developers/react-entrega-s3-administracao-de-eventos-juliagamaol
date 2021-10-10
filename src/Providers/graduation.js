import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const GraduationContext = createContext()

export const GraduationProvider = ({children}) =>{
    const[graduation,setGraduation] = useState([])

    const addToListGraduation = item =>{
        setGraduation([...graduation,item])
        toast.success(`${item.name} adicionado a lista de casamento`)
    }

    const removeFromListGraduation = itemId =>{
        const removedOfList = el => el.id === itemId
        const index = graduation.findIndex(removedOfList)
        const newList = graduation.map(item=>item)
        newList.splice(index,1)
        setGraduation(newList)
    }

    return(
        <GraduationContext.Provider value={{graduation, addToListGraduation,removeFromListGraduation}}>
            {children}
        </GraduationContext.Provider>
    )
}