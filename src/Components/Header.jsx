import React from 'react';
import Grid from '@mui/material/Grid';
import {
  Box,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from '@mui/material';
import logo from '../Asset/assets/1.png';
import flag from '../Asset/asset2/fla.png';
import notification from '../Asset/asset2/Notification.png';
import message from '../Asset/asset2/Message.png';
import search from '../Asset/asset2/Search.png';
import beardedguy from '../Asset/asset2/Beared Guy02-min 1.png';
import '../Style/userpage.css';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';

const Header = () => {
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => {
  //   setSidebar(!sidebar);
  // };
  return (
    <>
      <Paper>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          sx={{ py: '0.3rem' }}
        >
          <Grid item>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.7rem',
                ml: '1rem',
                letterSpacing: '0.7px',
              }}
            >
              <img className="logo" src={logo} alt="logo" />
              <p className="hope">Hope Ui</p>

              <IconButton
                color="primary"
                // onClick={showSidebar()}
                sx={{ ml: '0.4rem' }}
              >
                <ArrowCircleLeftRoundedIcon
                  sx={{ color: '#0048B3', border: 0, fontSize: '2.4rem' }}
                />
              </IconButton>

              <TextField
                size="small"
                id="top-searchbar"
                placeholder="Search..."
                sx={{ m: 1, width: '19rem' }}
                InputProps={{
                  sx: { height: '2.25rem' },
                  startAdornment: (
                    <InputAdornment position="start">
                      <img className="sear-size" src={search} alt="search" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                mr: '0.5rem',
                pt: '0.4rem',
              }}
            >
              <img className="flag" src={flag} alt="flag" />
              <img className="icon" src={notification} alt="ntfctns" />
              <img className="icon" src={message} alt="msg" />
              <img className="guy-icon" src={beardedguy} alt="guy02" />
              <div>
                <p className="guy-name ">Austin Robertson</p>
                <p className="guy-prf">Marketing Administrator</p>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Header;
