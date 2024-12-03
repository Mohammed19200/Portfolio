import { FaPen } from "react-icons/fa";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="davAllComponent">
      <div className="divTitleExperience col-10 col-md-10 col-lg-9 col-xl-8">
        <h1 className="h11divTitleExperience">EXPERIENCE</h1>
        <h1 className="h12divTitleExperience">WORK EXPERIENCE</h1>
      </div>

      <div className="col-8 col-sm-9 col-md-9 col-lg-8 divAllDescriptionCompany">
        <div className="col-12 bigDivDescriptionCompany1">
          <div className="iconJobsDescription1">
            <FaPen />
          </div>

          <div className="divDescriptionTitleCompany">
            <h1 className="h1divDescriptionCompany">System Analyst</h1>
            <h2 className="h2divDescriptionCompany">2017-2018</h2>
          </div>
          <p className="pdivDescriptionCompany">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>
        </div>

        <div className="col-12 bigDivDescriptionCompany2">
          <div className="iconJobsDescription2">
            <FaPen />
          </div>
          <div className="divDescriptionTitleCompany">
            <h1 className="h1divDescriptionCompany">Full Stack Developer</h1>
            <h2 className="h2divDescriptionCompany">2017-2018</h2>
          </div>
          <p className="pdivDescriptionCompany">
            Tolerably earnestly middleton extremely distrusts she boy now not.
            Add and offered prepare how cordial two promise. Greatly who affixed
            suppose but enquire compact prepare all put. Added forth chief trees
            but rooms think may.
          </p>
        </div>

        <div className="col-12 bigDivDescriptionCompany3">
          <div className="iconJobsDescription3">
            <FaPen />
          </div>
          <div className="iconJobsDescription4">+</div>
          <div className="divDescriptionTitleCompany">
            <h1 className="h1divDescriptionCompany">
              Front End Developer at Google Company
            </h1>
            <h2 className="h2divDescriptionCompany">2017-2018</h2>
          </div>
          <p className="pdivDescriptionCompany">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>
        </div>
      </div>
    </div>
  );
}
