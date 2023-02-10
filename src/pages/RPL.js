import React from "react";
import Layout from "../components/Layout/Layout";
import codingg from "../images/codingg.jpg"
import {Box,Typography} from "@mui/material";
import rpl from "../images/rpl.jpg"

const RPL = () => {
  return (
    <Layout>
      
       <Box
        sx={{
          
          textAlign: "center",
          
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px,max-height:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <div style={{height: '90vh'}}>
       <img src={rpl} style={{ width: "150px", height: "170px",my: 2, marginTop:'50px'}}/>
      <Typography variant="h4">Rekayasa perangkat Lunak</Typography>
      <Typography variant="h4" style={{paddingTop:'5px'}}>(RPL)</Typography>

        <Typography variant="h6" style={{marginLeft:'100px',marginRight:'100px',textAlign:'left'}}>Program Keahlian Rekayasa Perangkat Lunak (RPL) adalah salah satu kompetensi keahlian dalam bidang Teknologi Komputer dan Informatika yang secara khusus mempelajari tentang pemrograman komputer.</Typography>
      
        </div>
        </Box>
       
    </Layout>
  );
};

export default RPL;
