import { useState } from "react";
import arrow from "../assets/arrow.png";
export default function Experience({ user, setUser }) {
  const experiences = user.experience;

  const [formVisible, setFormVisibility] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisibility(!formVisible);
  };

  const removeExp = (e, index) => {
    e.preventDefault();
    const afterDeletion = { ...user };
    afterDeletion.experience.splice(index, 1);
    setUser(afterDeletion);
  };

  const hilight = (index) => {
    const selector = `experience${index}`;
    document.querySelector(`.${selector}`).classList.add("hilight");
  };

  const unHilight = (index) => {
    const selector = `experience${index}`;
    document.querySelector(`.${selector}`).classList.remove("hilight");
  };

  const addExp = (e) => {
    e.preventDefault();
    const afterAdding = { ...user };
    afterAdding.experience.push({});
    setUser(afterAdding);
  };

  return (
    <>
      <div className="headImg" onClick={toggleFormVisibility}>
        <h3>Experience</h3>
        <img
          src={arrow}
          id="ExpArr"
          className={formVisible ? "rotateX" : "rotateY"}
          height="20px"
        />
      </div>
      <div className={`form-container ${formVisible ? "visible" : ""}`}>
        <form id="experience">
          {experiences.map((experience, index) => {
            return (
              <div className={"experience" + index} key={index}>
                <label htmlFor={"exp" + index}>
                  Worked in
                  <input
                    type="text"
                    value={experience.company}
                    id={"exp" + index}
                    onChange={(e) => {
                      const updatedEducations = { ...user };
                      updatedEducations.experience[index].company =
                        e.target.value;
                      setUser(updatedEducations);
                    }}
                  />
                  <label htmlFor={"position" + index}>
                    as
                    <input
                      type="text"
                      value={experience.position}
                      id={"position" + index}
                      onChange={(e) => {
                        const updatedEducations = { ...user };
                        updatedEducations.experience[index].position =
                          e.target.value;
                        setUser(updatedEducations);
                      }}
                    />
                  </label>
                </label>
                <label htmlFor={"start" + index}>
                  Start Year
                  <input
                    type="Year"
                    id={"start" + index}
                    value={experience.start}
                    onChange={(e) => {
                      const updatedExperience = { ...user };
                      updatedExperience.experience[index].start =
                        e.target.value;
                      setUser(updatedExperience);
                    }}
                  />
                </label>
                <label htmlFor={"end" + index}>
                  End Year
                  <input
                    type="Year"
                    id={"end" + index}
                    value={experience.end}
                    onChange={(e) => {
                      const updatedExperience = { ...user };
                      updatedExperience.experience[index].end = e.target.value;
                      setUser(updatedExperience);
                    }}
                  />
                </label>
                <div className="remove">
                  <button
                    type="button"
                    id="remEdu"
                    onClick={(e) => removeExp(e, index)}
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
            <button id="addExp" type="button" onClick={(e) => addExp(e)}>
              Add Experience
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
