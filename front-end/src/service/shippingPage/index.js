import { BaseURL } from "../../constants/constants"
import axios from 'axios'

export const RegisterPurchaseRequest = (body) => {
    axios.post(`${BaseURL}purchase/register`, body)
    .then()
    .catch((error) => {
        console.log(error.response.data)
    })
}

export const UpdateStockRequest = (body) => {
    axios.patch(`${BaseURL}stock/update`, body)
    .then()
    .catch(error => {
        console.log(error.response.data)
    })
}