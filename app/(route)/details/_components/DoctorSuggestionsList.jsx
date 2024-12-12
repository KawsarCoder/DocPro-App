"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function DoctorSuggestionsList() {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctorList();
  }, []);

  const getDoctorList = () => {
    GlobalApi.getDoctorList().then((res) => {
      setDoctorList(res.data.data);
    });
  };

  return (
    <div className="p-4 border mt-5 md:ml-5 rounded-lg text-center">
      <h2 className="mb-3 font-bold">Suggestions</h2>

      {doctorList.map((doctor, index) => (
        <Link
          key={index}
          className="mb-4 p-3 shadow-sm w-full cursor-pointer hover:bg-slate-100 rounded-lg flex flex-col items-center"
          href={"/details/" + doctor?.documentId}
        >
          <Image
            src={doctor?.Photo[0].url}
            height={70}
            width={70}
            className="w-[70px] h-[70px] rounded-full"
            alt="doctor-image"
          />
          <div className="mt-3 flex flex-col ">
            <div className="text-[12px] text-center font-bold bg-orange-100 text-secondary px-0.5 rounded-lg">
              {doctor?.categories[0]?.Name}
            </div>
            <h2 className="font-bold text-sm ">{doctor?.DoctorName}</h2>
            <h2 className="text-primary text-sm">{doctor?.YearOfExperience}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DoctorSuggestionsList;
