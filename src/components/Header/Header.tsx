import { Icon } from '@iconify/react';
import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from "styled-components";
import appLogo from '../../assets/logo.svg';
import { useAppSelector } from '../../redux/hooks';
import { CusNavItem } from './CusNavItem';

export function Header() {
    const currentUser = useAppSelector((state) => state.currentUser.currentUser);
    const navigate = useNavigate();

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
            <Nav>
                <img src={appLogo} className="appLogo" alt="Envi logo" />
                <Stack direction='row'>
                    <CusNavItem text='LoRa' />
                    <CusNavItem text='User' />
                </Stack>
            </Nav>
            <Avatar>
                <Icon icon="ic:baseline-notifications" fontSize={25} color='#979797' />
                <NameMenuContainer>
                    <Name>Name</Name>
                    <Icon icon="ic:baseline-arrow-drop-down" fontSize={20} color='#565D6D' />
                </NameMenuContainer>
            </Avatar>
        </HeaderNavigation>
    );
}

const HeaderNavigation = styled.nav`
    height: 56px;
    width: 100%;
    display: flex;
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

const NameMenuContainer = styled.div`
    display: flex;
`

const Name = styled.p`
    margin-right: 5px;
    margin-left: 5px;
    color: #565D6D;
    font-size: 14px;
`

const Avatar = styled.div`
    height: 100%;
    width: 10vw;
    border-left: 1px solid #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
`

