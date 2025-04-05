import React from 'react'
import { useForm } from 'react-hook-form';


const TravelExpenseForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm();

    return (
        <>
        <div className='mt-10'>
          <div>Travel</div>
          <div>Travel</div>
          <div>Travel</div>
        </div>
        <form className='flex flex-col w-1/2 mt-10' onSubmit={handleSubmit((data) => console.log(data))}>
          <input className='border border-red-500' {...register('firstName')} />
          <input className='border border-red-500' {...register('lastName', { required: true })} />
          {errors.lastName && <p>Last name is required.</p>}
          <input className='border border-red-500' {...register('age', { pattern: /\d+/ })} />
          {errors.age && <p>Please enter number for age.</p>}
          <input type="submit" />
        </form>
      </>
    )
}

export default TravelExpenseForm
