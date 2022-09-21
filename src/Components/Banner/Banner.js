import React from 'react';
import Form from '../Form/Form';
import './Banner.css'

const Banner = () => {


    return (
        <section className='banner m-0 '>
            <div className=' content-box'>
                <div className='navBar'>
                    <div>
                        <h2 className='logo-text '>VODAME</h2>
                        <p className='uppercase   ml-6 logo-text-small text-white text-xl font-semibold' >ex-life</p>
                    </div>
                    <div className='flex mt-10'>
                        <button className='btn md:block  hidden md:w-40 mx-3  border-white btn-outline'>Login</button>
                        <button className='btn  bg-violet-700 border-none md:w-40 w-24'>Join us</button>
                    </div>
                </div>
            </div>
            <Form></Form>
        </section>
    );
};

export default Banner;
