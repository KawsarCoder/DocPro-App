"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);

  const params = usePathname();
  const category = params.split("/")[2];

  useEffect(() => {
    getCategoryList(console.log(params));
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      //   console.log(res.data.data);
      setCategoryList(res?.data?.data);
    });
  };

  // console.log(categoryList);

  return (
    <div className="h-screen mt-5 flex flex-col ">
      <Command>
        <CommandInput placeholder="Type a command..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categoryList.map((item, index) => (
              <CommandItem key={index}>
                <Link
                  href={"/search/" + item?.Name}
                  className={` p-2 flex gap-2 border font-semibold hover:border-secondary items-center rounded-md cursor-pointer w-full hover:text-secondary ${
                    category == item?.Name && "border-secondary text-secondary"
                  }`}
                >
                  <Image
                    src={item?.Icon?.url}
                    width={25}
                    height={25}
                    alt="category_image"
                  />
                  <label>{item?.Name}</label>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoryList;
