"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

function CategorySearch() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      setCategoryList(res?.data?.data);
    });
  };

  return (
    <section className="mb-10 items-center flex flex-col gap-2 px-5">
      <h2 className="font-bold text-4xl tracking-wide  bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
        Find Your Specialist
      </h2>
      <p className="text-gray-500 text-lg">
        Browse by specialty categories or use the search box to find doctors,
        clinics, or services instantly.{" "}
        <span className="block text-center">
          {" "}
          Your health, just a click away!
        </span>
      </p>
      {/* <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
        <Input type="text" placeholder="Search" />
        <Button
          className="bg-white text-secondary font-semibold border border-secondary hover:bg-secondary hover:text-white"
          type="submit"
        >
          {" "}
          <Search className="h-4 w-4 mr-2" /> Search
        </Button>
      </div> */}
      {/* display list of category  */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-10">
        {categoryList.length > 0 ? (
          categoryList.map((item, index) => (
            // index < 6 &&
            <Link
              href={"/search/" + item?.Name}
              key={index}
              className="flex flex-col text-center gap-2 items-center p-5 border hover:border-secondary hover:text-secondary font-semibold rounded-lg  hover:hover:scale-105 transition-all ease-in-out cursor-pointer"
            >
              <Image
                src={item?.Icon?.url}
                alt="category-icon"
                width={40}
                height={40}
              />
              <label>{item?.Name}</label>
            </Link>
          ))
        ) : (
          <>
            {" "}
            <Skeleton className="w-[120px] h-[100px] bg-slate-200 rounded-lg animate-pulse" />
            <Skeleton className="w-[120px] h-[100px] bg-slate-200 rounded-lg animate-pulse" />
            <Skeleton className="w-[120px] h-[100px] bg-slate-200 rounded-lg animate-pulse" />
            <Skeleton className="w-[120px] h-[100px] bg-slate-200 rounded-lg animate-pulse" />
          </>
        )}
      </div>
    </section>
  );
}

export default CategorySearch;
