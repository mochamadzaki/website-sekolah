import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import lapang from "../images/lapang.jpeg"


const Profile = () => {
  return (
    <Layout>
      <Box
        sx={{
          
          "& h4": {
            fontWeight: "bold",
            fontSize: "2rem",
            color: 'white'
          },
          "& h6":{
            color: 'white'
          },
          "& p": {
            textAlign: "justify",
            color: 'white'
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <div className="home" style={{ backgroundImage: `url(${lapang})`}}>
        <Typography variant="h4" style={{textAlign:'center'}}>Sejarah Singkat</Typography>
        <Typography variant="h6"style={{textAlign:'center',marginTop:'1px',}}>Smk Budaya Bangsa</Typography>
        <br/>
        <p style={{textAlign: 'center', marginLeft: '100px',marginRight:'100px'}}>
        Menurut Surat ijin operasional,Sekolah ini berdiri pada tahun 2004.
        namun tidak banyak orang tau bahwa sekolah ini berdiri sejak 1997.
        Mendapat  Akreditasi Sekolah “A”,berdasarkan sertifikat 763/BAN-SM/SK/2019.
        </p>
        </div>
      </Box>
    </Layout>
  );
};

export default Profile;
