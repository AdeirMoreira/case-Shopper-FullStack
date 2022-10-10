import { useState } from "react"
import { Shopper } from "./Context"

export const GlobalState = (props) => {
    const [products, setProducts] = useState([]) 
    
    const params = {
        products,
        setProducts
    }

    return (
        <Shopper.Provider value={params}>
            {props.children}
        </Shopper.Provider>
    )
}