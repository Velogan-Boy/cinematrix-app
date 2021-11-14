import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import Subheads from '../components/UI/Subheads';
import MainCarousel from '../components/MainCarousel';
import CarouselButton from '../components/UI/CarouselButton';
import MainFooter from '../components/MainFooter';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';

export default function Home() {
   const [state, setState] = useState({ loading: true, data: [] });

   useEffect(() => {
      (async function () {
         try {
            const response = await axios.get(
               'https://cinematrix-backend.herokuapp.com/api/v1/movies'
            );
            setState({ loading: false, data: response.data.data });
         } catch (error) {
            console.error(error);
         }
      })();
   }, []);

   return (
      <React.Fragment>
         <HeroCarousel />
         <Subheads>Now Showing</Subheads>
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            {state.loading && <CircularProgress color="secondary" />}
         </Box>
         <MainCarousel data={state.data} label="nowShowing" />
         <Box mb={6}>&nbsp;</Box>
         <MainCarousel data={state.data.slice().reverse()} label="nowShowing" />
         <CarouselButton>{'View All >'}</CarouselButton>
         <Subheads>Opening next week</Subheads>

         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            {state.loading && <CircularProgress color="secondary" />}
         </Box>
         <MainCarousel data={state.data} label="openingNextWeek" />
         <CarouselButton>{'View All >'}</CarouselButton>
         <Subheads>Coming Soon</Subheads>
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            {state.loading && <CircularProgress color="secondary" />}
         </Box>
         <MainCarousel data={state.data} label="comingSoon" />
         <CarouselButton style={{ marginBottom: '10rem' }}>
            {'View All >'}
         </CarouselButton>
         <MainFooter />
      </React.Fragment>
   );
}
