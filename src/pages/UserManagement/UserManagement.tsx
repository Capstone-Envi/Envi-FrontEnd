import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import dayjs from 'dayjs';
import { useFormik } from "formik";
import * as React from 'react';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import * as yup from 'yup';
import { Header } from '../../components/Header/Header';
import { betterInput, betterSearchInput } from '../../components/share/betterStyles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { createAccount, getUsers } from '../../redux/slices/userManagement/userManagementAction';
import { User } from '../../utils/types';

interface CreateFromValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    address: string;
}

const initialValue: CreateFromValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
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
    phone: yup
        .string(),
    address: yup
        .string(),
});

export function UserManagement() {
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(String);
    const dispatch = useAppDispatch();
    const betterDialogInput = betterInput;
    const currentUser = useAppSelector((state) => state.currentUser.currentUser);

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const token = currentUser?.token;
            dispatch(
                createAccount(
                    {
                        address: values.address,
                        email: values.email,
                        firstName: values.firstName,
                        lastName: values.lastName,
                        phone: values.phone,
                        password: values.password,
                    }
                ))
                .then((response) => {
                    // Check if register was successful
                    if (response.payload) {
                        // Redirect to another page
                    }
                });
        },
    });

    const startOfQ12022 = dayjs('2022-01-01T00:00:00.000');
    const endOfQ12022 = dayjs('2022-03-31T23:59:59.999');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        formik.handleSubmit();
    };

    return (
        <>
            <Header />
            <UserManagementContainer>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                    }}
                >
                    <Button variant="contained"
                        startIcon={<AddIcon />}
                        sx={{
                            boxShadow: 'none',
                            marginRight: '20px',
                            backgroundColor: '#535CE8',
                            fontFamily: 'Poppins',
                            textTransform: 'none',
                            ':hover': {
                                backgroundColor: '#3a45e4'
                            }
                        }}
                        onClick={handleClickOpen}
                        size='medium'
                    >New</Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle sx={{
                            fontFamily: 'Poppins',
                            fontWeight: '500',
                            fontSize: '24px',
                        }}>Create new account</DialogTitle>
                        <DialogContent>
                            <Box
                                onSubmit={formik.handleSubmit}
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, marginBottom: 1, width: '200px' },
                                    '& .other-input .MuiTextField-root': { width: '416px' },
                                    ...betterDialogInput,
                                }}
                                autoComplete="off"
                            >
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
                                        id="phone"
                                        name="phone"
                                        label="Phone number"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                                        helperText={formik.touched.phone && formik.errors.phone}
                                    />
                                    <TextField
                                        size="small"
                                        id="address"
                                        name="address"
                                        label="Address"
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        error={formik.touched.address && Boolean(formik.errors.address)}
                                        helperText={formik.touched.address && formik.errors.address}
                                    />
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
                                    {error && (
                                        <ErrorMessage>
                                            {error}
                                        </ErrorMessage>
                                    )}
                                </OtherInput>
                            </Box>
                        </DialogContent>
                        <DialogActions>
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
                                size='small'
                                onClick={handleClose}
                            >Cancel</Button>
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
                                size='small'
                                onClick={handleSave}
                            >Save</Button>
                        </DialogActions>
                    </Dialog>
                    <TextField
                        label='Search'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start"><SearchIcon /></InputAdornment>
                            ),
                        }}
                        size="small"
                        sx={{
                            ...betterSearchInput
                        }}
                    />
                </Box>
                <EnhancedTable currentUser={currentUser} />
            </UserManagementContainer>
        </>
    )
}

const ErrorMessage = styled.div`
    color: #de3b40;
    padding: 0 16px;
`

const NameInput = styled.div`
    display: flex;
`

const OtherInput = styled.div`
    display: flex;
    flex-direction: column;
`

const UserManagementContainer = styled.div`
    padding: 20px;
    padding-top: 60px;
`

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof User>(
    order: Order,
    orderBy: Key,
):
    (a: User, b: User)
        => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof User;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Name',
    },
    {
        id: 'phone',
        numeric: false,
        disablePadding: false,
        label: 'Phone',
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: 'Email',
    },
    {
        id: 'role',
        numeric: false,
        disablePadding: false,
        label: 'Role',
    },
    {
        id: 'isDeleted',
        numeric: false,
        disablePadding: false,
        label: 'Status',
    },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof User) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof User) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default function EnhancedTable({currentUser}: {currentUser: User | null}) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const users: User[] = useAppSelector((state) => state.userManagement.users) || [];
    // const currentUser = useAppSelector((state) => state.currentUser.currentUser);
    const [offset, setOffset] = React.useState(0);
    const [limit, setLimit] = React.useState(10);

    useEffect(() => {
        // Check if the user is already logged in
        // If logged in, redirect to another page (e.g., "/dashboard")
        const isLoggedIn = currentUser !== null// Logic to check if the user is logged in

        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [currentUser]);

    useEffect(() => {
        const token = currentUser?.token
        dispatch(getUsers({ offset: offset, limit: limit, token: token }));
    }, [offset, limit]);

    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof User>('name');
    const [selected, setSelected] = React.useState<readonly string[]>([]);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof User,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setOffset(newPage);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        offset > 0 ? Math.max(0, (1 + offset) * limit - users.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(users, getComparator(order, orderBy)).slice(
                offset * limit,
                offset * limit + limit,
            ),
        [order, orderBy, offset, limit],
    );

    return (
        <Box sx={{ width: '100%', paddingTop: '20px' }}>
            <Paper sx={{ width: '100%', mb: 2, border: '1px solid #000000', boxShadow: 'none' }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={users.length}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.email as string);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.email as string)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.email}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer', fontFamily: 'Poppins' }}
                                    >
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                            sx={{ paddingLeft: '20px', fontFamily: 'Poppins' }}
                                        >
                                            {row.firstName + ' ' + row.lastName}
                                        </TableCell>
                                        <TableCell align="left" sx={{ fontFamily: 'Poppins' }}>{row.phone}</TableCell>
                                        <TableCell align="left" sx={{ fontFamily: 'Poppins' }}>{row.email}</TableCell>
                                        <TableCell align="left" sx={{ fontFamily: 'Poppins' }}>{row.role}</TableCell>
                                        <TableCell sx={{ paddingRight: '20px', fontFamily: 'Poppins' }} align="left">{row.isDeleted === false ? 'Activated' : 'Unactivated'}</TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 53 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[]}
                    component="div"
                    rowsPerPage={limit}
                    count={users.length}
                    page={offset}
                    onPageChange={handleChangePage}
                />
            </Paper>
        </Box>
    );
}