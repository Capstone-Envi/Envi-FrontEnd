import { Button } from '@mui/material';

export function CusNavItem({ text }: { text: string }) {
    return (
        <Button style={{
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
            }}>
            {text}
        </Button>
    )
}