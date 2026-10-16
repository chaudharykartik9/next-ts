"use client";
import React from 'react'
import FormFill from './components/FormFill'
import ElementWrapper from './components/ElementWrapper'

const page = () => {
  return (
    <>
   {/* <FormFill/> */}
  <ElementWrapper elementType='div' className='box'>
    <p>there is the best man whos name is kartik</p>
  </ElementWrapper>
   <ElementWrapper elementType='h1' className='box'>
    <p>there is the best man whos name is kartik</p>
  </ElementWrapper>
  <ElementWrapper elementType='button'  onClick={()=>{alert("hi there")}}>
   hii there
  </ElementWrapper>
  
  </>
)
}

export default page