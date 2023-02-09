import React from "react";
import Layout from "../components/Layout/Layout";
import gedung from "../images/gedung.jpg";
import "../styles/HomeStyles.css";
import paasep from "../images/paasep.jpg"
import icon from "../images/icon.jpg"
import rpl from "../images/rpl.jpg"
import {Box, Icon, Typography} from '@mui/material'

function ImageWithCaption(props) {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
      <p>{props.caption}</p>
    </div>
  );
}
const Home = () => {
  return (  
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${gedung})`,opacity:'0.5'}}>
          <h3 style={{zIndex:'1'}}>SELAMA DATANG DI WEBSITE</h3>
          <p>Smk Budaya Bangsa</p>
    
        </div>
      
      
 
    <div className="page" style={{ display: "flex",paddingleft: "100px",height:'90vh' }}>
    <div style={{ paddingLeft: "60px" ,marginTop:'100px',paddingRight:'50'}}>
      <img src={paasep} alt={paasep.alt} style={{ width: "300px", height: "300px" ,paddingLeft:'50px',paddingTop:'50px' }}></img>
        <h1 variant="h6" style={{paddingLeft:'90px',fontSize:'20px'}}>Ir.Asep Ali Basah</h1>
        <p style={{paddingLeft:'40px'}}>
        Kepala Sekolah Smk Budaya Bangsa</p>
      </div>
      
      <div style={{ paddingLeft: "70px" ,marginTop:'50px',paddingRight:'50',marginRight:'50px'}}>
        <h1 variant="h4" style={{textAlign:'center'}}>Sambutan Kepala Sekolah</h1>
        <p style={{fontSize:'20px',paddingTop:'20px'}}>
        Assalamu'alaikum wr.wb.</p>
        <p style={{fontSize:'20px'}}>
Puji syukur kepada Alloh SWT, Tuhan Yang Maha Esa yang telah memberikan rahmat dan anugerahNya sehingga website SMK Budaya Bangsa dapat terbit. Salah satu tujuan dari website ini adalah untuk menjawab akan setiap kebutuhan informasi dengan memanfaatkan sarana teknologi informasi yang ada.  Dalam rangka memajukan pendidikan di era berkembangnya Teknologi Informasi yang begitu pesat, sangat diperlukan berbagai sarana prasarana yang kondusif, kebutuhan berbagai informasi siswa, guru, orangtua maupun masyarakat, sehingga kami berusaha mewujudkan hal tersebut semaksimal mungkin. Semoga dengan adanya website ini dapat membantu dan bermanfaat, terutama informasi yang berhubungan dengan pendidikan, ilmu pengetahuan dan informasi seputar SMK Budaya Bangsa.
Besar harapan kami, sarana ini dapat memberi manfaat bagi semua pihak yang ada dilingkup pendidikan dan pemerhati pendidikan secara khusus bagi SMK Budaya Bangsa.
Akhirnya kami mengharapkan masukan dari berbagai pihak untuk website ini agar kami terus belajar dan meng-update diri, sehingga tampilan, isi dan mutu website akan terus berkembang dan lebih baik nantinya. Terima kasih atas kerjasamanya, maju terus untuk mencapai yang lebih baik lagi.
</p>
<p style={{fontSize:'20px'}}>Wassalamu'alaikum wr.wb.
        </p>
      </div>
    </div>
<h1 style={{textAlign:'center',height:'10vh',marginTop:'5vh'}}>Program Studi</h1>
    <div className="page" style={{ display: "flex",paddingleft: "100px",height:'80vh'}}>
    <div style={{ paddingLeft: "70px" ,marginTop:'25px',paddingRight:'50'}}>
      <img src={icon} alt={paasep.alt} style={{ width: "150px", height: "150px" ,paddingLeft:'50px',paddingTop:'50px' }}></img>
        <h1 variant="h6" style={{paddingLeft:'90px',fontSize:'20px',}}>Ir.Asep Ali Basah</h1>
        <p style={{paddingLeft:'40px'}}>
        Kepala Sekolah Smk Budaya Bangsa</p>
      </div>
      
      <div style={{ paddingLeft: "70px" ,marginTop:'25px',paddingRight:'50'}}>
      <img src={rpl} alt={paasep.alt} style={{ width: "150px", height: "150px" ,paddingLeft:'50px',paddingTop:'50px' }}></img>
        <h1 variant="h6" style={{paddingLeft:'90px',fontSize:'20px',}}>Ir.Asep Ali Basah</h1>
        <p style={{paddingLeft:'40px'}}>
        Kepala Sekolah Smk Budaya Bangsa</p>
      </div>
    </div>
    {/* <>
      <Box> */}
   {/* <Typography
          variant="h5"
          sx={{textAlign: "center",
            "@media (max-width:200px)": {
              fontSize: "1rem",bgcolor: "black",height:'10vh'
            },
          }}
        >
          Program Studi
        </Typography>
     </Box>
     <div className="prodi">
      <img src="" alt=""/>
      <h2></h2>
      <p></p>

      <img src="" alt=""/>
      <h2></h2>
      <p></p>
     </div>
</>
<div className="pages" style={{ display: "flex",paddingleft: "100px",height:'80vh',backgroundColor:'grey' }}>
      <img src={icon} alt={icon.alt} style={{ width: "350px", height: "350px" ,paddingLeft:'50px',paddingTop:'150px' }}></img>
        <p>
        Assalamu'alaikum wr.wb.</p>
        <p>
Puji syukur kepada Alloh SWT, Tuhan Yang Maha Esa yang telah memberikan rahmat dan anugerahNya sehingga website SMK Budaya Bangsa dapat terbit. Salah satu tujuan dari website ini adalah untuk menjawab akan setiap kebutuhan informasi dengan memanfaatkan sarana teknologi informasi yang ada.  Dalam rangka memajukan pendidikan di era berkembangnya Teknologi Informasi yang begitu pesat, sangat diperlukan berbagai sarana prasarana yang kondusif, kebutuhan berbagai informasi siswa, guru, orangtua maupun masyarakat, sehingga kami berusaha mewujudkan hal tersebut semaksimal mungkin. Semoga dengan adanya website ini dapat membantu dan bermanfaat, terutama informasi yang berhubungan dengan pendidikan, ilmu pengetahuan dan informasi seputar SMK Budaya Bangsa.
Besar harapan kami, sarana ini dapat memberi manfaat bagi semua pihak yang ada dilingkup pendidikan dan pemerhati pendidikan secara khusus bagi SMK Budaya Bangsa.
Akhirnya kami mengharapkan masukan dari berbagai pihak untuk website ini agar kami terus belajar dan meng-update diri, sehingga tampilan, isi dan mutu website akan terus berkembang dan lebih baik nantinya. Terima kasih atas kerjasamanya, maju terus untuk mencapai yang lebih baik lagi.
Wassalamu'alaikum wr.wb.
        </p>
      </div> */}
    


    </Layout>
  );
};

export default Home;
