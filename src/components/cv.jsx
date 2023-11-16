import address from "../assets/address.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
function Cv({ user, image }) {
  return (
    <>
      <div className="topSection">
        <div className="namePhoto">
          <h1>{`${user.personalInfo.firstName} ${user.personalInfo.lastName}`}</h1>
        </div>
        <div className="info">
          <div>
            <img src={address} alt="" />
            <h4>{user.personalInfo.address}</h4>
          </div>
          <div>
            <img src={mail} alt="" />
            <h4>{user.personalInfo.email}</h4>
          </div>
          <div>
            <img src={phone} alt="" />
            <h4>{user.personalInfo.contact}</h4>
          </div>
        </div>
      </div>
      <div className="bottomSection">
        <div className="edu">
          <h3>Education</h3>
          {user.education.map((edu, index) => {
            return (
              <div key={index}>
                <h4>
                  {edu.start} - {edu.end}
                </h4>
                <div className="college">
                  <h4>{edu.college}</h4>
                  <div>{edu.faculty}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="exp">
          <h3>Experience</h3>
          {user.experience.map((exp, index) => {
            return (
              <div key={index}>
                <h4>
                  {exp.start} - {exp.end}
                </h4>
                <div className="company">
                  <h4>{exp.company}</h4>
                  <div>{exp.position}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="desc">
          <h4>About Me</h4>
          {user.personalInfo.description}
        </div>
      </div>
    </>
  );
}

export default Cv;
