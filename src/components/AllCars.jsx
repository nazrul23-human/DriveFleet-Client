import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaCar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { FcOvertime } from "react-icons/fc";

const AllCars = ({ allCars }) => {
  const {
    _id,
    imageUrl,
    carName,
    carType,
    price,
    duration,
    location,
    availabilityStatus,
  } = allCars;

  return (
    
      <div className=" border-2 rounded-2xl">
        <div className="">
          <Image className="rounded-2xl"
          alt={carName}
          src={imageUrl}
          height={400}
          width={400}
        />
        </div>


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

        <div className="flex items-center gap-1">
          <FcOvertime/><p>{duration}</p>
        </div>

        <div className="flex items-center gap-1">
          <FiMapPin /><p>{location}</p>
        </div>

        <div>
          <p>{availabilityStatus}</p>
        </div>
      </div>
      <Link href={`/all-cars/${_id}`}>
      <Button className=" w-full font-bold rounded-xl"><FaExternalLinkAlt />Book Now</Button>
      </Link>
      </div>

  );
};

export default AllCars;