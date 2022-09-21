import React from 'react';
import { BsSearch } from "react-icons/bs";
import './Form.css'

const Form = () => {
    return (
        <section className='grid grid-cols-12 content-box gap-6'>
            <div className='col-span-6 mt-24'>
                <h1 className=' form-text flex-shrink-0'>Ship your package anywhere. Simple, easy and fast.</h1>
            </div>
            <div className='col-span-6 p-6 bg-white rounded-lg mt-24 h-72'>
                <p className='form-title'>Where do you want to send?</p>
                <div className='grid grid-cols-12 gap-3'>
                    <div className='col-span-6 mt-9'>
                        <p className='text-xs text-violet-700 mb-3'>Pick up address</p>
                        <input className='form-input w-52 px-9' type="text" placeholder='Av. Getulio' />
                    </div>
                    <div className='col-span-6 mt-9'>
                        <p className='text-xs text-violet-700 mb-3'>Delivery address</p>
                        <input className='form-input w-52 px-9' type="text" placeholder='Av. Getulio' />
                    </div>
                </div>
                <div className='flex place-content-end mt-12 mr-1'>
                    <button className='btn  bg-violet-700 border-none md:w-40 w-24'>  <BsSearch className='mr-3' /> Search</button>
                </div>
            </div>
        </section>
    );
};

export default Form;