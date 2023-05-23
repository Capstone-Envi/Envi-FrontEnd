import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import * as yup from 'yup';
import background from "../../../assets/background.svg";
import appLogo from '../../../assets/logo.svg';
import betterInput from "../../../components/share/betterStyles";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { login } from "../../../redux/slices/currentUserSlice";

interface LoginFormValues {
    email: string;
    password: string;
}

const initialValue: LoginFormValues = {
    email: "",
    password: "",
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
});


export function Login() {
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.currentUser.loading);
    const error = useAppSelector((state) => state.currentUser.error);
    const betterLoginInput = betterInput;

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(login({email: values.email, password: values.password}));
        },
    });

    return (
        <LoginContainer>
            <EnviLogo />
            <Box
                onSubmit={formik.handleSubmit}
                component="form"
                sx={{
                    backgroundColor: '#FFFFFF',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.25)',
                    '& .MuiTextField-root': { m: 1, marginBottom: 2, width: '200px' },
                    '& .other-input .MuiTextField-root': { width: '416px' },
                    ...betterLoginInput,
                }}
                autoComplete="off"
            >
                <SignUpLabel>Log in</SignUpLabel>
                <LoginInput className="other-input">
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
                </LoginInput>
                <Button variant="contained"
                    sx={{
                        margin: '20px 8px',
                        width: '416px',
                        backgroundColor: '#535CE8',
                        fontFamily: 'Poppins',
                        textTransform: 'none',
                        marginTop: '40px',
                    }}
                    size='large'
                    type="submit"
                >Log in</Button>
                <div className="text-center w-full mt-8">
                    <p className="text-black">
                        Don't have an account?{' '}
                        <span className="text-primary font-semibold">
                            <Link to="/register">Sign up now</Link>
                        </span>
                    </p>
                </div>
            </Box>
        </LoginContainer>
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

const SignUpLabel = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #323743;
    font-size: 34px;
    font-weight: 600;
`

const LoginInput = styled.div`
    display: flex;
    flex-direction: column;
`

const LoginContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background-image: url(${background});
    display: flex;
    justify-content: center;
    align-items: center;
`