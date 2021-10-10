import { BeerProvider } from "./beer"
import { ConfraternizationProvider } from "./confraternization"
import { GraduationProvider } from "./graduation"
import { WeedingProvider } from "./weeding"

export const Providers = ({children}) =>{
    return(
        <ConfraternizationProvider>
            <GraduationProvider>
                <WeedingProvider>
                    <BeerProvider>
                        {children}
                    </BeerProvider>
                </WeedingProvider>
            </GraduationProvider>
        </ConfraternizationProvider>
    )
}