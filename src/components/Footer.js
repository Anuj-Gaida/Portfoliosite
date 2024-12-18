import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return(
        <footer  className='w-full border-t-2 border-solid border-dark 
        font-medium text-lg flex justify-between 
        '>
            <Layout   className='py-8 flex flex-row items-evenly justify-between'>
                <p>{new Date().getFullYear()} &copy; All Rights Reserved</p>
                <div className='flex items-center'>
                Build with <span className='text-primary text-2xl px-1'>&#9825;</span>by&nbsp;<Link href="/" 
                className='underline
                underline-offset-2
                '>AnujGaida</Link>
                </div>
                <Link href="/" target={"_blank"} className='underline
                underline-offset-2'>Say hello</Link>

            </Layout>
        </footer>
    )
}

export default Footer