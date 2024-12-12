import { Button } from "@/components/ui/button";
import {
  Facebook,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  MapPin,
  UserCircle,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Bookappointment from "./Bookappointment";

function DoctorDetails({ doctor }) {
  const socialMediaList = [
    {
      id: 1,
      icon: (
        <Facebook className="bg-primary rounded-full text-white p-1.5 w-8 h-8 hover:bg-secondary" />
      ),
      url: "https://web.facebook.com/mohammod.kawsar.946/",
    },
    {
      id: 2,
      icon: (
        <Youtube className="bg-primary rounded-full text-white p-1.5 w-8 h-8 hover:bg-secondary" />
      ),
      url: "https://www.youtube.com/@code.with.kawsar",
    },
    {
      id: 3,
      icon: (
        <Linkedin className="bg-primary rounded-full text-white p-1.5 w-8 h-8 hover:bg-secondary" />
      ),
      url: "https://www.linkedin.com/in/mdkawsar1403/",
    },
    {
      id: 4,
      icon: (
        <Instagram className="bg-primary rounded-full text-white p-1.5 w-8 h-8 hover:bg-secondary" />
      ),
      url: "https://www.instagram.com/code.with.kawsar/",
    },
    {
      id: 5,
      icon: (
        <Github className="bg-primary rounded-full text-white p-1.5 w-8 h-8 hover:bg-secondary" />
      ),
      url: "https://github.com/kawsarcoder",
    },
  ];

  return (
    <>
      <section className=" grid grid-cols-1 md:grid-cols-3 border p-5 mt-5 rounded-lg">
        <div>
          <Image
            src={doctor?.Photo[0]?.url}
            className="rounded-lg h-[300px] object-cover w-full"
            alt="doctor-photo"
            width={200}
            height={200}
          />
        </div>
        <div className="col-span-2 mt-5 flex flex-col gap-2 items-baseline md:px-10">
          <h2 className="font-bold text-2xl">{doctor?.DoctorName}</h2>
          <div className="flex gap-2 text-gray-500 ">
            <GraduationCap />
            <span>{doctor?.YearOfExperience}</span>
          </div>
          <div className="flex gap-2 text-gray-500 ">
            <UserCircle />
            <span>{doctor?.DoctorPatients}</span>
          </div>
          <div className="flex gap-2 text-gray-500">
            <MapPin />
            <span>{doctor.DoctorAddress}</span>
          </div>
          <h2 className="text-xs bg-orange-100 text-secondary font-semibold p-1 rounded-full px-2 ">
            {doctor?.categories[0]?.Name}
          </h2>
          <div className="flex gap-3">
            {socialMediaList.map((item, index) => (
              <Link key={index} href={item.url}>
                {item.icon}
              </Link>
            ))}
          </div>

          <Bookappointment doctor={doctor} />
        </div>
        {/* about doctor  */}
      </section>
      <div className="p-3 border rounded-lg mt-5">
        <h2 className="font-bold text-xl"> About Me</h2>
        <p className="text-gray-500 tracking-wider mt-2">
          {doctor?.AboutDoctorr}
        </p>
      </div>
    </>
  );
}

export default DoctorDetails;
