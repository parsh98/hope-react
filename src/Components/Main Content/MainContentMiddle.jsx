import React from 'react';
import {
  Box,
  Stack,
  Paper,
  Typography,
  Divider,
  TextField,
  InputAdornment,
} from '@mui/material';
import '../../Style/userpage.css';
import ICONS from '../../Asset/Icons';
const MainContentMiddle = () => {
  return (
    <Stack>
      <Paper sx={{ borderRadius: '8px' }} elevation={0}>
        <Box
          padding={'1rem'}
          sx={{ justifyContent: 'space-between' }}
          className="linkalign"
        >
          <Box className="linkalign" sx={{ gap: '1rem' }}>
            <img className="cube-size" src={ICONS.icon1} alt="icon" />
            <Box>
              <Typography
                sx={{
                  fontSize: '19px',
                  fontWeight: '500',
                  lineHeight: '175%',
                  color: '#212529',
                }}
                variant="h5"
              >
                Wade Warren
              </Typography>
              <Typography
                sx={{
                  fontSize: '13px',
                  fontWeight: '400',
                  lineHeight: '1.5',
                  color: 'rgb(0, 72, 179)',
                }}
                variant="p"
              >
                colleages
              </Typography>
            </Box>
          </Box>
          <Box sx={{ gap: '1rem' }} className="linkalign">
            <Typography
              sx={{
                fontSize: '13px',
                fontWeight: '400',
                lineHeight: '130%',
                color: 'rgb(138, 146, 166)',
              }}
              variant="p"
            >
              29 mins
            </Typography>
            <img className="poly" src={ICONS.downarw} alt="drpgr" />
          </Box>
        </Box>
        <Box sx={{ px: '1.5rem', mb: '1rem' }}>
          <img src={ICONS.midwall} width="100%" alt="midwall" />
        </Box>
        <Box
          sx={{
            px: '1.5rem',
            mb: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', gap: '1.5rem' }}>
            <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <img className="icon-side" src={ICONS.heart} alt="icon" />
              <Typography>{''}Like</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <img className="icon-side2" src={ICONS.msg} alt="icon" />
              <Typography>{''}140</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <img className="icon-side2" src={ICONS.share} alt="shareit" />
            <Typography
              variant="h6"
              sx={{
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '175%',
                color: '#0048b3',
              }}
            >
              99 Share
            </Typography>
          </Box>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ py: '0.5rem', px: '1.5rem', my: '1rem' }}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '175%',
              color: '#8a92a6',
            }}
            variant="p"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Id quam
            tortor nec arcu. Euismod neque ultricies eget condimentum.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor
            nec arcu. Euismod neque ultricies eget adipiscing condimentum.
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ display: 'flex', gap: '1.5rem', px: '1.5rem', my: '1rem' }}>
          <img className="img-ic" src={ICONS.icon2} alt="icon" />
          <Box>
            <Typography variant="h6" sx={{ mb: '0.5rem' }} className="wade">
              Paul Molive
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '175%',
                color: '#8a92a6',
              }}
              variant="p"
            >
              Lorem ipsum dolor sit amet, consectetur elit.
            </Typography>
            <Box sx={{ display: 'flex', gap: '1rem', mt: '0.3rem' }}>
              <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img className="icon-side" src={ICONS.heart} alt="icon" />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '175%',
                    color: '#0048b3',
                  }}
                >
                  Like
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img className="icon-side2" src={ICONS.Orion} alt="icon" />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '175%',
                    color: '#0048b3',
                  }}
                >
                  Reply
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '175%',
                    color: '#0048b3',
                  }}
                >
                  Translate
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '175%',
                    color: '#8a92a6',
                  }}
                  variant="p"
                >
                  5 min
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '1.5rem',
            px: '1.5rem',
            my: '1rem',
            mt: '1.5rem',
          }}
        >
          <img className="img-ic" src={ICONS.icon3} alt="icon" />
          <Box>
            <Typography variant="h6" sx={{ mb: '0.5rem' }} className="wade">
              Robert Fox
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '175%',
                color: '#8a92a6',
              }}
              variant="p"
            >
              Lorem ipsum dolor sit amet, consectetur elit.
            </Typography>
            <Box sx={{ display: 'flex', gap: '1rem', mt: '0.3rem' }}>
              <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img className="icon-side" src={ICONS.heart} alt="icon" />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '175%',
                    color: '#0048b3',
                  }}
                >
                  Like
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img className="icon-side2" src={ICONS.Orion} alt="icon" />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '175%',
                    color: '#0048b3',
                  }}
                >
                  Reply
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '175%',
                    color: '#0048b3',
                  }}
                >
                  Translate
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '175%',
                    color: '#8a92a6',
                  }}
                  variant="p"
                >
                  5 min
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <TextField
          id="top-searchbar"
          placeholder="Lovely!"
          className="css-17n0fg2-MuiInputBase-root-MuiOutlinedInput-root"
          sx={{
            textAlign: 'center',

            ml: '1rem',
            mb: '1rem',
          }}
          InputProps={{
            sx: { height: '4.25rem' },
            endAdornment: (
              <InputAdornment sx={{ gap: '1rem' }} position="end">
                <img className="icnsm" src={ICONS.smile} alt="icon" />
                <img className="icnsm" src={ICONS.camera} alt="icon" />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
      <Paper sx={{ borderRadius: '8px', mt: '2rem' }} elevation={0}>
        <Box
          padding={'1rem'}
          sx={{ justifyContent: 'space-between' }}
          className="linkalign"
        >
          <Box className="linkalign" sx={{ gap: '1rem' }}>
            <img className="cube-size" src={ICONS.icon4} alt="icon" />
            <Box>
              <Typography
                sx={{
                  fontSize: '19px',
                  fontWeight: '500',
                  lineHeight: '175%',
                  color: '#212529',
                }}
                variant="h5"
              >
                Wade Warren
              </Typography>
              <Typography
                sx={{
                  fontSize: '13px',
                  fontWeight: '400',
                  lineHeight: '1.5',
                  color: 'rgb(0, 72, 179)',
                }}
                variant="p"
              >
                colleages
              </Typography>
            </Box>
          </Box>
          <Box sx={{ gap: '1rem' }} className="linkalign">
            <Typography
              sx={{
                fontSize: '13px',
                fontWeight: '400',
                lineHeight: '130%',
                color: 'rgb(138, 146, 166)',
              }}
              variant="p"
            >
              29 mins
            </Typography>
            <img className="poly" src={ICONS.downarw} alt="drpgr" />
          </Box>
        </Box>

        <Box sx={{ py: '0.5rem', px: '1.5rem', mb: '1rem' }}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '175%',
              color: '#8a92a6',
            }}
            variant="p"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Id quam
            tortor nec arcu. Euismod neque ultricies eget condimentum.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor
            nec arcu. Euismod neque ultricies eget adipiscing condimentum.
          </Typography>
        </Box>

        <Divider variant="middle" />
        <Box
          sx={{
            px: '1.5rem',
            my: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', gap: '1.5rem' }}>
            <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <img className="icon-side" src={ICONS.heart} alt="icon" />
              <Typography>{''}Like</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <img className="icon-side2" src={ICONS.msg} alt="icon" />
              <Typography>{''}140</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <img className="icon-side2" src={ICONS.share} alt="shareit" />
            <Typography
              variant="h6"
              sx={{
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '175%',
                color: '#0048b3',
              }}
            >
              99 Share
            </Typography>
          </Box>
        </Box>
        <TextField
          id="top-searchbar"
          placeholder="Lovely!"
          className="css-17n0fg2-MuiInputBase-root-MuiOutlinedInput-root"
          sx={{
            textAlign: 'center',
            ml: '1rem',
            mb: '1rem',
          }}
          InputProps={{
            sx: { height: '4.25rem' },
            endAdornment: (
              <InputAdornment sx={{ gap: '1rem' }} position="end">
                <img className="icnsm" src={ICONS.smile} alt="icon" />
                <img className="icnsm" src={ICONS.camera} alt="icon" />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
      <Box></Box>
    </Stack>
  );
};

export default MainContentMiddle;
