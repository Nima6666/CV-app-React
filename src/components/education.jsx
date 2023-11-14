import arrow from "../assets/arrow.png";
import { useState } from "react";
export default function Education({ user, setUser }) {
  const educations = user.education;

  const [formVisible, setFormVisibility] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisibility(!formVisible);
    console.log(formVisible);
  };

  return (
    <>
      <div className="headImg">
        <h3>Education</h3>
        <img
          src={arrow}
          id="EduArr"
          className={formVisible ? "rotateX" : "rotateY"}
          height="20px"
          onClick={toggleFormVisibility}
        />
      </div>
      <div className={`form-container ${formVisible ? "visible" : ""}`}>
        <form id="education">
          {educations.map((education, index) => {
            return (
              <div className={education.level} key={index}>
                <label htmlFor={"eduLevel" + index}>
                  Level
                  <input
                    type="text"
                    value={education.level}
                    id={"eduLevel" + index}
                    onChange={(e) => {
                      const updatedEducations = { ...user };
                      updatedEducations.education[index].level = e.target.value;
                      setUser(updatedEducations);
                    }}
                  />
                </label>
                <label htmlFor={"start" + index}>
                  Start Year
                  <input
                    type="Year"
                    id={"start" + index}
                    value={education.start}
                    onChange={(e) => {
                      const updatedEducations = { ...user };
                      updatedEducations.education[index].start = e.target.value;
                      setUser(updatedEducations);
                    }}
                  />
                </label>
                <label htmlFor={"end" + index}>
                  End Year
                  <input
                    type="Year"
                    id={"end" + index}
                    value={education.end}
                    onChange={(e) => {
                      const updatedEducations = { ...user };
                      updatedEducations.education[index].end = e.target.value;
                      setUser(updatedEducations);
                    }}
                  />
                </label>
              </div>
            );
          })}
        </form>
      </div>
    </>
  );
}
