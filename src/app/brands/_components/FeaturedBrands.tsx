import getBrands from '@/apis/brands.api'
import { BrandsInterface } from '@/interfaces/brands.interface'
import React from 'react'
import BrandsItem from './Brandsitem';

export default async function FeaturedBrands() {
    const data:BrandsInterface[] = await getBrands()
  return (
    <div className='flex flex-wrap'>
      {data.map((brand:BrandsInterface)=><BrandsItem key={brand._id} brand={brand}></BrandsItem>)}
    </div>
  )
}
