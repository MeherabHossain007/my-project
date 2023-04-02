import { type } from "os";
import React from "react";

type ReqCardProps = {
  rnumber: string;
  name: string;
  type: string;
  uni: string;
  title?: string;
  date?: string;
};

export default function ACard({
  rnumber,
  name,
  type,
  uni,
  title,
  date,
}: ReqCardProps) {
  return (
    <div className="border-2 flex w-full h-36 bg-white rounded-3xl justify-between items-center px-6 mt-6">
      <div className="flex w-full justify-between py-5">
        <div className="flex flex-col h-full ">
          <div className=" flex space-x-1">
            <div className=" font-bold text-lg">Patients No.</div>
            <div className=" text-lg">{rnumber}</div>
          </div>
          <div className=" text-2xl ">{name}</div>
          <div className=" font-semibold text-base text-slate-500">{type}</div>
          <div className=" font-semibold text-base text-slate-500">{uni}</div>
        </div>
        <div className="flex flex-col justify-between h-full items-end">
          <div className=" font-bold text-lg text-black">Appointment Date</div>
          <div className=" text-2xl font-light text-black">{date}</div>
        </div>
      </div>
    </div>
  );
}
