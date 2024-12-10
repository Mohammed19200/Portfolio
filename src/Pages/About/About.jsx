import { GiWorld } from "react-icons/gi";
import { FaLayerGroup } from "react-icons/fa";
import { FaMobileButton } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <div className="davAllComponent">
      <div className="divDescriptionAbout col-10 col-md-10 col-lg-9 col-xl-8">
        <h1 className="h11DescriptionAbout">ABOUT US</h1>
        <h1 className="h12DescriptionAbout">WHO AM I?</h1>
        <p className="p1DescriptionAbout">
          <span className="spanDescriptionAbout">Hi Im Jackson Ford</span> On
          her way she met a copy. The copy warned the Little Blind Text, that
          where it came from it would have been rewritten a thousand times and
          everything that was left from its origin would be the word (and) and
          the Little Blind Text should turn around and return to its own, safe
          country.
        </p>
        <p className="p2DescriptionAbout">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
      </div>

      <div className="bigdivWorkingAbout col-11">
        <div className="divWorkingAbout divBorderWorkingAbout1 col-11 col-sm-5 col-md-5 col-lg-2">
          <FaRegLightbulb className="iconDivBorderWorkingAbout1" />
          <p className="pdivWorkingAbout">Graphic Design</p>
        </div>
        <div className="divWorkingAbout divBorderWorkingAbout2 col-11 col-sm-5 col-md-5 col-lg-2">
          <GiWorld className="iconDivBorderWorkingAbout2" />
          <p className="pdivWorkingAbout">Web Design</p>
        </div>
        <div className="divWorkingAbout divBorderWorkingAbout3 col-11 col-sm-5 col-md-5 col-lg-2">
          <FaLayerGroup className="iconDivBorderWorkingAbout3" />
          <p className="pdivWorkingAbout">Software</p>
        </div>
        <div className="divWorkingAbout divBorderWorkingAbout4 col-11 col-sm-5 col-md-5 col-lg-2">
          <FaMobileButton className="iconDivBorderWorkingAbout4" />
          <p className="pdivWorkingAbout">Application</p>
        </div>
      </div>
    </div>
  );
}
