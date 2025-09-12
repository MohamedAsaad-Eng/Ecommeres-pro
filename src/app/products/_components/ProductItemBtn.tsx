'use client'
import { addProduct } from '@/app/cart/_actions/addproduct.action'
import { Button } from '@/components/ui/button'
import {  useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-toastify'

export default function ProductItemBtn({id}:{id:string}) {
    const queryClient = useQueryClient()
    const {mutate,isPending} = useMutation({mutationFn:addProduct,
        onSuccess:(data)=>{
            toast.success(data?.message)
            queryClient.invalidateQueries({queryKey:['/cart']})
        },
        onError:()=>{
            toast.error('Login first!')
        }
    })
    
  return (
     <Button onClick={()=>mutate(id)} className='w-full my-3 bg-main transform hover:scale-105 active:scale-95 transition-all duration-200 hover:shadow-main'>{isPending? <i className='fa-solid fa-spin fa-spinner'></i>: "+ Add"}</Button>

  )
}
