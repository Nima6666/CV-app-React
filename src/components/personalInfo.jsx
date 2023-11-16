export default function PersonaInfo({ user, setUser }) {
  const personalInfo = user.personalInfo;

  function clearForm(e) {
    e.preventDefault();
    setUser({
      personalInfo: {
        firstName: "",
        lastName: "",
        address: "",
        contact: "",
        email: "",
        description: "",
      },
      education: [],
      experience: [],
    });
  }

  return (
    <>
      <form id="personalInfo">
        <h2>Personal Info</h2>
        <div>
          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              id="firstName"
              value={personalInfo.firstName}
              maxLength={20}
              onChange={(e) => {
                const updatedPerInf = { ...user };
                updatedPerInf.personalInfo.firstName = e.target.value;
                setUser(updatedPerInf);
              }}
            />
          </label>
          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              id="lastName"
              value={personalInfo.lastName}
              max={20}
              onChange={(e) => {
                const updatedPerInf = { ...user };
                updatedPerInf.personalInfo.lastName = e.target.value;
                setUser(updatedPerInf);
              }}
            />
          </label>
          <label htmlFor="address">
            Address
            <input
              type="text"
              id="address"
              value={personalInfo.address}
              autoComplete="on"
              maxLength={50}
              onChange={(e) => {
                const updatedPerInf = { ...user };
                updatedPerInf.personalInfo.address = e.target.value;
                setUser(updatedPerInf);
              }}
            />
          </label>
          <label htmlFor="contact">
            Phone No
            <input
              type="tel"
              id="contact"
              value={personalInfo.contact}
              maxLength={20}
              onChange={(e) => {
                const updatedPerInf = { ...user };
                updatedPerInf.personalInfo.contact = e.target.value;
                setUser(updatedPerInf);
              }}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              value={personalInfo.email}
              autoComplete="on"
              maxLength={35}
              onChange={(e) => {
                const updatedPerInf = { ...user };
                updatedPerInf.personalInfo.email = e.target.value;
                setUser(updatedPerInf);
              }}
            />
          </label>
        </div>
        <label htmlFor="description">
          About Me
          <textarea
            type="text"
            id="description"
            value={personalInfo.description}
            maxLength="400"
            onChange={(e) => {
              const updatedPerInf = { ...user };
              updatedPerInf.personalInfo.description = e.target.value;
              setUser(updatedPerInf);
            }}
          />
        </label>
        <button
          type="button"
          id="clearForm"
          onClick={(e) => {
            clearForm(e);
          }}
        >
          Clear Form
        </button>
      </form>
    </>
  );
}
