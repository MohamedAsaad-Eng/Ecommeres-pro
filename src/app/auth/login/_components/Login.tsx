'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { loginSchema, loginSchemaForm } from '@/schema/login.schema'
import { signIn } from 'next-auth/react'
import { toast } from "sonner"

export default function Login() {
  const form = useForm<loginSchemaForm>({
    resolver: zodResolver(loginSchema),
  });

  const firstError = Object.keys(form.formState.errors)[0]
  async function handleLogin(data:loginSchemaForm) {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: '/'
    });

    // console.log("Response:", res);

    if (res?.ok) {
      toast.success("Logged in successfully");
      location.href = "/";
    } else {
      toast.error("The Email or Passwrod Not Match");
    }
  }

  return (
       <>
    <h2 className='text-3xl text-center font-bold my-5'>Login Now:</h2>
    <Form {...form}>
        <form className='w-2/3 mx-auto ' onSubmit={form.handleSubmit(handleLogin)}>
          <FormField
        name='email'
        control={form.control}
        render={({field})=>(
            <FormItem className='my-5'>
                <FormLabel>email :</FormLabel>
                <FormControl>
                    <div>
                        <Input type='email' {...field}/>
                    </div>
                </FormControl>
                {firstError == 'email' && <FormMessage/>}
            </FormItem>
        )}
        />
          <FormField
        name='password'
        control={form.control}
        render={({field})=>(
            <FormItem className='my-5'>
                <FormLabel>password :</FormLabel>
                <FormControl>

                        <Input type="password" autoComplete='off' {...field}/>

                </FormControl>
                {firstError == 'password' && <FormMessage/>}
            </FormItem>
        )}
        />

          <Button className='bg-main ml-auto block text-white my-5 cursor-pointer'>Login</Button>
        </form>
    </Form>

    </>
 );
}

