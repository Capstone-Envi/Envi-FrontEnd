import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function CusButton({ text, to, isOutlined, size }: { text: string, to: string, isOutlined: boolean, size: 'small' | 'medium' | 'large' }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };

    if (!isOutlined) {
        return (
            <Button variant="contained"
                sx={{
                    boxShadow: 'none',
                    margin: '12px 10px',
                    backgroundColor: '#535CE8',
                    fontFamily: 'Poppins',
                    textTransform: 'none',
                    ':hover': {
                        backgroundColor: '#3a45e4'
                    }
                }}
                size={size}
                onClick={handleClick}
            >{text}</Button>
        )
    }

    return (
        <Button variant="outlined"
            sx={{
                margin: '12px 10px',
                borderColor: '#535CE8',
                color: '#535CE8',
                fontFamily: 'Poppins',
                textTransform: 'none',
                ':hover': {
                    color: '#3a45e4',
                    borderColor: '#3a45e4'
                }
            }}
            size='large'
            onClick={handleClick}
        >{text}</Button>
    )
}

