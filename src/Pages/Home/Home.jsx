import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import { IoBagHandleSharp } from "react-icons/io5";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide divCarousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active carousel1">
            <div className="divDescriptionCarousel col-10 col-sm-10 col-md-12">
              <h1 className="h11DescriptionCarousel">Hi!</h1>
              <h1 className="h12DescriptionCarousel">Im Jackson</h1>
              <p className="pDescriptionCarousel col-8 col-md-4 col-lg-4 col-xl-3">
                100% html5 bootstrap templates Made By{" "}
                <Link style={{ color: "#2c98f0cc" }} to="https://colorlib.com/">
                  Colorlib.com
                </Link>
              </p>
              <button className="buttonDescriptionCarousel">
                DOWNLOAD CV <FaDownload />
              </button>
            </div>
          </div>

          <div className="carousel-item carousel2">
            <div className="divDescriptionCarousel col-12">
              <h1 className="h11DescriptionCarousel">I am</h1>
              <h1 className="h12DescriptionCarousel">a Designer</h1>
              <p className="pDescriptionCarousel col-8 col-md-4 col-lg-4 col-xl-3">
                100% html5 bootstrap templates Made By{" "}
                <Link style={{ color: "#2c98f0cc" }} to="https://colorlib.com/">
                  Colorlib.com
                </Link>
              </p>
              <button className="buttonDescriptionCarousel">
                VIEW PORTFOLIO <IoBagHandleSharp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
