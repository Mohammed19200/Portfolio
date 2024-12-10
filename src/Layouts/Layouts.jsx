import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import "./Layouts.css";

export default function Layouts() {
  return (
    <>
      <div className="col-12 bigdiv">
        <div className="col-md-3 col-lg-3 col-xl-2">
          <Navbar />
        </div>

        <div className="divcontent col-md-9 col-xl-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}
