import React from 'react'
import Card from '../Components/Card'

const Products = () => {
  return (
    <div className='flex items-center flex-col mt-[100px] justify-center'>
      <div className='w-full items-center justify-center flex'>
        <h1 className='text-white'>OUR LATEST PRODUCTS</h1>
      </div>
      <div className='flex items-center justify-around flex-wrap'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Products

