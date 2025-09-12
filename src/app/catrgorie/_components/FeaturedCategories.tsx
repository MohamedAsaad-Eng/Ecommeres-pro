import React from 'react'
import { CategoriesInterface } from '@/interfaces/categories.interface'
import CategorieItem from './CategorieItem';
import getCategories from '@/apis/categories.api';

export default async function FeaturedCategories() {

    const data:CategoriesInterface[] = await getCategories()
  return (
    <div className='flex flex-wrap'>
        {data.map((catr:CategoriesInterface)=><CategorieItem key={catr._id} catr={catr}></CategorieItem>)}
    </div>
  )
}
