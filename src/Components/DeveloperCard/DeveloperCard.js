import React from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ReviewCard = ({ developer }) => {
    const { name, designation, profile, background, linkedin, twitter } = developer
    return (
        <div className=" rounded lg:max-w-lg max-w-sm bg-base-100 col-span-12 md:col-span-4 shadow-xl h-72">
            <div className=" ">
                <img className='max-h-28 rounded w-full' src={background} alt="background" />


                <div className='flex flex-col items-start pl-10 '>
                    <div className="avatar mt-[-33px]">
                        <div className="w-16 rounded-full ring ring-violet-600 ring-offset-base-100 ring-offset-2 mb-2">
                            <img alt='profile' src={profile} />
                        </div>
                    </div>
                    <div className='ml-[-15px]'>
                        <h3 className='text-2xl font-bold ml-3'>{name}</h3>
                        <h2 className='text-xl ml-3 text-violet-700'>{designation}</h2>
                        <div className='flex items-center ml-3'>
                            <BsLinkedin />
                            <Link className='mx-1' to={linkedin}>https://www.linkedin.com/in</Link>
                        </div>
                        <div className='flex items-center ml-3'>
                            <BsTwitter></BsTwitter>
                            <Link className='mx-1' to={twitter}>https://twitter.com</Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviewCard;