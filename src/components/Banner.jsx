import { Separator } from "@heroui/react";
import Image from "next/image";
const Banner = () => {
    return (
        <div className="bg-[url('/assets/1banner.png')] text-white  flex justify-between flex-col items-center h-150  ">
            <div className="p-10 text-center flex justify-center flex-col  gap-3 flex-1 px-15 py-10">
                <p className="text-4xl bg-blue-700 font-bold px-5 py-3 rounded-lg">
                    DriveFleet
                </p>
                <p className="text-4xl bg-blue-700 font-bold px-5 py-3 rounded-lg">
                Rent Your Dream Car</p>

                <p className="font-bold bg-blue-700 px-5 py-3 rounded-lg">
                    Explore premium vehicles, book in minutes,<br/> and hit the road with confidence. SUVs, sedans, luxury cars,<br/> and more — all in one place.
                </p>

                
            </div>
            <div className="flex gap-5">
                    <button className="uppercase bg-blue-700 px-5 py-3 rounded-lg items-center font-bold cursor-pointer justify-center">
                        Explore Now
                    </button>

                    {/* <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer">
                        View Destination
                    </button> */}
                </div>

            
        </div>
    );
};

export default Banner;