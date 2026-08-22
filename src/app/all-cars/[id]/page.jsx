import Image from 'next/image';
import React from 'react';
import { FaCar } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { FcOvertime } from "react-icons/fc";

const CarDetailsPage = async ({ params }) => {
    const { id } = await params

    const res = await fetch(`http://localhost:5000/add-Cars/${id}`)
    const addCars = await res.json()

    const {
        imageUrl,
        carName,
        carType,
        price,
        duration,
        location,
        description,
        availabilityStatus } = addCars;
    // console.log(addCars)

    return (
        <div className='p-10'>
            <div className=''>

                <Image className='rounded-2xl'
                    alt={carName}
                    src={imageUrl}
                    height={500}
                    width={600} />

                <div className="p-2">
                    <div className="flex items-center gap-1">
                        <FaCar /><h2 className="font-bold">{carName}</h2>
                    </div>

                    <div>
                        <p>{carType}</p>
                    </div>

                    <div>
                        <p>${price}</p>
                    </div>

                    <div className='flex items-center gap-1 '>
                        <FcOvertime /><p>{duration}</p>
                    </div>

                    <div className="flex items-center gap-1">
                        <FiMapPin /><p>{location}</p>
                    </div>

                    <div>
                        <p>{availabilityStatus}</p>
                    </div>
                    <div className=''>
                        <p className='gap-2'>Overview: {description}</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CarDetailsPage;