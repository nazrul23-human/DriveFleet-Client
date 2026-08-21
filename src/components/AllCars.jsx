import Image from "next/image";
import React from "react";

const AllCars = ({ allCars }) => {
  const {
    imageUrl,
    carName,
    carType,
    price,
    duration,
    location,
  } = allCars;

  return (
    <div>
      <Image
        alt={carName}
        src={imageUrl}
        height={400}
        width={400}
      />

      <h2 className="font-bold">Name: {carName}</h2>
      <p>Type: {carType}</p>
      <p>Price: ${price}</p>
      <p>Duration: {duration}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default AllCars;