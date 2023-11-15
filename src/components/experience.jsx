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
    console.log(index);
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
              <div className={experience.company} key={index}>
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
                  <button id="remEdu" onClick={(e) => removeExp(e, index)}>
                    remove
                  </button>
                </div>
              </div>
            );
          })}
        </form>
      </div>
    </>
  );
}
