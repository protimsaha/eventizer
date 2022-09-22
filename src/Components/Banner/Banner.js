import React, { useState } from 'react';
import CardSection from '../CardSection/CardSection';
import Form from '../Form/Form';
import Navbar from '../Navbar/Navbar';
import './Banner.css'


const Banner = () => {
    const [open, setOpen] = useState(false)


    return (
        <div >
            <Navbar open={open} setOpen={setOpen}></Navbar>
            <section className='banner m-0 '>
                <div className=' content-box'>
                    <div className='navBar'>
                        <div>
                            <h2 className='logo-text '>VODAME</h2>
                            <p className='uppercase   ml-6 logo-text-small text-white text-xl font-semibold' >ex-life</p>
                        </div>
                        <div className='flex mt-10'>
                            <button className='btn md:block  hidden md:w-40 mx-3  border-white btn-outline'>Login</button>
                            <button className='btn  bg-violet-700 border-none md:w-40 w-28 '>Join us</button>



                            <div onClick={() => setOpen(!open)} className='md:hidden flex justify-end pl-2'>
                                {!open ?
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-violet-600">
                                        <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-violet-600">
                                        <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                    </svg>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Form></Form>
            </section>
            <CardSection></CardSection>
        </div>
    );
};

export default Banner;
