import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ConfraternizationContext = createContext()

export const ConfraternizationProvider = ({children}) => {
    const [confraternization, setConfraternization] = useState([])

    const addToListConfraternization = item =>{
        setConfraternization([...confraternization,item])
        toast.success(`${item.name} adicionado a lista de casamento`)

    }

    const removeFromListConfraternization = itemId =>{
        const removedOfList = el => el.id === itemId
        const index = confraternization.findIndex(removedOfList)
        const newList = confraternization.map(item=>item)
        newList.splice(index,1)
        setConfraternization(newList)
    }

    return(
        <ConfraternizationContext.Provider value={{confraternization,addToListConfraternization,removeFromListConfraternization}}>
            {children}
        </ConfraternizationContext.Provider>
    )
}

//const Remove = (id) => {
//    