'use client'

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BsSearch } from "react-icons/bs";

export function ProductSlider() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchSwiperData() {
            const res = await fetch('/api/swiper');
            const data = await res.json();
            setProducts(data);
        }
        fetchSwiperData();
    }, []);
    return (
        <Swiper
            className='lg:px-20 md:px-10 px-4'
            modules={[Navigation, Autoplay, Pagination]}
            navigation
            speed={1000}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            loop
        >
            {products.map((product) => (
                <SwiperSlide key={product.id} className='!flex justify-center items-center flex-col md:flex-row'>
                    <div className='md:w-5/12 w-full flex flex-col gap-5'>
                        <p className=''>{product.supText}</p>
                        <p className='font-bold text-4xl'>{product.mainText}</p>
                        {product.supParagraph && <p>{product.supParagraph}</p>}
                        <div>
                            <button className='bg-green-600 text-white p-3 rounded'>{product.buttonOne}</button>
                            {product.buttonTwo && <button className='bg-white text-black p-3 rounded'>{product.buttonTwo}</button>}
                        </div>
                    </div>
                    <img src={product.image} alt="image" className='md:w-5/12 w-full' />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}


export function NavBar() {
    const [navData, setNavData] = useState({});
    const [dropdownIndex, setDropdownIndex] = useState(null);

    useEffect(() => {
        async function fetchNavData() {
            const res = await fetch('/api/navbar');
            const data = await res.json();
            setNavData(data);
        }
        fetchNavData();
    }, []);

    const dropdownLinks = [
        navData.aboutLinks,
        navData.shopLinks,
        navData.newsLinks,
        navData.pagesLinks,
    ];

    return (
        <nav className='lg:px-20 md:px-10 px-4 flex md:flex-row flex-col items-center gap-5'>
            <img src={navData.logo} alt="logo image" />
            <div className='lg:flex hidden'>
                {navData.mainLinks?.map((link, index) => (
                    <div 
                        key={index} 
                        onMouseEnter={() => setDropdownIndex(index)} 
                        onMouseLeave={() => setDropdownIndex(null)}
                        className="inline-block relative"
                    >
                        <button className='p-5'>
                            <a href="#">{link.label}</a>
                        </button>

                        {dropdownIndex === index &&  dropdownLinks[index-1] &&(
                            <ul className="absolute border-green-600 border-t-4 top-15 left-0 z-10 bg-white shadow-xl px-10 w-52 py-3 flex flex-col gap-3">
                                {dropdownLinks[index - 1]?.map((ddLink, i) => (
                                    <li key={i}>{ddLink.label}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
}



export function ProductsTabs(){
    const [ api , setApi ] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        async function fetchProductData(){
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            setApi(data.products)
        }   
        fetchProductData();
    },[])
    console.log(api);

    useEffect(() => {
        async function fetchCategories() {
            const res = await fetch('https://dummyjson.com/products/categories');
            const data = await res.json();
            setCategories(data.slice(0, 5));
        }
        fetchCategories();
    }, []);

    return (
        <div className='flex'>
            <div>
                {categories.map((category, index) => (
                    <button className='cursor-pointer' key={index}>{category.slug}</button>
                ))}
            </div>
        </div>
    );
}