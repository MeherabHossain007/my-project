import ReqCard from "@/components/ReqCard";
import NavBar from "@/layout/NavBar";
import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightAddon } from "@chakra-ui/react";

export default function Patients() {
  return (
    <>
      <NavBar>
        <div className="p-4 sm:ml-64">
          <div className="p-6 divide-y divide-gray-200 rounded-lg  mt-14">
            <div className="flex justify-between items-center mb-4">
              <div className=" text-lg">All Patients</div>
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
              <ReqCard
                rnumber={"1"}
                name={"Meherab Hossain"}
                type={"Surgery"}
                uni={"ABC Medical"}
              />
              <ReqCard
                rnumber={"2"}
                name={"Sadab Uz Zaman"}
                type={"Medicine"}
                uni={"United Medical"}
              />
              <ReqCard
                rnumber={"3"}
                name={"Md.Yusuf"}
                type={"Medicine"}
                uni={"NSU Medical"}
              />
            </div>
          </div>
        </div>
      </NavBar>
    </>
  );
}
