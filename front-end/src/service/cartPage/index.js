import { BaseURL } from "../../constants/constants"
import axios from 'axios'

export const GetAllProducts = (setProducts) => {
    axios.get(`${BaseURL}stock/all`)
    .then((res)=> {
        setProducts(res.data)
    })
    .catch((error) => {
        console.log(error)
    })
}