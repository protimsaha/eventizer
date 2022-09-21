import React, { useState } from 'react';
import './CardSection.css'
import DeveloperCard from '../DeveloperCard/DeveloperCard'
import useDeveloper from '../../Hooks/useDeveloper';
// import { NavLink, Outlet } from 'react-router-dom';
// import CardShow from '../DeveloperCardHolder/CardShow';

const CardSection = () => {
    const [developers] = useDeveloper([])
    const [number, setNumber] = useState(3)


    return (
        <section className='card-section pt-16 content-box'>
            <div style={{ fontFamily: "'Inter', sans-serif" }}>
                <h1 className='text-center mb-3 text-6xl font-black'>How to send a</h1>
                <h1 className='text-center  text-6xl font-black'><span className='bg-violet-600 text-white px-3 pb-2 '>package with</span> Airlock</h1>
            </div>
            <div className='flex mt-16 gap-9'>
                <p role={'button'} onClick={() => setNumber(3)}>First page</p>
                <p role={'button'} onClick={() => setNumber(2)}>Second page</p>
            </div>

            <div className='grid grid-cols-12 gap-12 mt-28'>
                {
                    developers.slice(0, number).map(developer => <DeveloperCard key={developer.id} developer={developer}></DeveloperCard>)
                }

            </div>
        </section>
    );
};

export default CardSection;