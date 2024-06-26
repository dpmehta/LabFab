import { useState, useEffect } from "react";
import "../styles/HomeMain.css";
import DropDown from "./DropDown";
import NavBar from "./NavBar";
import Homecard from "./Homecard";
import "../firebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import Loader from "./Loader";

export default function HomeMain() {
  const [firstDropdownValue, setFirstDropdownValue] = useState(null);
  const [secondDropdownValue, setSecondDropdownValue] = useState(null);
  const [secondDropdownOptions, setSecondDropdownOptions] = useState([]);
  const [isSearchInputDisabled, setIsSearchInputDisabled] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const db = getFirestore();
  const [storedValues, setStoredValues] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDataFromFirestore = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "resource-details"));
      const tmparray = [];
      querySnapshot.forEach((doc) => {
        // Include the ID along with other document data
        tmparray.push({ id: doc.id, ...doc.data() });
      });
      setStoredValues(tmparray);
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromFirestore();
  }, []);

  // Options for the first dropdown
  const firstDropdownOptions = [
    { label: "Name" },
    { label: "location" },
    { label: "Faculty" },
    { label: "Lab-Name" },
    { label: "Department" },
  ];

  // Function to handle selection in the first dropdown
  const handleFirstDropdownChange = (selectedOption) => {
    setFirstDropdownValue(selectedOption);

    setIsSearchInputDisabled(selectedOption.label !== "Name");

    switch (selectedOption.label) {
      case "location":
        setSecondDropdownOptions([
          { label: "All" },
          { label: "MA109" },
          { label: "MA103" },
          { label: "MA107" },
        ]);
        break;
      case "Faculty":
        setSecondDropdownOptions([
          { label: "All" },
          { label: "Faculty Of Technology" },
          { label: "Faculty Of Engineering" },
          { label: "Faculty Of Management" },
        ]);
        break;
      case "Department":
        setSecondDropdownOptions([
          { label: "All" },
          { label: "Information and Communication Technology" },
          { label: "Computer Engineering" },
          { label: "Information Technology" },
        ]);
        break;
      case "Lab-Name":
        setSecondDropdownOptions([
          { label: "All" },
          { label: "Microprocessor and Microcontroller Lab" },
          { label: "IOT and Com. Lab" },
          { label: "Web Development Lab" },
        ]);
        break;

      default:
        setSecondDropdownOptions([]);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);

    if (inputValue === "") {
      setStoredValues([]);
      fetchDataFromFirestore();
      return;
    }

    const filtered = storedValues.filter((storedValue) =>
      storedValue.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setStoredValues(filtered);
  };

  const handleSecondDropdownChange = (selectedOption) => {
    setSecondDropdownValue(selectedOption);
    setLoading(true);
    if (selectedOption.label === "All") {
      fetchDataFromFirestore();
    } else {
      const filtered = storedValues.filter((storedValue) =>
        storedValue[firstDropdownValue.label]
          .toLowerCase()
          .includes(selectedOption.label.toLowerCase())
      );
      setStoredValues(filtered);
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="main">
        <div className="main-content">
          <h1 className="LabFabh1">Lab Fab</h1>
          <h3 className="SearchResourceh3">Search Resources Here</h3>
          <div className="relative flex items-center">
            <input
              type="search"
              className="bg-white shadow rounded border-0 p-3 pr-10"
              placeholder={
                isSearchInputDisabled
                  ? " Please Select Name Filter to Search "
                  : " Search by Name ..."
              }
              disabled={isSearchInputDisabled}
              onChange={handleInputChange}
            />
            <svg
              version="1.1"
              className="h-4 text-dark absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer mr-3"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 52.966 52.966"
            >
              <path
                d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
      c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
      C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
      S32.459,40,21.983,40z"
              />
            </svg>
          </div>

          <div className="search-dropdown">
            {/* First Dropdown */}
            <DropDown
              label="Search Filter"
              options={firstDropdownOptions}
              onChange={handleFirstDropdownChange}
            />

            {/* Second Dropdown */}
            <DropDown
              label="Options"
              options={secondDropdownOptions}
              onChange={handleSecondDropdownChange}
            />
          </div>
        </div>
      </div>
      <h1 className="equipment-heading">
        {firstDropdownValue && secondDropdownValue
          ? `Search Results for ${firstDropdownValue.label} of ${secondDropdownValue.label}`
          : firstDropdownValue
          ? `Search Results for ${firstDropdownValue.label} of ${searchQuery}`
          : " All Equipments "}
      </h1>

      {loading ? <Loader /> : <Homecard dataValues={storedValues} />}
    </>
  );
}
