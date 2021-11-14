import Carousel from 'react-bootstrap/Carousel';
import { makeStyles } from '@mui/styles';

import img1 from '../assets/slide1-img.jpg';
import img2 from '../assets/slide2-img.jpg';
import img3 from '../assets/slide3-img.jpg';
import img4 from '../assets/slide4-img.jpg';

const useStyles = makeStyles({
   img: {
      height: '80vh',
      '@media(max-width:600px)': {
         height: '35vh',
      },
   },
});

function HeroCarousel() {
   const classes = useStyles();

   return (
      <Carousel fade>
         <Carousel.Item>
            <img
               className={`d-block w-100 ${classes.img}`}
               src={img1}
               alt="First slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
               className={`d-block w-100 ${classes.img}`}
               src={img2}
               alt="Second slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
               className={`d-block w-100 ${classes.img}`}
               src={img3}
               alt="Third slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
               className={`d-block w-100 ${classes.img}`}
               src={img4}
               alt="Fourth slide"
            />
         </Carousel.Item>
      </Carousel>
   );
}

export default HeroCarousel;
