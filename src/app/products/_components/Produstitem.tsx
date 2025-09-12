import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductItemBtn from './ProductItemBtn';
import { ProductInterface } from '@/interfaces/product.interface';
import HeartItem from './HeartItem';

export default function Produstitem({prod}:{prod:ProductInterface}) {
  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3'>
        <div className='p-5 shadow-xl hover:shadow-green-600'>
          <HeartItem/>
           <Link href={`/products/${prod._id}`}>
            <Image width={300} height={300} src={prod.imageCover} className='w-full' alt="" />
            <span className='text-main mb-4'>{prod.category.name}</span>
            <p className='line-clamp-1'>{prod.title}</p>
            <div className='flex justify-between my-5 items-center'>
                <span className={prod?.priceAfterDiscount ? 'line-through' : ''}>
  {prod.price} EGP
</span>
                {prod.priceAfterDiscount && <span>{prod.priceAfterDiscount}EGP</span>}
                <span><i className='fa-solid fa-star text-rating'></i> {prod.ratingsAverage}</span>
            </div>
           </Link>
           <ProductItemBtn id={prod._id}></ProductItemBtn>
        </div>
    </div>
  )
}
