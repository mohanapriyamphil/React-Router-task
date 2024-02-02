import NavBar from "./navbar";

const Career = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          width: "100vw",
          height: "300px",
          backgroundColor: "#e8eaee",
          paddingTop: "20px",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "32px" }}>Tech Career Programs</h1>
        <p style={{ margin: "32px", width: "600px" }}>
          100% Job Placement Support. Mentors from Top Global Product companies.
          A Portfolio of Real-world Projects. Globally Recognized Certification.
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

export default Career;
