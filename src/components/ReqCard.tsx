import { type } from "os";
import React from "react";

type ReqCardProps = {
  rnumber: string;
  name: string;
  type: string;
  uni: string;
  amount?: string;
  interest?: string;
};

export default function ReqCard({
  rnumber,
  name,
  type,
  uni,
  amount,
  interest,
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
      </div>
    </div>
  );
}
