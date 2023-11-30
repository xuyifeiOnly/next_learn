"use client";
import * as Icons from "@heroicons/react/24/outline";
import React from "react";

export default function IconList() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {Object.values(Icons).map((Icon: any, index) => {
        return (
          <div
            key={index}
            className="aspect-square shadow-lg flex items-center justify-center"
          >
            {<Icon className="w-[50%] hover:scale-125 duration-500 cursor-pointer"/>}
          </div>
        );
      })}
      {/* {<Icons.AcademicCapIcon></Icons.AcademicCapIcon>} */}
    </div>
  );
}
