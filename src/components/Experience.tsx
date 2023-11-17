import ExperienceCCC from "./ExperienceCCC";
import ExperienceC1 from "./ExperienceC1";
import { useState } from "react";

export default function Experience() {
  let WorkExperience = ["CCC", "Capital One"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  let handleClick = () => {};
  return (
    <div className="container text-center border" id="Experience">
      <h1>My Experience!</h1>
      <div className="row">
        <div className="col-2">
          <ul className="list-group">
            {WorkExperience.map((item, index) => (
              <li
                className={
                  index === selectedIndex
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item}
                onClick={() => setSelectedIndex(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-10 bg-dark">
          {selectedIndex === 0 ? <ExperienceCCC /> : <ExperienceC1 />}
        </div>
      </div>
    </div>
    // <div style={{ height: "1000px" }}>
    //
    //   <ExperienceCCC />
    //   <ExperienceC1 />
    // </div>
  );
}
