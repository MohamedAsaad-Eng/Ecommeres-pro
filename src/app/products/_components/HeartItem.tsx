'use client'
import React, { useState } from 'react'
import { addToWishlist, removeFromWishlist } from '@/app/wishlists/_actions/Wishlists.sction'


type HeartItemProps = {
  productId: string
  initiallyLiked?: boolean
}

export default function HeartItem({ productId, initiallyLiked = false }: HeartItemProps) {
  const [heart, setHeart] = useState(initiallyLiked)
  const [loading, setLoading] = useState(false)

  const toggleHeart = async () => {
    if (loading) return
    setLoading(true)

    try {
      if (heart) {
        await removeFromWishlist(productId)
      } else {
        await addToWishlist(productId)
      }
      setHeart(!heart)
    } catch (error) {
      console.error('Error updating wishlist:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <i
      className={`fa-solid cursor-pointer text-xl transition-colors duration-300 
        ${heart ? 'fa-heart text-red-500' : 'fa-heart text-gray-400'}
        ${loading ? 'opacity-50 pointer-events-none' : ''}
      `}
      onClick={toggleHeart}
    ></i>
  )
}
