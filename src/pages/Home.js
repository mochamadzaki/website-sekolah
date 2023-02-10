import React from "react";
import Layout from "../components/Layout/Layout";
import gedung from "../images/gedung.jpg";
import "../styles/HomeStyles.css";
import paasep from "../images/paasep.jpg"
import icon from "../images/icon.jpg"
import rpl from "../images/rpl.jpg"
import tbsm from "../images/tbsm.png"
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
      <div className="home" style={{ backgroundImage: `url(${gedung})`}}>
        <div>
          <h3 style={{marginTop:'320px',color:'white'}}>SELAMAT DATANG DI WEBSITE</h3>
          <p style={{color:'white',textAlign:'center'}}>Smk Budaya Bangsa</p>
    </div>
        </div>
      
      
 
    <div className="page" style={{ display: "flex",paddingleft: "100px",height:'90vh',backgroundColor:'#E5CDA7' }}>
    <div style={{ paddingLeft: "60px" ,marginTop:'100px',paddingRight:'50'}}>
      <img src={paasep} alt={paasep.alt} style={{ width: "300px", height: "300px" ,paddingLeft:'50px',paddingTop:'50px' }}></img>
        <h1 variant="h6" style={{paddingLeft:'50px',fontSize:'20px'}}>Ir.Asep Ali Basah S.Pd,M.M</h1>
        <p style={{paddingLeft:'40px',textAlign:'center'}}>
        Kepala Sekolah <br/> Smk Budaya Bangsa</p>
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


<h1 style={{textAlign:'center',height:'10vh',paddingTop:'2vh'}}>Program Studi</h1>
    <div className="page" style={{ display: "flex",paddingleft: "50px",height:'80vh',marginLeft:'200px'}}>
    <div style={{marginTop:'25px'}}>
      <img src={rpl} alt={paasep.alt} style={{ width: "150px", height: "170px" ,marginLeft:'50px',marginTop:'20px'}}></img>
        <h1 variant="h6" style={{fontSize:'20px',marginLeft:'10px',marginTop:'25px'}}>Rekayasa Perangkat Lunak</h1>
        <p style={{paddingLeft:'40px',marginLeft:'70px'}}>(RPL)
      </p>
       <h3 variant="h6" style={{textAlign:'Left'}}>satu bidang profesi yang mendalami<br/>  cara-cara
      pengembangan perangkat <br/>lunak termasuk pembuatan, 
       pemeliharaan,<br/> manajemen organisasi pengembangan 
       perangkat <br/>lunak dan manajemen kualitas.</h3>
      </div>
      
      <div style={{marginTop:'25px',marginLeft:'200px'}}>
      <img src={tbsm} alt={paasep.alt} style={{ width: "150px", height: "170px",marginTop:'20px',marginLeft:'50px'}}></img>
        <h1 variant="h6" style={{fontSize:'20px',marginTop:'15px'}}>Teknik & Bisnis Sepeda Motor</h1>
        <p style={{paddingLeft:'40px',marginLeft:'70px'}}>
       (TBSM)</p>
      <h3 variant="h6" style={{textAlign:'Left'}}>salah satu cabang ilmu teknik mesin<br/> yang mempelajari tentang bagaimana<br/> merancang, membuat dan mengembangkan<br/> alat-alat transportasi darat yang menggunakan<br/> mesin, terutama sepeda motor.</h3>
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
