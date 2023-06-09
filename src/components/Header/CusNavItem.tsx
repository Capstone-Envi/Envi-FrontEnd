import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function CusNavItem({ text, to }: { text: string, to: string }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };
    return (
        <Button
            style={{
                borderRadius: 0,
                fontWeight: 600,
                color: '#535CE8',
                textTransform: 'none',
                padding: '0px 25px',
                fontFamily: 'Poppins'
            }}
            sx={{
                "&:hover": {
                    bgcolor: 'transparent',
                    borderBottom: '3px solid #535CE8',
                    marginTop: '3px',
                }
            }}
            onClick={handleClick}
            >
            {text}
        </Button>
    )
}

