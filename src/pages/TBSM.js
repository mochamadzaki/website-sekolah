import React from "react";
import Layout from "../components/Layout/Layout";
import codingg from "../images/codingg.jpg"
import {Box,Typography} from "@mui/material";
import tbsm from "../images/tbsm.png"

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
       <img src={tbsm} style={{ width: "150px", height: "170px",my: 2, marginTop:'50px'}}/>
      <Typography variant="h4">Teknik dan Bisnis Sepeda Motor</Typography>
      <Typography variant="h4" style={{paddingTop:'5px'}}>(TBSM)</Typography>

        <Typography variant="h6" style={{marginLeft:'100px',marginRight:'100px',textAlign:'left'}}>Teknik dan Bisnis Sepeda Motor adalah kompetensi keahlian pada Bidang Studi Keahlian Teknologi dan Rekayasa Program Studi Keahlian Teknik Otomotif yang menekankan pada keterampilan pelayanan jasa mekanik kendaraan sepeda motor roda dua. Kompetensi Keahlian Teknik dan Bisnis Sepeda Motor menyiapkan peserta didik untuk bekerja pada bidang pekerjaan yang dikelola oleh badan, instansi atau perusahaan maupun pribadi (wirausaha).</Typography>
      
        </div>
        </Box>
       
    </Layout>
  );
};

export default RPL;
