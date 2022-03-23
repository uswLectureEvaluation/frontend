import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { mainApi } from '../Api/Api'

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };



    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, num) {
    return { name, calories, num };
}

const rows = [
    createData('올댓베이직 ', '기교', '⭐⭐⭐⭐'),
    createData('올댓베이직', 452, '⭐⭐⭐⭐'),
    createData('올댓베이직', 262, '⭐⭐⭐⭐'),
    createData('올댓베이직', 222, '⭐⭐⭐⭐'),
    createData('올댓베이직', 452, '⭐⭐⭐⭐'),
    createData('올댓베이직', 262, '⭐⭐⭐⭐'),

].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function MTable(lecture) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const [db, setData] = useState({
        data: []
    })

    useEffect(() => {

        mainApi(setData, lecture.lecture)

    }, [lecture])

    const a = []
    const handleStar = (num) => {
        for (let i = 0; i < num; i++) {
            a[i] = '*'
        }
        return a;
    }



    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableBody >
                    {db.data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row" style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'HanSans' }}>
                                {row.lectureName} <h5 style={{ fontSize: '14px', fontFamily: 'HanSans' }}>{row.professor}</h5>

                                <div style={{ width: 300, fontSize: '22px', fontWeight: 'bold', marginTop: '15px', fontFamily: 'HanSans' }}>
                                    평균지수 {row.lectureTotalAvg}
                                </div>
                                <div onClick={() => alert('dd')} style={{
                                    fontSize: '16px',
                                    color: 'rgb(190, 190, 190)',
                                    textDecoration: 'underline', fontFamily: 'HanSans'
                                }}>
                                    자세히보기
                                </div>
                            </TableCell>

                            <TableCell style={{ width: 160, fontSize: '16px', }} align="right">
                                {row.lectureType}
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer >
    );
}
