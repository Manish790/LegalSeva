import React, { useState } from "react";
import data from "./data.json";
import "./location.css";
function Location() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);

  // Define a function to handle state selection
  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);

    // Find the selected state in the data
    const selectedStateData = data.states.find(
      (state) => state.state === newState
    );

    // Set the districts for the selected state
    if (selectedStateData) {
      setDistricts(selectedStateData.districts || []);
    } else {
      setDistricts([]);
    }
  };

  // Define a function to handle district selection
  const handleDistrictChange = (event) => {
    const newDistrict = event.target.value;
    setSelectedDistrict(newDistrict);
  };

  return (
    <div className="location-container">
      <form action="" className="location-form-container">
        <div className="label-select1">
        
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">-- Select a State --</option>
            {data.states.map((stateData) => (
              <option key={stateData.state} value={stateData.state}>
                {stateData.state}
              </option>
            ))}
          </select>
        </div>
        <div className="label-select2">
         
          <select value={selectedDistrict} onChange={handleDistrictChange}>
            <option value="">-- Select a District --</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default Location;
