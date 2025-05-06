import React from 'react'
import { ProductSlider , NavBar , ProductsTabs} from './clientPage'
export default function page() {

    return (
        <div>
            <NavBar/>
            <ProductSlider/>
            <section className='lg:px-20 md:px-10 px-4 flex md:flex-row flex-col gap-5'>
                <div className='flex items-stretch overflow-hidden'><img className='hover:scale-110 duration-2000' src="https://broccolisite.netlify.app/assets/sectionTwo_1-CZr5JFCI.webp" alt="image" /></div>
                <div className='flex flex-col overflow-hidden gap-5'>
                    <img className='hover:scale-105 duration-2000' src="https://broccolisite.netlify.app/assets/sectionTwo_2-61bValKl.webp" alt="image" />
                    <img className='hover:scale-105 duration-2000' src="https://broccolisite.netlify.app/assets/sectionTwo_3-YnnszplM.webp" alt="image" />
                </div>
            </section>
            <section className='lg:px-20 md:px-10 px-4 my-14'>
                <h2 className='text-center font-bold text-5xl'>Our Products</h2>
                <ProductsTabs/>
            </section>
        </div>
    )
}
