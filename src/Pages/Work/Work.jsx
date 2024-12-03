import { FaShareAlt } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Work.css";

export default function Work() {
  return (
    <div className="davAllComponent">
      <div className="bigestDivWorking">
        <div className="divDescriptionWork col-10 col-md-10 col-lg-9 col-xl-8">
          <h1 className="h11divDescriptionWork">MY WORK</h1>
          <h1 className="h12divDescriptionWork">RECENT WORK</h1>
          <div className="divLinksWork">
            <Link to="/work" className="LinkdivLinksWork LinkdivLinksWork1">
              Graphic Design
            </Link>
            <Link to="/work" className="LinkdivLinksWork">
              Apps
            </Link>
            <Link to="/work" className="LinkdivLinksWork">
              Software
            </Link>
          </div>
        </div>

        <div className="bigDivImagesWork col-11">
          <div className="divImageWork1 col-10 col-sm-5 col-md-5 col-lg-4">
            <div className="divImageHoverWork col-12">
              <div className="divDescriptionHowerWork">
                <h1 className="h11divDescriptionHowerWork">Work 02</h1>
                <h2 className="h12divDescriptionHowerWork">Animation</h2>
                <div className="divbuttondivDescriptionHowerWork">
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FaShareAlt />
                  </div>
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FiEye /> 100
                  </div>
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FaRegHeart /> 49
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divImageWork2 col-10 col-sm-5 col-md-5 col-lg-4">
            <div className="divImageHoverWork col-12">
              <div className="divDescriptionHowerWork">
                <h1 className="h11divDescriptionHowerWork">Work 02</h1>
                <h2 className="h12divDescriptionHowerWork">Animation</h2>
                <div className="divbuttondivDescriptionHowerWork">
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FaShareAlt />
                  </div>
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FiEye /> 100
                  </div>
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FaRegHeart /> 49
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divImageWork3 col-10 col-sm-5 col-md-5 col-lg-4">
            <div className="divImageHoverWork col-12">
              <div className="divDescriptionHowerWork">
                <h1 className="h11divDescriptionHowerWork">Work 02</h1>
                <h2 className="h12divDescriptionHowerWork">Animation</h2>
                <div className="divbuttondivDescriptionHowerWork">
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FaShareAlt />
                  </div>
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FiEye /> 100
                  </div>
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FaRegHeart /> 49
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divImageWork4 col-10 col-sm-5 col-md-5 col-lg-4">
            <div className="divImageHoverWork col-12">
              <div className="divDescriptionHowerWork">
                <h1 className="h11divDescriptionHowerWork">Work 02</h1>
                <h2 className="h12divDescriptionHowerWork">Animation</h2>
                <div className="divbuttondivDescriptionHowerWork">
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FaShareAlt />
                  </div>
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FiEye /> 100
                  </div>
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FaRegHeart /> 49
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divImageWork5 col-10 col-sm-5 col-md-5 col-lg-4">
            <div className="divImageHoverWork col-12">
              <div className="divDescriptionHowerWork">
                <h1 className="h11divDescriptionHowerWork">Work 02</h1>
                <h2 className="h12divDescriptionHowerWork">Animation</h2>
                <div className="divbuttondivDescriptionHowerWork">
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FaShareAlt />
                  </div>
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FiEye /> 100
                  </div>
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FaRegHeart /> 49
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divImageWork6 col-10 col-sm-5 col-md-5 col-lg-4">
            <div className="divImageHoverWork col-12">
              <div className="divDescriptionHowerWork">
                <h1 className="h11divDescriptionHowerWork">Work 02</h1>
                <h2 className="h12divDescriptionHowerWork">Animation</h2>
                <div className="divbuttondivDescriptionHowerWork">
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FaShareAlt />
                  </div>
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FiEye /> 100
                  </div>
                  <div className="divIconDivbuttondivDescriptionHowerWork">
                    <FaRegHeart /> 49
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
