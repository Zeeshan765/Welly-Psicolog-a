import React, { useState } from 'react'

const TestimonialForm = () => {

const [loading,setLoading] = useState()


  return (
    <>
     
      <div className='pt-3'>
        <label className='text-title-xsm1 text-custom-black font-normal'>
          Name
        </label>
        <input
          type='text'
          name='name'
          placeholder='Please Enter Your Name'
          className={`w-full rounded-lg  mt-2 border border-black bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
        />
      </div>
      <div className='pt-3'>
        <label className='text-title-xsm1 text-custom-black font-normal'>
          Comments
        </label>
        <textarea
          rows={5}
          name='comments'
          placeholder='Write your comments here!'
          className={`w-full rounded-lg  mt-2  border border-black bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
        />
      </div>

      <div className='pt-4 text-center'>
        <button
          type='submit'
          className='inline-flex gap-3 w-1/2 rounded-3xl bg-custom-blue-dark cursor-not-allowed items-center justify-center px-6 py-2 mr-3 text-lg font-medium text-center  text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
        >
          {loading ? <Spinner className='h-6 w-6' /> : 'Submit'}
        </button>
      </div>
    </>
  )
}

export default TestimonialForm
