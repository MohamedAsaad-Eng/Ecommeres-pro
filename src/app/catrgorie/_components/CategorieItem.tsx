import { CategoriesInterface } from '@/interfaces/categories.interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategorieItem({ catr }: { catr: CategoriesInterface }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      <div className="p-4">
        <Link 
          href={`/categories/${catr._id}`} 
          className="block border rounded-lg shadow hover:shadow-green-600 transition overflow-hidden text-center"
        >
          <div className="flex justify-center items-center bg-white">
            <Image
              src={catr.image}
              width={300}
              height={300}
              className="object-contain w-full h-64"
              alt={catr.name}
            />
          </div>
          <p className="text-main font-medium py-3">{catr.name}</p>
        </Link>
      </div>
    </div>
  )
}
