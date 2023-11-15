import arrow from "../assets/arrow.png";
import { useState } from "react";
export default function Education({ user, setUser }) {
  const educations = user.education;

  const [formVisible, setFormVisibility] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisibility(!formVisible);
  };

  const removeEdu = (e, index) => {
    e.preventDefault();
  };

  const hilight = (index) => {
    const selector = `education${index}`;
    document.querySelector(`.${selector}`).classList.add("hilight");
  };

  const unHilight = (index) => {
    const selector = `education${index}`;
    document.querySelector(`.${selector}`).classList.remove("hilight");
  };

  return (
    <>
      <div className="headImg" onClick={toggleFormVisibility}>
        <h3>Education</h3>
        <img
          src={arrow}
          id="EduArr"
          className={formVisible ? "rotateX" : "rotateY"}
          height="20px"
        />
      </div>
      <div className={`form-container ${formVisible ? "visible" : ""}`}>
        <form id="education">
          {educations.map((education, index) => {
            return (
              <div className={"education" + index} key={index}>
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
                <label htmlFor={"college" + index}>
                  Start Year
                  <input
                    type="text"
                    id={"college" + index}
                    value={education.college}
                    onChange={(e) => {
                      const updatedEducations = { ...user };
                      updatedEducations.education[index].college =
                        e.target.value;
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
                <div className="remove">
                  <button
                    id="remEdu"
                    onClick={(e) => removeEdu(e, index)}
                    onMouseEnter={() => hilight(index)}
                    onMouseLeave={() => unHilight(index)}
                  >
                    remove
                  </button>
                </div>
              </div>
            );
          })}
          <button id="addEdu">Add</button>
        </form>
      </div>
    </>
  );
}
