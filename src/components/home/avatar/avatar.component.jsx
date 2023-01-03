import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/user.context';
import { signOutUser } from '../../../utils/firebase/firebase.utils';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function AvatarComponent() {
    const { currentUser } = React.useContext(UserContext);
    const nav = useNavigate();
    
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const handleLogout = () => {
      signOutUser();
    };

      

    return (
        <div>
            
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar>{currentUser.displayName.charAt(0)}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                
              {settings.map((setting) => {
                if(setting === "Profile") {
                  return <MenuItem key={setting} onClick={handleCloseUserMenu}> 
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                }
                else if(setting === "Account") {
                  return <MenuItem key={setting} onClick={handleCloseUserMenu}> 
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                }
                else if(setting === "Dashboard") {
                  return <MenuItem key={setting} onClick={handleCloseUserMenu}> 
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                }
                else if(setting === "Logout") {
                  return <MenuItem key={setting} onClick={handleLogout}> 
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                }
                else {
                  return <MenuItem key={setting}> {/* onClick={handleCloseUserMenu}> */} 
                          <Typography textAlign="center" onClick={handleCloseUserMenu}>{setting}</Typography>
                        </MenuItem>
                }
              })}
            </Menu>
        </div>
        
    );
}

export default AvatarComponent;