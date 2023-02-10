import * as React from 'react';
import Layout from "../components/Layout/Layout"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ldks from "../images/ldks.jpg"
import napak from "../images/napak.jpg"
import s from "../images/s.jpeg"
import PersonIcon from '@mui/icons-material/Person';
import { CardHeader,CardBody,CardTitle,CardText,CardFooter } from 'reactstrap';

function Artikel() {
  return (
    <Layout>
      <div style={{backgroundColor:'grey',height:'100%',}} >
    <Card sx={{height:'50vh',textAlign:'center',marginLeft:'370px',width:'600px'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={ldks}
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Latihan Dasar kepemimpinan siswa
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Latihan Dasar Kepemimpinan Siswa adalah kegiatan yang biasa dilakukan untuk peserta didik baru
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://smkbudayabangsaa.blogspot.com/2023/01/latihan-dasar-kepemimpinan-siswa.html"
         style={{marginLeft:'210px'}}>Selengkapnya</Button>
      </CardActions>
      
      <Typography  variant="body2" color="text.secondary" style={{textAlign:'left'}}>13 januari 2023</Typography>
    </Card>
    <Card sx={{height:'50vh',textAlign:'center',marginLeft:'370px' ,marginTop:'20px',width:'600px'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={s}
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Juara 3 Lomba robotic Kota Bandung
        </Typography>
        <Typography variant="body2" color="text.secondary">
        M.Daffa Raihan adalah salah satu peserta lomba lks kota bandung...
        </Typography>
      </CardContent>
      <CardActions>
      <Button href="https://smkbudayabangsaa.blogspot.com/2023/01/latihan-dasar-kepemimpinan-siswa.html"
         style={{marginLeft:'210px'}}>Selengkapnya</Button>
      </CardActions>
      <Typography  variant="body2" color="text.secondary" style={{textAlign:'left'}}>13 januari 2023</Typography>
    </Card>


    <Card sx={{height:'50vh',textAlign:'center',marginLeft:'370px' ,marginTop:'20px',width:'600px'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={napak}
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Napak Tilas Gn.Puntang
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Kegiatan ini adalah agenda dari ekstrakulikuler SISPALA
        </Typography>
      </CardContent>
      <CardActions>
         <Button href="https://smkbudayabangsaa.blogspot.com/2023/01/latihan-dasar-kepemimpinan-siswa.html"
         style={{marginLeft:'210px'}}>Selengkapnya</Button>
      </CardActions>
      <Typography  variant="body2" color="text.secondary" style={{textAlign:'left'}}>13 januari 2023</Typography>
    </Card>
    </div>
    </Layout>
  );
}
export default Artikel;