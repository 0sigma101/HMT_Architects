import Link from 'next/link'
import React from 'react'

export default function Notfound() {
  return (
    <main className='text-center'>
        <h1 className='text-3xl text-purple-700 font-bold'>There was a problem</h1>
        <p className="text-blue-500"> Click here Go Back to <Link href="/">Home</Link></p>
        
    </main>
    
  )
}