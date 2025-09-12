import { BrandsInterface } from '@/interfaces/brands.interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BrandsItem({brand}:{brand:BrandsInterface}) {
  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-5 p-3'>
        <div className='p-3 shadow-xl hover:shadow-green-600'>
            <Link href={`/brands/${brand._id}`}>
            <Image width={200} height={200} src={brand.image} className='w-full' alt=''/>
            <p className='text-center p-4'>{brand.name}</p>
            </Link>
        </div>

    </div>
  )
}
