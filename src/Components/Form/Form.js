import React from 'react';
import { BsSearch } from "react-icons/bs";
import './Form.css'

const Form = () => {
    return (
        <section className='md:grid md:grid-cols-12  content-box gap-6 flex flex-col'>
            <div className=' col-span-6 md:mt-36 mt-16 flex'>
                <h1 className='md:text-5xl text-4xl  font-bold text-white md:text-start text-center '>Ship your package anywhere. Simple, easy and fast.</h1>
            </div>
            <div className='col-span-6 p-6 bg-white rounded-lg md:mt-24 mt-9 md:h-72 h-[340px]'>
                <p className='form-title'>Where do you want to send?</p>
                <div className='grid grid-cols-12 gap-3'>
                    <div className='md:col-span-6 col-span-12 mt-5'>
                        <p className='text-xs text-violet-700 mb-3'>Pick up address</p>
                        <input className='form-input w-full md:w-52 px-9' type="text" placeholder='Av. Getulio' />
                    </div>
                    <div className='md:col-span-6 col-span-12 mt-5'>
                        <p className='text-xs text-violet-700 mb-3'>Delivery address</p>
                        <input className='form-input w-full md:w-52 px-9' type="text" placeholder='Av. Getulio' />
                    </div>
                </div>
                <div className='flex place-content-end md:mt-12 mt-4 mb-5 mr-1'>
                    <button className='btn  bg-violet-700 border-none w-40 '>  <BsSearch className='mr-3' /> Search</button>
                </div>
            </div>
        </section>
    );
};

export default Form;