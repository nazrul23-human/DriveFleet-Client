import React from "react";
import AllCars from "@/components/AllCars";

const AllCarsPage = async () => {
  const res = await fetch("http://localhost:5000/all-cars");
  const allCars = await res.json();

  console.log(allCars);

  return (
    <div className="p-10">

      <div>
        {allCars.map((car) => (
          <AllCars
            key={car._id}
            allCars={car}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCarsPage;