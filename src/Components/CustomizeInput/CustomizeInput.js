import React from 'react';
import './CustomInput.css'

const CustomizeInput = () => {
    return (
        <div className='md:my-24 my-11 flex justify-center items-center border-violet-600 border-2 mx-auto md:w-1/3 w-auto rounded-2xl py-2'>

            <input type="file" name="customInput" id="customInput" className='w-52 ml-[-80px] custom-input' />
            <label className='w-36 bg-violet-600 text-white text-center rounded-xl text-xl font-normal py-1 ' htmlFor="customInput">Select</label>
        </div>
    );
};

export default CustomizeInput;