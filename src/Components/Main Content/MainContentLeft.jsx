import React from 'react';
import { Box, Stack, Paper, Divider, Typography } from '@mui/material';
import ICONS from '../../Asset/Icons';
import '../../Style/userpage.css';
const MainContentLeft = () => {
  return (
    <>
      <Stack>
        <Paper sx={{ borderRadius: '8px', mb: '2rem' }} elevation={0}>
          <Box py={'1.5rem'} px={'1rem'}>
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
              News
            </Typography>
            <Box>
              <Box sx={{ gap: '1.3rem', display: 'flex' }}>
                <img className={'icon-side2'} src={ICONS.msg} alt="msg" />
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                </Typography>
              </Box>
              <Box sx={{ gap: '1.3rem', display: 'flex' }}>
                <img className={'icon-side2'} src={ICONS.msg} alt="msg" />
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '175%',
                    color: 'rgb(138, 146, 166)',
                  }}
                  variant="p"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
        <Paper sx={{ borderRadius: '8px', mb: '2rem' }} elevation={0}>
          <Box py={'1.5rem'} px={'1rem'}>
            <Box display={'flex'} mb={'1rem'} justifyContent={'space-between'}>
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
                Gallery
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: '500',
                  lineHeight: '130%',
                  color: '#8a92a6',
                }}
                variant="p"
              >
                132 pics
              </Typography>
            </Box>
            <Box mx={'1rem'}>
              <Box
                display={'flex'}
                justifyContent={'space-evenly'}
                gap={'1rem'}
                mb={'1rem'}
              >
                <img className="tiles" src={ICONS.tile1} alt="tab" />
                <img className="tiles" src={ICONS.tile2} alt="tab" />
                <img className="tiles" src={ICONS.tile3} alt="tab" />
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-evenly'}
                gap={'1rem'}
                mb={'1rem'}
              >
                <img className="tiles" src={ICONS.tile4} alt="tab" />
                <img className="tiles" src={ICONS.tile5} alt="tab" />
                <img className="tiles" src={ICONS.tile6} alt="tab" />
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-evenly'}
                gap={'1rem'}
              >
                <img className="tiles" src={ICONS.tile7} alt="tab" />
                <img className="tiles" src={ICONS.tile8} alt="tab" />
                <img className="tiles" src={ICONS.tile9} alt="tab" />
              </Box>
            </Box>
          </Box>
        </Paper>{' '}
        <Paper sx={{ borderRadius: '8px', mb: '2rem' }} elevation={0}>
          <Box py={'1.5rem'} px={'1rem'}>
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
              Twitter Feeds
            </Typography>
            <Box mb={'0.5rem'}>
              <Box display={'flex'} gap={'2rem'} mt={'1.2rem'}>
                <img src={ICONS.img1} alt="file" className="sd-ic" />
                <Box>
                  {' '}
                  <Typography
                    color={'#212529'}
                    fontWeight={'600'}
                    fontSize={'1rem'}
                  >
                    Figma Community
                  </Typography>
                  <Typography
                    color={'#8a92a6'}
                    fontSize={'16px'}
                    lineHeight={'175%'}
                  >
                    @figma20{' '}
                    <img src={ICONS.checkmark} alt="tick" className="checkic" />
                  </Typography>{' '}
                </Box>
              </Box>
              <Typography
                mt={'0.5rem'}
                fontSize={'16px'}
                lineHeight={'175%'}
                color={'#8a92a6'}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet
              </Typography>
              <Typography
                color={'#0048b3'}
                fontWeight={'400'}
                fontSize={'16px'}
                my={'0.5rem'}
                lineHeight={'175%'}
              >
                #Html #Bootstrap
              </Typography>
              <Typography
                fontSize={'16px'}
                lineHeight={'175%'}
                color={'#8a92a6'}
              >
                07 Jan 2020
              </Typography>
            </Box>
            <Divider variant="middle" />

            <Box mb={'0.5rem'}>
              <Box display={'flex'} gap={'2rem'} mt={'1.2rem'}>
                <img src={ICONS.img2} alt="file" className="sd-ic" />
                <Box>
                  {' '}
                  <Typography
                    color={'#212529'}
                    fontWeight={'600'}
                    fontSize={'1rem'}
                  >
                    Flutter
                  </Typography>
                  <Typography
                    color={'#8a92a6'}
                    fontSize={'16px'}
                    lineHeight={'175%'}
                  >
                    @jane59{' '}
                    <img src={ICONS.checkmark} alt="tick" className="checkic" />
                  </Typography>{' '}
                </Box>
              </Box>
              <Typography
                mt={'0.5rem'}
                fontSize={'16px'}
                lineHeight={'175%'}
                color={'#8a92a6'}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet
              </Typography>
              <Typography
                color={'#0048b3'}
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'175%'}
                my={'0.5rem'}
              >
                #Html #Bootstrap
              </Typography>
              <Typography
                fontSize={'16px'}
                lineHeight={'175%'}
                color={'#8a92a6'}
              >
                07 Jan 2020
              </Typography>
            </Box>
            <Divider variant="middle" />

            <Box>
              <Box display={'flex'} gap={'2rem'} mt={'1.2rem'}>
                <img src={ICONS.img3} alt="file" className="sd-ic" />
                <Box>
                  {' '}
                  <Typography
                    color={'#212529'}
                    fontWeight={'600'}
                    fontSize={'1rem'}
                  >
                    Blender
                  </Typography>
                  <Typography
                    color={'#8a92a6'}
                    fontSize={'16px'}
                    lineHeight={'175%'}
                  >
                    @blender59{' '}
                    <img src={ICONS.checkmark} alt="tick" className="checkic" />
                  </Typography>{' '}
                </Box>
              </Box>
              <Typography
                mt={'0.5rem'}
                fontSize={'16px'}
                lineHeight={'175%'}
                color={'#8a92a6'}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet
              </Typography>
              <Typography
                color={'#0048b3'}
                fontWeight={'400'}
                fontSize={'16px'}
                my={'0.5rem'}
                lineHeight={'175%'}
              >
                #Html #Bootstrap
              </Typography>
              <Typography
                fontSize={'16px'}
                lineHeight={'175%'}
                color={'#8a92a6'}
              >
                07 Jan 2020
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Stack>
    </>
  );
};

export default MainContentLeft;
