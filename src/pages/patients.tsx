import Card from "@/components/Card";
import NavBar from "@/layout/NavBar";
import React from "react";

export default function Patients() {
  return (
    <NavBar>
      <div className="p-4 sm:ml-64 font-titillium">
        <div className="p-4  rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <Card>
              
            </Card>
          </div>
        </div>
      </div>
    </NavBar>
  );
}
