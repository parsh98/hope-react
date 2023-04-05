import React from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import '../../Style/userpage.css';
import ICONS from '../../Asset/Icons';

const MainContentRight = () => {
  return (
    <Stack>
      <Paper sx={{ borderRadius: '8px', mb: '2rem' }} elevation={0}>
        <Box py={'1.5rem'} px={'1rem'}>
          <Stack>
            <Typography
              sx={{
                fontSize: '23px',
                fontWeight: '500',
                lineHeight: '130%',
                color: '#212529',
                mb: '1rem',
              }}
              variant="h5"
            >
              About
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '175%',
                color: 'rgb(138, 146, 166)',
                mb: '0.5rem',
              }}
              variant="p"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dol amet
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '175%',
                color: 'rgb(138, 146, 166)',
                mb: '0.5rem',
              }}
              variant="p"
            >
              Email :
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '175%',
                  color: 'rgb(0, 72, 179)',
                }}
                variant="span"
              >
                {''} nikjone@demoo.com
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '175%',
                color: 'rgb(138, 146, 166)',
                mb: '0.5rem',
              }}
              variant="p"
            >
              Phone :
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '175%',
                  color: 'rgb(0, 72, 179)',
                }}
                variant="span"
              >
                {''} 001235125612
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '175%',
                color: 'rgb(138, 146, 166)',
                mb: '0.5rem',
              }}
              variant="p"
            >
              Location :
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '175%',
                  color: 'rgb(0, 72, 179)',
                }}
                variant="span"
              >
                {''} USA
              </Typography>
            </Typography>
          </Stack>
        </Box>
      </Paper>
      <Paper sx={{ borderRadius: '8px', mb: '2rem' }} elevation={0}>
        <Box py={'1.5rem'} px={'1rem'}>
          <Stack>
            <Typography
              sx={{
                fontSize: '23px',
                fontWeight: '500',
                lineHeight: '130%',
                color: '#212529',
                mb: '1.5rem',
              }}
              variant="h5"
            >
              Stories
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '2rem',
                mb: '1.5rem',
                alignItems: 'center',
              }}
            >
              <img className="logo-size" src={ICONS.icon5} alt="imgs" />
              <Box>
                <Typography
                  variant="body1"
                  fontSize="1rem"
                  letterSpacing="0.6px"
                >
                  Web Design
                </Typography>
                <Typography
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="175%"
                  color="#8a92a6"
                  mt="0.4rem"
                >
                  1 hour ago
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '2rem',
                mb: '1.5rem',
                alignItems: 'center',
              }}
            >
              <img className="logo-size" src={ICONS.icon6} alt="imgs" />
              <Box>
                <Typography
                  variant="body1"
                  fontSize="1rem"
                  letterSpacing="0.6px"
                >
                  App Design
                </Typography>
                <Typography
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="175%"
                  color="#8a92a6"
                  mt="0.4rem"
                >
                  1 hour ago
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
              }}
            >
              <img className="logo-size" src={ICONS.icon7} alt="imgs" />
              <Box>
                <Typography
                  variant="body1"
                  fontSize="1rem"
                  letterSpacing="0.6px"
                >
                  Abstract Design
                </Typography>
                <Typography
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="175%"
                  color="#8a92a6"
                  mt="0.4rem"
                >
                  1 hour ago
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Paper>
      <Paper sx={{ borderRadius: '8px', mb: '2rem' }} elevation={0}>
        <Box py={'1.5rem'} px={'1rem'}>
          <Stack>
            <Typography
              sx={{
                fontSize: '23px',
                fontWeight: '500',
                lineHeight: '130%',
                color: '#212529',
                mb: '1.5rem',
              }}
              variant="h5"
            >
              Suggestions
            </Typography>
            <Box
              display={'flex'}
              mb={'1.5rem'}
              justifyContent={'space-evenly'}
              gap={'1rem'}
              alignContent={'center'}
            >
              <img className="side-icn" src={ICONS.ic1} alt="ic" />
              <Box>
                <Typography
                  fontWeight={'500'}
                  fontSize={'16px'}
                  lineHeight={'175%'}
                  color={'#212529'}
                  variant={'h6'}
                >
                  Paul Molive
                </Typography>
                <Typography
                  fontSize={'13px'}
                  fontWeight={'400'}
                  lineHeight={'130%'}
                  color={'#8a92a6'}
                  mt={'0.5rem'}
                >
                  4 mutual friends
                </Typography>
              </Box>
              <img className="add-icn" src={ICONS.addit} alt="add" />
            </Box>
            <Box
              display={'flex'}
              mb={'1.5rem'}
              justifyContent={'space-evenly'}
              gap={'1rem'}
              alignContent={'center'}
            >
              <img className="side-icn" src={ICONS.ic2} alt="ic" />
              <Box>
                <Typography
                  fontWeight={'500'}
                  fontSize={'16px'}
                  lineHeight={'175%'}
                  color={'#212529'}
                  variant={'h6'}
                >
                  Robert Fox
                </Typography>
                <Typography
                  fontSize={'13px'}
                  fontWeight={'400'}
                  lineHeight={'130%'}
                  color={'#8a92a6'}
                  mt={'0.5rem'}
                >
                  4 mutual friends
                </Typography>
              </Box>
              <img className="add-icn" src={ICONS.addit} alt="add" />
            </Box>
            <Box
              display={'flex'}
              mb={'1.5rem'}
              justifyContent={'space-evenly'}
              gap={'1rem'}
              alignContent={'center'}
            >
              <img className="side-icn" src={ICONS.ic3} alt="ic" />
              <Box>
                <Typography
                  fontWeight={'500'}
                  fontSize={'16px'}
                  lineHeight={'175%'}
                  color={'#212529'}
                  variant={'h6'}
                >
                  Jenny Wilson
                </Typography>
                <Typography
                  fontSize={'13px'}
                  fontWeight={'400'}
                  lineHeight={'130%'}
                  color={'#8a92a6'}
                  mt={'0.5rem'}
                >
                  4 mutual friends
                </Typography>
              </Box>
              <img className="add-icn" src={ICONS.addit} alt="add" />
            </Box>
            <Box
              display={'flex'}
              mb={'1.5rem'}
              justifyContent={'space-evenly'}
              gap={'1rem'}
              alignContent={'center'}
            >
              <img className="side-icn" src={ICONS.ic4} alt="ic" />
              <Box>
                <Typography
                  fontWeight={'500'}
                  fontSize={'16px'}
                  lineHeight={'175%'}
                  color={'#212529'}
                  variant={'h6'}
                >
                  Cody Fisher
                </Typography>
                <Typography
                  fontSize={'13px'}
                  fontWeight={'400'}
                  lineHeight={'130%'}
                  color={'#8a92a6'}
                  mt={'0.5rem'}
                >
                  4 mutual friends
                </Typography>
              </Box>
              <img className="add-icn" src={ICONS.addit} alt="add" />
            </Box>
            <Box
              display={'flex'}
              mb={'1.5rem'}
              justifyContent={'space-evenly'}
              gap={'1rem'}
              alignContent={'center'}
            >
              <img className="side-icn" src={ICONS.ic5} alt="ic" />
              <Box>
                <Typography
                  fontWeight={'500'}
                  fontSize={'16px'}
                  lineHeight={'175%'}
                  color={'#212529'}
                  variant={'h6'}
                >
                  Bessie Cooper
                </Typography>
                <Typography
                  fontSize={'13px'}
                  fontWeight={'400'}
                  lineHeight={'130%'}
                  color={'#8a92a6'}
                  mt={'0.5rem'}
                >
                  4 mutual friends
                </Typography>
              </Box>
              <img className="add-icn" src={ICONS.addit} alt="add" />
            </Box>
            <Box
              display={'flex'}
              mb={'1.5rem'}
              justifyContent={'space-evenly'}
              gap={'1rem'}
              alignContent={'center'}
            >
              <img className="side-icn" src={ICONS.ic6} alt="ic" />
              <Box>
                <Typography
                  fontWeight={'500'}
                  fontSize={'16px'}
                  lineHeight={'175%'}
                  color={'#212529'}
                  variant={'h6'}
                >
                  Wade Warren
                </Typography>
                <Typography
                  fontSize={'13px'}
                  fontWeight={'400'}
                  lineHeight={'130%'}
                  color={'#8a92a6'}
                  mt={'0.5rem'}
                >
                  4 mutual friends
                </Typography>
              </Box>
              <img className="add-icn" src={ICONS.addit} alt="add" />
            </Box>
            <Box
              display={'flex'}
              mb={'1.5rem'}
              justifyContent={'space-evenly'}
              gap={'1rem'}
              alignContent={'center'}
            >
              <img className="side-icn" src={ICONS.ic7} alt="ic" />
              <Box>
                <Typography
                  fontWeight={'500'}
                  fontSize={'16px'}
                  lineHeight={'175%'}
                  color={'#212529'}
                  variant={'h6'}
                >
                  Guy Hawkins
                </Typography>
                <Typography
                  fontSize={'13px'}
                  fontWeight={'400'}
                  lineHeight={'130%'}
                  color={'#8a92a6'}
                  mt={'0.5rem'}
                >
                  4 mutual friends
                </Typography>
              </Box>
              <img className="add-icn" src={ICONS.addit} alt="add" />
            </Box>
            <Box
              display={'flex'}
              justifyContent={'space-evenly'}
              gap={'1rem'}
              alignContent={'center'}
            >
              <img className="side-icn" src={ICONS.ic8} alt="ic" />
              <Box>
                <Typography
                  fontWeight={'500'}
                  fontSize={'16px'}
                  lineHeight={'175%'}
                  color={'#212529'}
                  variant={'h6'}
                >
                  Floyd Miles
                </Typography>
                <Typography
                  fontSize={'13px'}
                  fontWeight={'400'}
                  lineHeight={'130%'}
                  color={'#8a92a6'}
                  mt={'0.5rem'}
                >
                  4 mutual friends
                </Typography>
              </Box>
              <img className="add-icn" src={ICONS.addit} alt="add" />
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  );
};

export default MainContentRight;
