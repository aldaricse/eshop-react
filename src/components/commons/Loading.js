import React from "react";

function Loading(){
  return(
    <div className="loading">
      <svg xmlns="http://www.w3.org/2000/svg" width="65" height="20" viewBox="0 0 65 20" stroke="#F86627" capture-installed="true">
        <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="1">
          <circle cx="3" cy="10" r="3" strokeOpacity="0">
          <animate id="so1" attributeName="stroke-opacity" begin="0s;so4.end" dur="1.1s" values="0;1;0"></animate>
          </circle>
          <circle cx="22" cy="10" r="3" strokeOpacity="0">
          <animate id="so2" attributeName="stroke-opacity" begin="so1.end - .9s" dur="1.1s" values="0;1;0"></animate>
          </circle>
          <circle cx="41" cy="10" r="3" strokeOpacity="0">
          <animate id="so3" attributeName="stroke-opacity" begin="so2.end - .9s" dur="1.1s" values="0;1;0"></animate>
          </circle>
          <circle cx="60" cy="10" r="3" strokeOpacity="0">
          <animate id="so4" attributeName="stroke-opacity" begin="so3.end - .9s" dur="1.1s" values="0;1;0"></animate>
          </circle>
        </g>
      </svg>
    </div>
  )
}

export default Loading;

