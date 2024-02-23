'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import { CustomSubmit } from './SubmitButton';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className="w-full dark:bg-darkBrown bg-lightBrown flex justify-center sm:mt-[5rem] mt-[2rem] z-0 relative">
      <form onSubmit={handleSubmit(onSubmit)} className="sm:w-[65%] w-[90%] sm:grid grid-cols-2 gap-4 pt-[2rem] pb-[2rem] max-w-[1000px]">
      <div className='row-start-1 row-end-2 col-start-1 col-end-2'>
        <label
          htmlFor='name'
          className='sr-only'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md sm:mb-[0] mb-[.5rem]'
          {...register('name', { required: true })}
        />
      </div>
      <div className='row-start-1 row-end-2 col-start-2 col-end-3'>
        <label
          htmlFor='email'
          className='sr-only'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md sm:mb-[0] mb-[.5rem]'
          {...register('email', { required: true })}
        />
      </div>
      <div className='row-start-2 row-end-3 col-start-1 col-end-3'>
        <label
          htmlFor='message'
          className='sr-only'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div className="row-start-3 row-end-4 col-start-1 col-end-3 text-center">
        <CustomSubmit text="SUBMIT" />
      </div>
    </form>
    </div>
  );
};

export default Contact;