import Card from "@/components/Card";
import List from "@/components/List";
import NavBar from "@/layout/NavBar";
import Image from "next/image";
import React from "react";

export default function Dashboard() {
  return (
    <NavBar>
      <div className="p-4 sm:ml-64 font-titillium">
        <div className="p-4  rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="block max-w p-6 bg-gradient-120 from-[#18A6F5] to-[#4D43D6] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className=" pb-2 font-bold text-white text-lg">
                Todays Active Appointment
              </div>
              <div className=" pb-2 font-bold text-white text-5xl">30</div>
            </div>

            <div className="block max-w p-6 bg-gradient-120 from-[#F89833] to-[#F2614B] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className=" pb-2 font-bold text-white text-lg">
                Todays Active Report
              </div>
              <div className="pb-2 font-bold text-white text-5xl">45</div>
            </div>

            <div className="block max-w p-6 bg-gradient-120 from-[#7f18f5] to-[#d62ef8] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className=" pb-2 font-bold text-white text-lg">
                Todays Active Surgery
              </div>
              <div className="pb-2 font-bold text-white text-5xl">15</div>
            </div>
            <div className="col-span-3">
              <Card>
                <div className=" flex justify-between">
                  <div>
                    <div className="text-black pb-2 font-bold text-lg">
                      Your Profile
                    </div>
                    <div className=" flex space-x-5">
                      <div className="flex flex-col">
                        <div className=" text-black font-semibold text-2xl">
                          Dr.Mahbub Morsad Rifat
                        </div>
                        <div className=" text-black font-light text-md">
                          General Surgeon
                        </div>
                        <div className=" text-black font-light text-md">
                          North South Medical,Dhaka
                        </div>
                        <span className="text-black mt-6  rounded-md bg-[#D3D9E0] px-2 py-1 min-w-min flex flex-col ">
                          <table>
                            <tr>
                              <td className="text-black">Mobile:</td>
                              <td className="text-black">01303679325</td>
                            </tr>
                            <tr>
                              <td className="text-black">Email:</td>
                              <td className="text-black">
                                riderrifar@gmail.com
                              </td>
                            </tr>
                          </table>
                        </span>
                      </div>
                    </div>
                  </div>
                  <Image
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/temp-auto-f1647.appspot.com/o/Asset%202.png?alt=media&token=44050cc2-ef7c-4c77-a423-84d29673a563"
                    }
                    alt={""}
                    height={100}
                    width={200}
                  />
                </div>
              </Card>
            </div>
            <div className="col-span-2 ">
              <List />
            </div>
            <iframe
              width="500"
              height="300"
              frameBorder="0"
              scrolling="no"
              src="https://dayspedia.com/if/digit/?v=1&iframe=eyJ3LTEyIjp0cnVlLCJ3LTExIjp0cnVlLCJ3LTEzIjp0cnVlLCJ3LTE0IjpmYWxzZSwidy0xNSI6ZmFsc2UsInctMTEwIjpmYWxzZSwidy13aWR0aC0wIjpmYWxzZSwidy13aWR0aC0xIjp0cnVlLCJ3LXdpZHRoLTIiOmZhbHNlLCJ3LTE2IjoiMjRweCIsInctMTkiOiI0OCIsInctMTciOiIxNiIsInctMjEiOnRydWUsImJnaW1hZ2UiOjAsImJnaW1hZ2VTZXQiOnRydWUsInctMjFjMCI6IiNmZmZmZmYiLCJ3LTAiOnRydWUsInctMyI6ZmFsc2UsInctM2MwIjoiIzM0MzQzNCIsInctM2IwIjoiMSIsInctNiI6IiMzNDM0MzQiLCJ3LTIwIjp0cnVlLCJ3LTQiOiIjMDAwMDAwIiwidy0xOCI6ZmFsc2UsInctd2lkdGgtMmMtMCI6IjUwMCIsInctMTE1IjpmYWxzZX0=&lang=en&cityid=9611"
            ></iframe>
          </div>
        </div>
      </div>
    </NavBar>
  );
}
