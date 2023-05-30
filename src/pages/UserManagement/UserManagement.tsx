import Box from '@mui/material/Box';
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
import * as React from 'react';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Header } from '../../components/Header/Header';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getUsers } from '../../redux/slices/userManagement/userManagementAction';
import { User } from '../../utils/types';

export function UserManagement() {
    return (
        <>
            <Header />
            <UserManagementContainer>
                <EnhancedTable />
            </UserManagementContainer>
        </>
    )
}

const UserManagementContainer = styled.div`
    margin-top: 56px;
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

export default function EnhancedTable() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const error = useAppSelector((state) => state.userManagement.error);
    const loading = useAppSelector((state) => state.userManagement.loading);
    const users: User[] = useAppSelector((state) => state.userManagement.users) || [];
    const currentUser = useAppSelector((state) => state.currentUser.currentUser);
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
        <Box sx={{ width: '100%', padding: '20px' }}>
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