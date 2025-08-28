import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assests/KLOSET.png";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box,
} from "@mui/material"; // Material-UI for dialog box
import axios from "axios";
import { useDispatch } from "react-redux";
import { searchItems } from "../../Storage/Search/SearchAction";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ProductList from "../Body/Productlist";

const API_BASE_URL = "http://localhost:2000";

function Navbar() {
  const [searchResults, setSearchResults] = useState([]);
  const [sQuery, setSearchQuery] = useState("");
  const [openDialog, setOpenDialog] = useState(false); // To control dialog visibility
  const [dialogMessage, setDialogMessage] = useState(""); // To store the message for the dialog
  const dispatch = useDispatch();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1050,
    bgcolor: 'background.paper',

    boxShadow: 24,
    borderRadius:2,
    p: 10,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  // Prevent page reload on form submission
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    if (sQuery.trim() === "") {
      setDialogMessage("Please enter a search query.");
      setOpenDialog(true); // Open the dialog box if no query is entered
      return; // Exit the function early
    }

    const searchQuery = {
      searchQuery: sQuery, // Wrap search query in an object
    };

    try {
      // Dispatch the Redux action and get the results
      const response =  await dispatch(searchItems(searchQuery));

      if (response && response.length > 0) {
        setSearchResults(response); // Update the results state

      } else {
        setSearchResults([]); // No results found, clear any previous results
      
      }
    } catch (error) {
      alert("Something went wrong with the search. Please try again.")
      console.error("Search error:", error);
    }
    
    setOpen(true)
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event); // Trigger the search on 'Enter' key press
    }
  };

  return (
    <div className="container px-16 mx-auto">
      <nav className="flex items-center justify-between py-4 navbar">
        {/* Logo */}
        <Link to={"/*"}>
          <div className="w-32 h-32 mr-5">
            <img src={logo} alt="Logo" />
          </div>
        </Link>

        {/* Search Box */}
        <div className="relative flex-grow max-w-[60rem]">
          <input
            type="text"
            placeholder="What are you looking for"
            className="font-sans w-full py-2 pl-10 pr-4 border-gray-300 rounded-full bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={sQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
            onKeyDown={handleKeyPress} // Trigger search on Enter key press
          />

          {/* Search Icon */}
          <button onClick={handleSearch}>
            <div className="absolute text-gray-500 transform -translate-y-1/2 right-4 top-1/2 font-serif-">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Navbar Links */}
        <ul className="flex gap-8 p-4">
          <li>
            <Link to={"/Cartpage"}>
              <div className="font-semibold transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="transition-colors duration-300 size-6 hover:text-blue-500"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/CustomerProfile"}>
              <div className="font-semibold transition-colors duration-300 hover:text-blue-500">
                Profile
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/LoginPage"}>
              <div className="font-semibold transition-colors duration-300 hover:text-blue-500">
                Sign in
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Dialog box to display search results */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Search Results</DialogTitle>
        <DialogContent>
          <p>{dialogMessage}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

           {/* ✅ Bold and Large "Search Result for {sQuery}" */}
           <Typography 
            variant="h5" 
            fontWeight="bold" 
            gutterBottom
          >
            Search Result for "{sQuery}"
          </Typography>
         
        
            {searchResults?(
                <ProductList products={searchResults}/>
              
            ):(<p>No items found</p>)}
          
         
        </Box>
      </Modal>

    </div>
  );
}

export default Navbar;
