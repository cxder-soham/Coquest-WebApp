import React, { useState } from "react";
import "./Description.css";

function CommunityDescriptionPrograms({ data }: { data: any }) {
  // Navigation Button Variable
  const [programSection, setProgramSection] = useState("open-programs");

  return (
    <>
      <div className="search-container">
        <input
          type="search"
          className="search"
          name="search"
          placeholder="Search Nearby"
        />
        <img
          src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png"
          alt="search-icon"
          className="search-icon"
        />
      </div>
      <div className="quest-button-container">
        <button
          className={`quest-button-heading quest-button-design ${
            programSection === "my-programs" ? "selected" : ""
          }`}
          onClick={() => setProgramSection("my-programs")}
        >
          My Programs
        </button>
        <button
          className={`quest-button-heading quest-button-design ${
            programSection === "open-programs" ? "selected" : ""
          }`}
          onClick={() => setProgramSection("open-programs")}
        >
          Open Programs
        </button>
        <button
          className={`quest-button-heading quest-button-design ${
            programSection === "completed-programs" ? "selected" : ""
          }`}
          onClick={() => setProgramSection("completed-programs")}
        >
          Completed Programs
        </button>
      </div>
      <div className="project-container margin-top">
        <div className="project-background">
          <p className="project-heading">Program Name</p>
          <p className="project-sub-heading">Program Sub-Heading</p>
          <p className="project-sub-heading">Location: N/A</p>
          <p className="project-text">Placeholder Description.</p>
          <button>
            <img src="/icons/expand-button-chevron.png" alt="expand-button" />
          </button>
        </div>
      </div>
    </>
  );
}

export default CommunityDescriptionPrograms;