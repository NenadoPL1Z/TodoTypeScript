import { FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { useState } from 'react';

const useStyle = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        backgroundColor: '#ffff',
        borderRadius: '5px 5px 0 0'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))


const TodoFilter: FC = () => {

    const classes = useStyle();
    const [value, setValue] = useState<number>(0);

    function changeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
        setValue(+e.target.value);
    }

    return (
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={value}
          onChange={(e) => changeHandler(e as React.ChangeEvent<HTMLSelectElement>)}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={10}>Important</MenuItem>
          <MenuItem value={20}>Favorite</MenuItem>
          <MenuItem value={30}>Completed</MenuItem>
          <MenuItem value={40}>Deleted</MenuItem>
        </Select>
      </FormControl>
    );
}

export default TodoFilter;