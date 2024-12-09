"use client";

import DoctorList from "@/app/_components/DoctorList";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";

function Search({ params }) {
  const [doctorList, setDoctorlist] = useState([]);
  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = () => {
    GlobalApi.getDoctorCategory(params.cname).then((res) => {
      setDoctorlist(res.data.data);
    });
  };

  return (
    <section className="mt-5">
      <DoctorList heading={params.cname} doctorList={doctorList} />
    </section>
  );
}

export default Search;
