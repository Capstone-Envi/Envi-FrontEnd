import NotificationsIcon from '@mui/icons-material/Notifications';
import { Stack } from '@mui/material';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from "styled-components";
import appLogo from '../../assets/logo.svg';
import { useAppSelector } from '../../redux/hooks';
import { CusNavItem } from './CusNavItem';

export function Header() {
    const currentUser = useAppSelector((state) => state.currentUser.currentUser);
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    useEffect(() => {
        // Check if the user is already logged in
        // If logged in, redirect to another page (e.g., "/dashboard")
        const isLoggedIn = currentUser !== null// Logic to check if the user is logged in

        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <HeaderNavigation>
            <img src={appLogo} className="appLogo" alt="Envi logo" />
            <Stack direction='row'>
                <CusNavItem text='LoRa' />
                <CusNavItem text='User' />
            </Stack>
            <Box sx={{
                display: { xs: 'none', md: 'flex' },
            }}>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    sx={{
                        color: "#979797",
                        marginRight: '10px'
                    }}
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <div>
                    <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        sx={{
                            height: '100%',
                            fontFamily: 'Poppins',
                            textTransform: 'none',
                            color: '#171a1f',
                            borderRadius: '0px'
                        }}
                    >
                        Thinh Dinh
                    </Button>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-end"
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom-start' ? 'right top' : 'right bottom',
                                }}
                            >
                                <Paper sx={{
                                    borderTopLeftRadius: '0px',
                                    borderTopRightRadius: '0px'
                                }}>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            autoFocusItem={open}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}
                                        >
                                            <MenuItem sx={{ fontFamily: 'Poppins' }} onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem sx={{ fontFamily: 'Poppins' }} onClick={handleClose}>Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </Box>
        </HeaderNavigation>
    );
}

const HeaderNavigation = styled.nav`
    background-color: #FFFFFF;
    z-index: 100;
    position: fixed;
    top: 0;
    height: 56px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 
        0 0 1px 0 rgba(23, 26, 31, 0.5),
        0 0 2px 0 rgba(23, 26, 31, 0.5);
`
const Nav = styled.div`
    height: 100%;
    width: 90vw;
    display: flex;
    justify-content: space-between;
`