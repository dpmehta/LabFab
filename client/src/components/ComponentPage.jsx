import "../styles/componentPage.css";
import NavBar from "./NavBar";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Import Firestore methods

const ComponentPage = () => {
  const { id } = useParams();
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [cardDetails, setCardDetails] = useState(null); // State to store card details
  const db = getFirestore(); // Initialize Firestore

  useEffect(() => {
    // Function to fetch card details from Firestore
    const fetchCardDetails = async () => {
      try {
        const docRef = doc(db, "resource-details", id); // Reference to the document with the provided ID
        const docSnap = await getDoc(docRef); // Get the document snapshot
        if (docSnap.exists()) {
          setCardDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching card details:", error);
      }
    };

    fetchCardDetails(); // Call the fetchCardDetails function
  }, [db, id]);

  if (!cardDetails) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }

  // Render the card details once fetched
  return (
    <>
      <NavBar />
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 className="dark-color">{cardDetails.name}</h3>
                <p>{cardDetails.description}</p>
                <div className="mt-3">
                  <span className="field dark-color"> Location : </span>
                  <span className="value">{cardDetails.location}</span>
                </div>
                <div className="mt-3">
                  <span className="field dark-color"> Timing : </span>
                  <span className="value">{cardDetails.timing}</span>
                </div>
              </div>
              <Link
                to={`/component-issue?componentName=${encodeURIComponent(
                  cardDetails.name
                )}`}
              >
                <button
                  type="button"
                  style={{
                    backgroundColor: "#14a2b9",
                    width: "40%",
                    marginRight: "4px",
                  }}
                >
                  Issue this Component
                </button>
              </Link>
              <a
                href={cardDetails["video-link"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  style={{ backgroundColor: "#14a2b9", width: "30%" }}
                >
                  Watch Video
                </button>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="about-avatar">
                <img
                  src={"/" + cardDetails.imagePath}
                  title="avatar"
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComponentPage;