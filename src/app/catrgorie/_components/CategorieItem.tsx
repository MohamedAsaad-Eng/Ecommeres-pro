import { CategoriesInterface } from '@/interfaces/categories.interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategorieItem({catr}:{catr:CategoriesInterface}) {
  return (
    <div className='w-full md:w-1/2 lg:w-1/3'>
      <div className="p-5">
        <Link href={`/catrgories/${catr._id}`}>
                <Image src={catr.image} width={300} height={300} className='w-full' alt="" />
                <p className='text-main'>{catr.name}</p>
        </Link>

      </div>
    </div>
  )
}
