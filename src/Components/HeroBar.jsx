import { Paper, Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BeardedGuy from '../Asset/asset2/Beared Guy02-min 1.png';

const HeroBar = () => {
  return (
    <>
      <Paper className="papertop" elevation={0} sx={{ borderRadius: '8px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <Box sx={{ ml: '2rem' }}>
              <img className="guy-profile" src={BeardedGuy} alt="justaguy" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <p className="prf-name ">Austin Robertson</p>
              <p className="prm-grey wbdsgnr"> &#8212; Web Designer</p>
            </Box>
          </Box>
          <Box sx={{ gap: '10px', display: 'flex', pr: '1rem' }}>
            <Link underline="none" className=" shr active " href="#">
              Feed
            </Link>
            <Link underline="none" className=" shr pill-link " href="#">
              Activity
            </Link>
            <Link underline="none" className=" shr pill-link " href="#">
              Friends
            </Link>
            <Link underline="none" className=" shr pill-link " href="#">
              Profile
            </Link>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default HeroBar;
