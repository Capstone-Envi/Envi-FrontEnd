import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import * as yup from 'yup';
import background from "../../../assets/background.svg";
import appLogo from '../../../assets/logo.svg';
import betterInput from "../../../components/share/betterStyles";

interface RegisterFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const initialValue: RegisterFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Required'),
    password: yup
        .string()
        .min(8, '8 characters Required')
        .required('Required'),
    firstName: yup
        .string()
        .min(6, '6 Character Required')
        .required('Required'),
    lastName: yup
        .string()
        .min(6, '6 Character Required')
        .required('Required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), undefined], 'Passwords must match')
});


export function Register() {
    const betterRegisterInput = betterInput;
    
    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <RegisterContainer>
            <EnviLogo />
            <Box
                onSubmit={formik.handleSubmit}
                component="form"
                sx={{
                    backgroundColor: '#FFFFFF',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.25)',
                    '& .MuiTextField-root': { m: 1, marginBottom: 1, width: '200px' },
                    '& .other-input .MuiTextField-root': { width: '416px' },
                    ...betterRegisterInput,
                }}
                autoComplete="off"
            >
                <SignUpLabel>Create an account</SignUpLabel>
                <NameInput>
                    <TextField
                        size="small"
                        id="firstName"
                        name="firstName"
                        label="First name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                    <TextField
                        size="small"
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                </NameInput>
                <OtherInput className="other-input">
                    <TextField
                        size="small"
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        autoComplete="new-password"
                        size="small"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <TextField
                        size="small"
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm password"
                        type="password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                </OtherInput>
                <Button variant="contained"
                    sx={{
                        margin: '20px 8px',
                        width: '416px',
                        backgroundColor: '#535CE8',
                        fontFamily: 'Poppins',
                        textTransform: 'none',
                        marginTop: '10px',
                    }}
                    size='large'
                    type="submit"
                >Sign up</Button>
                <div className="text-center w-full mt-8">
                    <p className="text-black">
                        Already have an account?{' '}
                        <span className="text-primary font-semibold">
                            <Link to="/login">Log in</Link>
                        </span>
                    </p>
                </div>
            </Box>
        </RegisterContainer>
    );
}

const EnviLogo = styled.img`
    padding: 27.83px;
    position: absolute;
    width: 132px;
    height: 55.66px;
    top: 30px;
    left: 30px;
    background-image: url(${appLogo});
    background-size: cover;
    background-repeat: no-repeat;
    stroke: transparent;
    stroke-width: 0px;
`

const NameInput = styled.div`
    display: flex;
`
const SignUpLabel = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #323743;
    font-size: 34px;
    font-weight: 600;
`

const OtherInput = styled.div`
    display: flex;
    flex-direction: column;
`

const RegisterContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background-image: url(${background});
    display: flex;
    justify-content: center;
    align-items: center;
`