const betterInput = {
    '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
        '& fieldset': {            // - The <fieldset> inside the Input-root
            borderColor: '#E7E6EF',   // - Set the Input border
            borderRadius: '8px',
            '& legend': {
                '& span': {
                    paddingRight: '10px',
                }
            },
        },
        '&:hover fieldset': {
            borderColor: '#B4BECF', // - Set the Input border when parent has :hover
        },
        '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
            borderColor: '#8792AB',
        },
    },
    '& label': {
        fontFamily: 'Poppins',
    },
    '& label.Mui-focused': {
        color: '#8792AB',
    },
}

export default betterInput