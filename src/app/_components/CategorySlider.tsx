import React from 'react'
import CategorySwiper from './CategorySwiper'
import getCategories from '@/apis/categories.api'

export default async function CategorySlider() {
    const data = await getCategories()
  return (
    <>
    <CategorySwiper data={data}/>
    </>
  )
}
