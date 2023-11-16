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
    const afterDeletion = { ...user };
    afterDeletion.education.splice(index, 1);
    setUser(afterDeletion);
  };

  const hilight = (index) => {
    const selector = `education${index}`;
    document.querySelector(`.${selector}`).classList.add("hilight");
  };

  const unHilight = (index) => {
    const selector = `education${index}`;
    document.querySelector(`.${selector}`).classList.remove("hilight");
  };

  const addEdu = (e) => {
    e.preventDefault();
    const afterAdding = { ...user };
    afterAdding.education.push({});
    setUser(afterAdding);
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
                <label htmlFor={"eduMajor" + index}>
                  Major
                  <input
                    type="text"
                    value={education.faculty}
                    id={"eduMajor" + index}
                    onChange={(e) => {
                      const updatedEducations = { ...user };
                      updatedEducations.education[index].faculty =
                        e.target.value;
                      setUser(updatedEducations);
                    }}
                  />
                </label>
                <label htmlFor={"college" + index}>
                  College
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
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="add">
            <button id="addEdu" onClick={(e) => addEdu(e)}>
              Add Education
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
