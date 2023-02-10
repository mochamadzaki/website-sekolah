import React from "react";
import Layout from "../components/Layout/Layout";

import {
  Box,
 
  Typography,
} from "@mui/material";


const Visimisi = () => {
  return (
    <Layout>
      
       <Box
        sx={{
          
       
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
      <h4 style={{marginTop:'50px',textAlign:'center'}}>Program Kerja Sekolah</h4>
     <ol style={{marginLeft:'150px',marginTop:'30px'}}>
        <li>Melaksanakan pengembangan KTSP, silabus dan RPP</li>
        <li>penyusunan perangkat administrasi pembelajaran, praktek kerja industri,MPLS kepramukaan LKS dan ekstrakulikuler</li>
        <li>Pengembangan SKL,penyusunan KKM dan sosialisasi ujian</li>
        <li>Kegiatan MKKS/K3S,MGMP dan workshop pengembangan sistem penilaian</li>
        <li>pemeliharaan lingkungan sekolah dan pembangunan fasilitas mck</li>
        <li>penyusun RKS,RKAS/RAPBB,PPDB dan penelusuran tamatan</li>
        <li>Pembayaran honorarium guru,pemberian penghargaan kepada guru berprestasi dan pembuatan laporan keuangan</li>
        <li>PAT,US dan  AKM</li>
        <li>Menjadikan sekolah “Smart School”.</li>
     </ol>
      <br/>
      <br/>
      <Typography variant="h6" style={{marginLeft:'100px',marginRight:'100px',textAlign:'center'}}>Konsep Dasar Smart School</Typography>
      <Typography style={{marginLeft:'100px',marginRight:'100px',textAlign:'left'}}>Sekolah pintar atau smart school merupakan suatu konsep sekolah yang berbasis teknologi yang digunakan dalam proses belajar-mengajar di kelas. Penggunaan teknologi pendidikan mencakup suatu sistem terintegrasi yang membantu komunitas pendidikan dalam menjalankan fungsinya masing-masing dengan tujuan mengembangkan potensi peserta didik.
Pada dasarnya, penggunaan teknologi dalam bidang pendidikan adalah untuk membantu proses belajar dan meningkatkan kinerja dengan membuat, menggunakan, dan mengelola proses dan sumber teknologi yang memadai.
Sedangkan tujuan utama teknologi dalam pembelajaran adalah <br/>
(1) untuk memecahkan masalah belajar atau memfasilitasi pembelajaran; dan<br/>
(2) untuk meningkatkan kinerja. Penggunaan teknologi berbasis internet dalam bidang pendidikan ini membantu interaksi antara komunitas sekolah, siswa dan guru misalnya semakin lebih mudah.
       </Typography> </div>
        </Box>
       
    </Layout>
  );
};

export default Visimisi;
