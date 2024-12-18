import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DoctorList({ doctorList, heading = "Popular Doctors" }) {
  return (
    <div className="mb-10 px-8">
      <h2 className="font-bold text-xl">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctorList.length > 0 ? (
          doctorList.map((item, index) => (
            <div
              key={index}
              className="border-[1px] rounded-lg p-3 mt-10 cursor-pointer hover:border-secondary transition-all ease-in-out hover:shadow-md"
            >
              <Image
                src={item?.Photo[0]?.url}
                alt="doctor-image"
                width={500}
                height={200}
                className="h-[200px] w-full object-cover rounded-lg "
              />
              <div className="mt-3 items-baseline flex flex-col gap-2">
                <h2 className="text-xs bg-orange-100 text-secondary font-semibold p-1 rounded-full px-2 ">
                  {item?.categories[0]?.Name}
                </h2>
                <h2 className="font-bold text-[16px]">{item?.DoctorName}</h2>
                <span className="text-primary font-semibold">
                  {item?.Year_of_Experience}
                </span>
                <span className="text-gray-500 text-sm">
                  {item?.DoctorAddress}
                </span>
                <Link
                  className="p-2 px-3 border font-semibold rounded-full w-full text-center mt-2 cursor-pointer hover:bg-secondary hover:text-white"
                  href={"/details/" + item?.documentId}
                >
                  Book Now
                </Link>
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
