// import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";


// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import MailIcon from "@mui/icons-material/Mail";
// import CallIcon from "@mui/icons-material/Call";
// import {
//   Box,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
// } from "@mui/material";
// const Footer = () => {
//   return (
//     <>
//       <Box
//         sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
//       >
//         <Box
//           sx={{
//             my: 3,
//             "& svg": {
//               fontSize: "60px",
//               cursor: "pointer",
//               mr: 2,
//             },
//             "& svg:hover": {
//               color: "goldenrod",
//               transform: "translateX(5px)",
//               transition: "all 400ms",
//             },
//           }}
//         >
//           {/* icons */}
//           <InstagramIcon />
//           <TwitterIcon />
//           <GitHubIcon />
//           <YouTubeIcon />
//         </Box> 
//         </Box>
//         <Box>
//         <Typography
//           variant="h5"
//           sx={{textAlign: "center",
//             "@media (max-width:200px)": {
//               fontSize: "1rem",bgcolor: "white",
//             },
//           }}
//         >
//           All Rights Reserved &copy; Techinfo YT
//         </Typography>
//      </Box>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import "./Footer.css";
import {Box,Typography} from "@mui/material"
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
     <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
  
            "& svg": {
              height:'30px',
              fontSize: "40px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "#E5CDA7",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <a href="https://instagram.com/smkbb.official?igshid=NTdlMDg3MTY=" style={{color:'white'}}>
          <InstagramIcon /></a>
          <TwitterIcon />
          <GitHubIcon />
         <a href="https://youtube.com/@SMKBudayaBangsa" style={{color:'white'}}> <YouTubeIcon /></a>
        </Box> 
        </Box>
      <div className="container footer">
        
        <div className="footer-">
          <img src="skolah.png" alt="logo"  style={{width:'100px',height: '100px',marginLeft: '50px',marginTop:'30px'}}/>
          <p className="u-text-small" style={{marginLeft: '25px'}}>&copy; Smk Budaya Bangsa</p>
        </div>
  
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Jl. Cetarip Raya Barat BLK No. 16,Kopo,Kec. Bojongloa Kaler, Kota Bandung, Jawa Barat 17117.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: (022) 20560737
            </p>
            <p>
              <FaFax /> &nbsp; Fax: Senin - Jumat 07.00 s/d 15.00 wib 
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: smkbudayabangsa@yahoo.com
            </p>
           
          </div>
        </div>
      </div>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white",}}
      >
        <Box
        >
           <Typography
          variant="h5"
          sx={{textAlign: "center",
            "@media (max-width:200px)": {
              fontSize: "1rem",bgcolor:'white',
            },
          }}
        >
          All Rights Reserved &copy; Smk Budaya Bangsa
        </Typography>
        </Box> 
        </Box>
    </section>
  );
};

export default Footer;
