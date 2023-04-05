import { Grid, Box, Typography } from '@mui/material';
import React from 'react';
import cardtop from '../Asset/asset2/fjherh.jpg';
import SideBar from './SideBar';
import HeroBar from './HeroBar';
import MainContentMiddle from './Main Content/MainContentMiddle';
import MainContentLeft from './Main Content/MainContentLeft';
import MainContentRight from './Main Content/MainContentRight';
import ICONS from '../Asset/Icons';
import Footer from './Footer';
const TopCard = () => {
  return (
    <Grid container>
      <Grid item>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <SideBar />
          </Box>
          <Box position={'relative'}>
            <img
              className="cardtop"
              src={cardtop}
              alt="cardtop"
              width={'100%'}
            />
            <Box position={'absolute'} className="posihead">
              <Typography fontSize={'2.5rem'} fontWeight={'700'} color={'#fff'}>
                Hello Devs !
              </Typography>
              <Typography
                color={'#fff'}
                fontWeight={'400'}
                fontSize={'1.25rem'}
              >
                We are on a mission to help developers like you to build
                beautiful projects for free.
              </Typography>
            </Box>
            <Box
              className="posibtn"
              position={'absolute'}
              display={'flex'}
              gap={'1.6rem'}
              py={'0.5rem'}
              px={'1.5rem'}
              bgcolor={'rgba(58, 87, 232, 0.35)'}
            >
              <img className="mike" src={ICONS.mike} alt="mike" />{' '}
              <Typography color={'#fff'} fontSize={'1rem'}>
                Announcements
              </Typography>
            </Box>
            <Box sx={{ width: '96%', mx: 'auto' }}>
              <HeroBar />
            </Box>
            <Box
              sx={{
                mx: '1.5rem',
              }}
            >
              <Grid display={'flex'} sx={{ gap: '1.5rem' }}>
                <Grid sm={3} item>
                  <MainContentLeft />
                </Grid>
                <Grid sm={6} item>
                  <MainContentMiddle />
                </Grid>
                <Grid sm={3} item>
                  <MainContentRight />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default TopCard;
