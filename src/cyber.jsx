import NavBar from "./navbar";
const CyberSecurity = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          width: "100vw",
          height: "300px",
          backgroundColor: "#e8eaee",
          paddingTop: "20px",
        }}
      >
        <h1 style={{ margin: "32px" }}>Cyber Security</h1>
        <p style={{ margin: "32px", width: "600px" }}>
          Learn what cybersecurity is and its potential impact to you.
          Understand the most common threats, attacks and vulnerabilities. Gain
          insights for how businesses protect their operations from attacks.
          Find the latest job trends and why cybersecurity continues to grow.
        </p>
        <p style={{ margin: "32px", width: "400px" }}>
          The GUVI Blog’s Full Stack Development category is here to help you
          steer through a lot of opinions that float on the internet.
          High-Quality content curated by experts!
        </p>
      </div>
    </>
  );
};

export default CyberSecurity;
