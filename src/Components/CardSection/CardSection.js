import React from 'react';
import './CardSection.css'
import DeveloperCard from '../DeveloperCard/DeveloperCard'
import useDeveloper from '../../Hooks/useDeveloper';

const CardSection = () => {
    const [developers] = useDeveloper([])


    return (
        <section className='card-section mt-16 content-box'>
            <div style={{ fontFamily: "'Inter', sans-serif" }}>
                <h1 className='text-center mb-3 text-6xl font-black'>How to send a</h1>
                <h1 className='text-center  text-6xl font-black'><span className='bg-violet-600 text-white px-3 pb-2 '>package with</span> Airlock</h1>
            </div>
            <div className='grid grid-cols-12 gap-4 mt-28'>
                {
                    developers.map(developer => <DeveloperCard key={developer.id} developer={developer}></DeveloperCard>)
                }
            </div>
        </section>
    );
};

export default CardSection;