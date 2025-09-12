import getProduct from '@/apis/products.api'
import { ProductInterface } from '@/interfaces/product.interface'
import React from 'react'
import Produstitem from './Produstitem'

export default async function FeaturedProducts() {

    const data:ProductInterface[] = await getProduct()

  return (
    <div className='flex flex-wrap'>
        {data.map((prod:ProductInterface)=><Produstitem key={prod._id} prod={prod}></Produstitem>)}

    </div>
  )
}
