import NavBar from "./navbar";

const FullStack = () => {
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
        <h1 style={{ margin: "32px" }}>Full Stack Development</h1>
        <p style={{ margin: "32px", width: "400px"}}>
          Are you a curious geek with an unstoppable urge to develop? Then, your
          Full Stack Development knack would be sun-glazed with an innovative
          and informative piece of knowledge that comes from Top industrialists
          and Appreneurs!
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

export default FullStack;
