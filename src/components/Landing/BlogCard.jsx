import { Card, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({ blog }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/blogs')
  }
  return (
    <>
      <div onClick={handleNavigate} className='cursor-pointer'>
        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color='transparent'
            className='m-0 rounded-xl'
          >
            <img src={blog?.image} alt='ui/ux review check' />
          </CardHeader>
          <div className='py-4'>
            <Typography variant='h4' className=' text-center text-teal-900'>
              {blog?.title}
            </Typography>
          </div>
        </Card>
      </div>
    </>
  )
}

export default BlogCard
