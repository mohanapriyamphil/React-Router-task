import NavBar from "./navbar";
const DataScience = () => {
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
        <h1 style={{ margin: "32px" }}>Data Science</h1>
        <p style={{ margin: "32px", width: "600px" }}>
          One of the most propelling careers on the planet today, Data Science
          is a vast arena of diverse technologies and techniques. Are you ready
          to step into the world of Data? Then you probably should not miss this
          corner of articles that is an assorted curation out of tedious
          research & exploration.
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

export default DataScience;
