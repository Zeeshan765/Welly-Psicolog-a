import { Typography, Button } from '@material-tailwind/react'
import React from 'react'
import { BlogData } from '../../../CardData'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <>
      <section className='px-4 md:px-8 lg:px-16 xl:px-25 '>
        <div className='mt-6 mb-6 flex justify-between'>
          <Typography variant='h2' className='text-teal-900'>Blogs</Typography>
          <a href='/blogs' className='inline-block mt-2'>
            <Button
              size='sm'
              variant='text'
              className='flex items-center gap-2  bg-black text-white p-3'
            >
              View More
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                />
              </svg>
            </Button>
          </a>
        </div>

        <div className='grid grid-cols-1  gap-10   2xl:gap-20 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4 mb-6'>
          {BlogData.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Blog
