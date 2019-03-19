import React from "react";

const Source = props => {
  return !props.sources ? (
    <p className="loading-text">Loading...</p>
  ) : (
    props.sources.map(source => {
      return (
        <div>
          <input
            className="selectSourceButton form-check-input"
            key={source.name}
            type="checkbox"
            id={source.name}
            onClick={() => props.addSource(source)}
            // disabled={props.status}
            // onClick={handleClick}
          />
          <label className="form-check-label">{source.name}</label>
        </div>
      );
    })
  );
};

export default Source;
