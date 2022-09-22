import React, { useState } from 'react';
import './CardSection.css'
import DeveloperCard from '../DeveloperCard/DeveloperCard'
import useDeveloper from '../../Hooks/useDeveloper';
import CustomizeInput from '../CustomizeInput/CustomizeInput';

const CardSection = () => {
    const [developers] = useDeveloper([])
    const [number, setNumber] = useState(3)


    return (
        <section className='card-section md:pt-16 pt-6 content-box'>
            <div style={{ fontFamily: "'Inter', sans-serif" }}>
                <h1 className='text-center mb-3 text-3xl md:text-6xl md:font-black font-[1500]'>How to send a</h1>
                <h1 className='text-center  text-3xl md:text-6xl font-black'><span className='bg-violet-600 text-white px-3 '>package with</span> Airlock</h1>
            </div>
            <div className='flex md:mt-16 mt-11 gap-9'>
                <p className={`${number === 3 && 'text-violet-600'}`} role={'button'} onClick={() => setNumber(3)}>First page</p>
                <p className={`${number === 2 && 'text-violet-600'}`} role={'button'} onClick={() => setNumber(2)}>Second page</p>
            </div>

            <div className='grid grid-cols-12 gap-12 mt-14'>
                {
                    developers.slice(0, number).map(developer => <DeveloperCard key={developer.id} developer={developer}></DeveloperCard>)
                }
            </div>
            <CustomizeInput></CustomizeInput>
        </section>
    );
};

export default CardSection;