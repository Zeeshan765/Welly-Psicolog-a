import { Typography } from '@material-tailwind/react';
import React from 'react'

const BlogDetail = () => {


    const sampleBlog = {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        title: 'Sample Blog Title',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac neque in odio ultricies elementum. 
                      Phasellus vehicula metus eu arcu varius, et volutpat arcu lacinia. Cras tincidunt gravida ipsum, 
                      at tristique nisl placerat ut. Mauris ut nisl venenatis, gravida urna vel, fermentum velit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac neque in odio ultricies elementum. 
                      Phasellus vehicula metus eu arcu varius, et volutpat arcu lacinia. Cras tincidunt gravida ipsum, 
                      at tristique nisl placerat ut. Mauris ut nisl venenatis, gravida urna vel, fermentum velit.`
      };



  return (
    <>
      <section className='px-4 md:px-8 lg:px-16 xl:px-25 py-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='mb-6'>
            <img
              src={sampleBlog.image}
              alt={sampleBlog.title}
              className='w-full h-auto rounded-lg shadow-md'
            />
          </div>
          <div className='mt-6 mb-6'>
            <Typography variant='h2' className='text-teal-900'>
              {sampleBlog.title}
            </Typography>
          </div>
          <div className='mt-4'>
            <Typography
              variant='body1'
              className='text-gray-700 leading-relaxed'
            >
              {sampleBlog.description}
            </Typography>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetail
