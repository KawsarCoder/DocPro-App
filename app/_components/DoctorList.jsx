import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React from "react";

function DoctorList({ doctorList }) {
  const arrayNum = [1, 2, 3, 4, 5, 6];
  return (
    <div className="mb-10 px-8">
      <h2 className="font-bold text-xl">Popular Doctor</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctorList.length > 0 ? (
          doctorList.map((item, index) => (
            <div
              key={index}
              className="border-[1px] rounded-lg p-3 mt-10 cursor-pointer hover:border-secondary transition-all ease-in-out hover:shadow-md"
            >
              <Image
                src={item?.image?.url}
                alt="doctor-image"
                width={500}
                height={200}
                className="h-[200px] w-full object-cover rounded-lg "
              />
              <div className="mt-3 items-baseline flex flex-col gap-2">
                <h2 className="text-xs bg-orange-100 text-secondary font-semibold p-1 rounded-full px-2 ">
                  {item?.categories[0]?.Name}
                </h2>
                <h2 className="font-bold text-[16px]">{item?.Name}</h2>
                <span className="text-primary font-semibold">
                  {item?.Year_of_Experience}
                </span>
                <span className="text-gray-500 text-sm">{item?.Address}</span>
                <button className="p-2 px-3 border-[1px] font-semibold rounded-full w-full text-center text-xs mt-2 cursor-pointer hover:bg-secondary hover:text-white">
                  Book Now
                </button>
              </div>
            </div>
          ))
        ) : (
          // skelton for loading
          <>
            {" "}
            <Skeleton className=" bg-slate-200 rounded-lg animate-pulse" />
            <Skeleton className=" h-[220px] bg-slate-200 rounded-lg animate-pulse" />
            <Skeleton className=" h-[220px] bg-slate-200 rounded-lg animate-pulse" />
            <Skeleton className=" h-[220px] bg-slate-200 rounded-lg animate-pulse" />
            <Skeleton className=" h-[220px] bg-slate-200 rounded-lg animate-pulse" />
            <Skeleton className=" h-[220px] bg-slate-200 rounded-lg animate-pulse" />
          </>
        )}
      </div>
    </div>
  );
}

export default DoctorList;
