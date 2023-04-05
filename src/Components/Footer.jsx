import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import '../Style/userpage.css';

const Footer = () => {
  return (
    <Paper elevation={0}>
      <Box p={'0.5rem'} display={'flex'} justifyContent={'space-between'}>
        <Box display={'flex'} gap={'2rem'}>
          <Typography>Privacy Policy</Typography>
          <Typography>Terms of Use</Typography>
        </Box>
        <Typography>© 2021 Hope UI, Made with ❤️ by IQONIC Design.</Typography>
      </Box>
    </Paper>
  );
};

export default Footer;
