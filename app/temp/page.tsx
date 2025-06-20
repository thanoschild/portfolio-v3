import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='h-screen flex flex-col gap-4 items-center justify-center bg-theme-bg'>
        <span className='text-theme-text text-t text-5xl font-semibold'>Sumeet Haldar</span>
        <span className='bg-theme-sub-alt text-theme-main px-4 py-2 rounded-3xl'>Software Engineer</span>

    </div>
  )
}