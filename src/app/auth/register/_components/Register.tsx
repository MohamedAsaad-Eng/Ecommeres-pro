"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { registerSchema, registerSchemaForm } from '@/schema/register.schema'

import { toast } from "sonner"
import { useRouter } from 'next/navigation'


export default function Register() {
  // إضافة حالة التحميل
  const [isLoading, setIsLoading] = useState(false);
  
  const router = useRouter();
  const form = useForm<registerSchemaForm>({
    resolver: zodResolver(registerSchema),
  });

  async function handleRegister(data: registerSchemaForm) {
    setIsLoading(true); // بدء التحميل
    
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await res.json();

      if (res.ok && responseData.message === "success") {
        toast.success("Register Success", {position:'top-center', duration: 4000});
        router.push("/auth/login");
      } else {
        toast.error(responseData.message || "There is an error", {position:'top-center', duration: 4000});
      }
    } catch (err) {
      toast.error(String(err));
    } finally {
      setIsLoading(false); // إنهاء التحميل
    }
  }


  return (
       <>
    <h2 className='text-3xl text-center font-bold my-5'>Register Now:</h2>
    <Form {...form}>
        <form className='w-2/3 mx-auto' onSubmit={form.handleSubmit(handleRegister)}>
        <FormField
        name='name'
        control={form.control}
        render={({field})=>(
            <FormItem className='my-5'>
                <FormLabel>Name:</FormLabel>
                <FormControl>
                        <Input {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
        />
          <FormField
        name='email'
        control={form.control}
        render={({field})=>(
            <FormItem className='my-5'>
                <FormLabel>Email:</FormLabel>
                <FormControl>
                    <div>
                        <Input type='email' {...field} disabled={isLoading} />
                    </div>
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
        />
          <FormField
        name='password'
        control={form.control}
        render={({field})=>(
            <FormItem className='my-5'>
                <FormLabel>Password:</FormLabel>
                <FormControl>
                        <Input type="password" autoComplete='off' {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
        />
                  <FormField
        name='rePassword'
        control={form.control}
        render={({field})=>(
            <FormItem className='my-5'>
                <FormLabel>Confirm Password:</FormLabel>
                <FormControl>
                        <Input type="password" autoComplete='off' {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
        />
                  <FormField
        name='phone'
        control={form.control}
        render={({field})=>(
            <FormItem className='my-5'>
                <FormLabel>Phone:</FormLabel>
                <FormControl>
                        <Input type="tel" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
        />

          <Button 
             type="submit"
             className='bg-main ml-auto block text-white my-5 cursor-pointer'
               disabled={isLoading}
               >
                 {isLoading ? 'Registering...' : 'Register'}
              </Button>
        </form>
    </Form>

    </>
  );
}