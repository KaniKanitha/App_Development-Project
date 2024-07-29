
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialRows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, courseName: 'Math' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, courseName: 'History' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, courseName: 'Physics' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, courseName: 'Chemistry' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, courseName: 'Biology' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, courseName: 'Math' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, courseName: 'History' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, courseName: 'Physics' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, courseName: 'Chemistry' },
];

export default function Table() {
  const [rows, setRows] = React.useState(initialRows);

  const handleEditClick = (row) => {
    const newFirstName = prompt('Enter new first name', row.firstName);
    const newLastName = prompt('Enter new last name', row.lastName);
    const newAge = prompt('Enter new age', row.age);
    const newCourseName = prompt('Enter new course name', row.courseName);

    if (newFirstName && newLastName && newAge && newCourseName) {
      setRows((prevRows) =>
        prevRows.map((r) =>
          r.id === row.id
            ? { ...r, firstName: newFirstName, lastName: newLastName, age: Number(newAge), courseName: newCourseName }
            : r
        )
      );
    }
  };

  const handleDeleteClick = (row) => {
    setRows((prevRows) => prevRows.filter((r) => r.id !== row.id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'courseName',
      headerName: 'Course Name',
      width: 150,
      editable: true,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Box>
          <IconButton color="primary" onClick={() => handleEditClick(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" onClick={() => handleDeleteClick(params.row)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}