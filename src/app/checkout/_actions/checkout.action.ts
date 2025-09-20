'use server'
import { getTokenAuth } from "@/utlitis/getTokenAuth"


type shippingAddressType =  {
    "details": string,
    "phone": string,
    "city": string,
}

export async function CheckOnline(cartId:string,url=process.env.NEXTAUTH_URL,shippingAddress:shippingAddressType) {
    
        const token = await getTokenAuth()
        if(!token)
            throw new Error('Unathuorized!, login first')
    

    const res = await fetch(`${process.env.API}/orders/checkout-session/${cartId}?url=${url}`,{
        method:'POST',
        body:JSON.stringify({
            shippingAddress
        }),
        headers:{
            'Content-type' : 'application/json',
            token:`${token}`
        }
    })

    const data = await res.json()

    return data
}