'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { useState, useTransition } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ResetSchema } from '@/schemas'
import { reset } from '@/actions/reset'
import { FormError } from './form-error'
import { FormSuccess } from './form-success'

export function ResetForm() {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      reset(values).then(data => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return (
    <div className='min-h-screen flex'>
      <div className='flex flex-1 justify-center items-center bg-gray-100 p-8'>
        <div className='max-w-md w-full'>
          <h3 className='text-center text-2xl font-bold text-gray-900 mb-8'>
            Event <span className='text-indigo-600'>Hive</span>
          </h3>
          <h2 className='text-center text-3xl font-bold text-gray-900 mb-[60px]'>
            Forgot your password?
          </h2>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='mb-[30px]'>
              <label
                htmlFor='email'
                className={`block text-sm font-medium ${
                  form.formState.errors.email ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                YOUR EMAIL
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  type='email'
                  {...form.register('email')}
                  className='block w-full px-3 py-3 border-none rounded-md placeholder-gray-400 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                  placeholder='Enter your email'
                  disabled={isPending}
                />
                {form.formState.errors.email && (
                  <p className='mt-1 text-sm text-red-600'>
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <div className='flex items-center justify-center mb-8'>
              <button
                type='submit'
                className='group relative flex justify-center py-3 px-[80px] border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500'
              >
                Send reset email
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='flex flex-1 items-center justify-center relative text-white p-8'>
        <div className="absolute inset-0 bg-[url('/images/signInPage.png')] bg-cover bg-center"></div>
        <div className='absolute inset-0 bg-black opacity-30'></div>
        <div className='relative z-10 text-center'>
          <h2 className='text-3xl font-bold mb-10'>Hello Friend</h2>
          <p className='mb-10'>
            To keep connected with us provide us with your information
          </p>
          <button className='px-10 py-3 bg-white-40 text-white rounded-md hover:bg-white hover:text-blue-900'>
            Back to login
          </button>
        </div>
      </div>
    </div>
  )
}
