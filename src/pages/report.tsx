import Card from "@/components/Card";
import ACard from "@/components/ReqCard copy";
import RCard from "@/components/ReqCard copy 2";
import NavBar from "@/layout/NavBar";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import React from "react";

export default function Report() {
  return (
    <NavBar>
      <div className="p-4 sm:ml-64">
        <div className="p-6 divide-y divide-gray-200 rounded-lg  mt-14">
          <div className="flex justify-between items-center mb-4">
            <div className=" text-lg">All Reports</div>
            <div>
              <InputGroup>
                <Input w={500} type="tel" placeholder="Enter Patients No." />
                <InputRightAddon>
                  <SearchIcon />
                </InputRightAddon>
              </InputGroup>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 grid-rows-1">
            <RCard
              rnumber={"1"}
              name={"Meherab Hossain"}
              type={"SPC"}
              uni={"ABC Medical"}
              date="March 28"
            />
            <RCard
              rnumber={"2"}
              name={"Sadab Uz Zaman"}
              type={"Blood Tets"}
              uni={"United Medical"}
              date="March 16"
            />
            <RCard
              rnumber={"3"}
              name={"Md.Yusuf"}
              type={"HBS Test"}
              uni={"NSU Medical"}
              date="March 26"
            />
          </div>
        </div>
      </div>
    </NavBar>
  );
}
