"use client";
import { data } from "../../../constants/akshaya_multispeciality_hospital.js";
import { Footer } from "@/components";
import Image from "next/image";
export default function akshayahospital() {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-white mb-5 pt-5 pb-3">
          <h1 className="text-6xl pt-5 font-semibold text-black text-center underline underline-offset-4">
            Akshaya Multispeciality Hospital
          </h1>
        </div>
        <div className="flex flex-row mt-10">
          <div className="w-1/3 mt-10 ml-20 flex flex-col">
            <div>
              <h1 className="text-2xl  font-semibold text-black">Scope</h1>
              <p>Architecture, Structural, Interior, Electrical & Plumbing</p>
            </div>
            <div>
              <h1 className="text-2xl pt-5 font-semibold text-black">Area</h1>
              <p>45000sft</p>
            </div>
            <div>
              <h1 className="text-2xl pt-5 font-semibold text-black">
                Location
              </h1>
              <p>Karur</p>
            </div>
            <div>
              <h1 className="text-2xl pt-5 font-semibold text-black">
                Description
              </h1>
              <p>
                The Hospital has been designed for Dr.Sivakumar, one of the
                leading doctors in Karur. Functional Zoning of spaces has been
                done with ample natural lighting and ventilation. Contemporary
                elements have been used in the design.
              </p>
            </div>
          </div>
          <div className="w-2/3 c">
            <div className="m-2 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-items-center mr-12 ml-8 p-6">
              {data.map((item) => (
                <div
                  className="inline-block pt-6 pl-6 h-full w-full"
                  key={item.id}
                >
                  <Image
                    className="cursor-pointer hover:scale-110 ease-in-out duration-300 shadow-lg rounded-xl aspect-video w-full h-auto"
                    src={item.img}
                    width={300}
                    height={200}
                    alt="/"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
