import React from 'react';
import { Box, Paper } from '@mui/material';
import ICONS from '../Asset/Icons';
import '../Style/userpage.css';

const SideBar = () => {
  return (
    <>
      <Paper>
        <Box className="side-bar" sx={{ pl: '0.5rem', width: '14rem' }}>
          <nav className="animated bounceInDown">
            <h3 className="sdh-gr ">Home</h3>
            <ul>
              <li>
                <a className="linkalign" href="#profile">
                  <img alt="icons" className="img-drp" src={ICONS.logo1} />
                  Dashboard
                </a>
              </li>
              <li className="sub-menu ">
                <a className="linkalign" href="#settings">
                  <img alt="icons" className="img-drp" src={ICONS.logo2} />
                  Menu Style
                  <img alt="icons" className="drpdwn" src={ICONS.dropdown} />
                  <div className="fa fa-caret-down right" />
                </a>
                <ul>
                  <li>
                    <a className=" prm-grey" href="#settings">
                      ● Option
                    </a>
                  </li>
                  <li>
                    <a className=" prm-grey" href="#settings">
                      ● Option
                    </a>
                  </li>
                  <li>
                    <a className=" prm-grey" href="#settings">
                      ● Option
                    </a>
                  </li>
                </ul>
              </li>
              <h3 className="sdh-gr">Pages</h3>
              <li className="sub-menu">
                <a className="linkalign" href="#settings">
                  <img alt="icons" className="img-drp" src={ICONS.logo3} />
                  Special Pages
                  <img alt="icons" className="drpdwn" src={ICONS.dropdown} />
                  <div className="fa fa-caret-down right" />
                </a>
                <ul>
                  <li>
                    <a className=" prm-grey" href="#settings">
                      ● Option
                    </a>
                  </li>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● Option
                    </a>
                  </li>
                  <li>
                    <a className=" prm-grey" href="#settings">
                      ● Option
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu">
                <a className="linkalign" href="#settings">
                  <img alt="icons" className="img-drp" src={ICONS.logo4} />
                  Authentication
                  <img alt="icons" className="drpdwn" src={ICONS.dropdown} />
                  <div className="fa fa-caret-down right" />
                </a>
                <ul>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● Option
                    </a>
                  </li>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● Option
                    </a>
                  </li>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● Option
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu">
                <a className="linkalign" href="#settings">
                  <img alt="icons" className="img-drp" src={ICONS.logo5} />
                  Users
                  <img alt="icons" className="drpdwn " src={ICONS.dropdown} />
                  <div className="fa fa-caret-down right" />
                </a>
                <ul>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● User Profile
                    </a>
                  </li>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● Edit User
                    </a>
                  </li>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● User List
                    </a>
                  </li>
                </ul>
              </li>
              <li className=" sub-menu">
                <a className="linkalign" href="#settings">
                  <img alt="icons" className="img-drp" src={ICONS.logo6} />{' '}
                  Utilities
                  <img alt="icons" className="drpdwn " src={ICONS.dropdown} />
                  <div className="fa fa-caret-down right" />
                </a>
                <ul>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● Option
                    </a>
                  </li>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● Option
                    </a>
                  </li>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● Option
                    </a>
                  </li>
                </ul>
              </li>
              <h3 className="sdh-gr">Elements</h3>
              <li className="sub-menu">
                <a className="linkalign" href="#settings">
                  <img alt="icons" className="img-drp" src={ICONS.logo7} />
                  Components
                  <img alt="icons" className="drpdwn" src={ICONS.dropdown} />
                  <div className="fa fa-caret-down right" />
                </a>
                <ul>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● User Profile
                    </a>
                  </li>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● Edit User
                    </a>
                  </li>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● User List
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu">
                <a className="linkalign" href="#settings">
                  <img alt="icons" className="img-drp" src={ICONS.logo8} />
                  Widgets
                  <img alt="icons" className="drpdwn " src={ICONS.dropdown} />
                  <div className="fa fa-caret-down right" />
                </a>
                <ul>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● Option
                    </a>
                  </li>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● Option
                    </a>
                  </li>
                  <li>
                    <a className="prm-grey" href="#settings">
                      ● Option
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </Box>
      </Paper>
    </>
  );
};

export default SideBar;
