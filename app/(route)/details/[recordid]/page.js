"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import DoctorDetails from "../_components/DoctorDetails";

function Details({ params }) {
  const [doctor, setDoctor] = useState();
  useEffect(() => {
    getDoctorById();
  }, []);

  const getDoctorById = () => {
    GlobalApi.getDoctorById(params.recordId).then((res) => {
      setDoctor(res.data.data);
    });
  };
  // console.log(doctor);

  return (
    <div className="p-5 md:px-20">
      <h2 className="font-bold text-2xl">Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-3">
          {doctor && <DoctorDetails doctor={doctor} />}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Details;
