import getSingleProduct from '@/apis/singleproduct.api'
import Image from 'next/image'
import React from 'react'
import ProductItemBtn from '../_components/ProductItemBtn'
import getRelatedProducts from '../-actions/relatedProducts.action'
import Produstitem from '../_components/Produstitem'
import { ProductInterface } from '@/interfaces/product.interface'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  
  try {
    const data: ProductInterface = await getSingleProduct(id)
    const RelatedProducts = await getRelatedProducts(data.category._id)

    return (
      <>
        <div className='flex flex-wrap items-center py-10'>
          <div className="w-full md:w-1/3">
            <Image 
              alt={data.title || 'Product image'} 
              src={data.imageCover} 
              width={300} 
              height={300} 
              className='object-cover w-full'
              priority
            />
          </div>
          <div className="w-full md:w-2/3 p-5">
            <h1 className="text-2xl font-bold mb-3">{data.title}</h1>
            <p className='text-gray-400 my-3'>{data.description}</p>
            <p className="text-sm text-gray-600 mb-3">
              Category: <span className="font-medium">{data.category.name}</span>
            </p>
            <div className="flex justify-between my-5 items-center">
              <span className="text-lg font-bold text-green-600">{data.price} EGP</span>
              <span className="flex items-center gap-1">
                {data.ratingsAverage} 
                <i className='fa-solid fa-star text-rating'></i>
              </span>
            </div>
            <ProductItemBtn id={data._id} />
          </div>
        </div>
        
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-5">Related Products</h2>
          <div className='flex flex-wrap gap-4'>
            {RelatedProducts.data.map((prod: ProductInterface) => (
              <Produstitem key={prod._id} prod={prod} />
            ))}
          </div>
        </section>
      </>
    )
  } catch (error) {
    console.error('Error loading product:', error)
    notFound()
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  
  try {
    const data: ProductInterface = await getSingleProduct(id)
    
    return {
      title: data.title,
      description: data.description,
      openGraph: {
        title: data.title,
        description: data.description,
        images: [data.imageCover],
      },
    }
  } catch (error) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    }
  }
}