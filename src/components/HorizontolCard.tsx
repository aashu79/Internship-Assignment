import "./styles/styles.scss";
import image from "../assets/image.png";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface propType {
    data: {
        id: number;
    name: string;
    type: string;
    tag?: string;
    description: string;
    highlights: string | string[];
    rating: number;
    ratingText: string;
    
    }
 
}

const HorizontolCard = ({data}: propType) => {
  const [expanded, setExpanded] = useState(false);

  const highlights = [
    { num: 9.9, text: "Building Responsive" },
    { num: 8.9, text: "Docs" },
    { num: 9.1, text: "Why we love it Documentation Easy Use Out of Box" }
]

  return (
    <div className="card">


      {/* //image section */}
      <div className="image-container">
        {data?.tag && <p className="highlight"><FontAwesomeIcon icon={faTrophy} style={{marginRight: "8px"}}/>{data?.tag}</p>}
        
        <p className="numbering">{data?.id}</p>
        <img src={image} alt="" />
      </div>



      

      {/* //Information section */}
      <div className="info-container">
        <p>
          {/* *****name****** */}
          <span style={{ fontWeight: "bold", color: "black" }}>
            {" "}
            {data?.name} -{" "}
          </span>
          {data?.description}
        </p>



            {/* ------------highlight------------ */}

        <p style={{ fontWeight: "bold", color: "black" }}>Main Highlights</p>
        {Array.isArray(data?.highlights) ? (
          <div style={{marginTop: "10px",background: "#FEE8D6 ", padding: "10px", borderRadius: "10px"}}>
            <ul>
              {highlights?.map((item, index) => {
                return(
                    <div style={{display: "flex", gap: "5px", alignItems: "center"}}>
                    <p style={{display: "inline-block", padding: "6px", borderRadius: "6px", background: "#F0F8FF", color: "black"}}>{item.num}</p>
                    <li key={index} style={{listStyle: "none", fontWeight: "light", marginTop: "5px"}}>{item.text}</li>
                    </div>
                );
              })}
            </ul>
          </div>
        ) : (
          <>
            <p
              className={!expanded ? "highlights-text" : "expanded-highlights"}
            >
              [what you get]- Get the WixPro website builder suite, granting you
              access to premium design templates, an extensive library of
              widgets and apps, and detailed step-by-step guides, all designed
              to help you create professional websites and online stores with
              ease.
            </p>
            <p
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              {!expanded ? "Show More" : "Show Less"}
            </p>
          </>
        )}
      </div>

      {/* //rating section */}
      <div className="rating-section">
        <div className="rating">
          <FontAwesomeIcon icon={faCircleInfo} className="info-icon" />
          <p style={{ fontSize: "30px" }}>{data?.rating}</p>
          <p>{data?.ratingText}</p>
          <StarRating rating={data?.rating} />
        </div>
        <button>View</button>
      </div>
    </div>
  );
};

export default HorizontolCard;
