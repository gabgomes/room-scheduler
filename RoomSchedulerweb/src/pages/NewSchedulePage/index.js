import React, { Component } from "react";
import { TextField, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { styles } from "./styles";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Paper, Container, Input, Button, Text } from "./styles";
import moment from 'moment';
import { SYSTEM_ROUTES } from './../../constants'
import { addNewSchedule, getRooms } from './../../services'
import InputLabel from '@material-ui/core/InputLabel';

class NewSchedulePage extends Component {

    state = {
        title: '',
        date: 0,
        roomSelected: 0,
        initialHour: 0,
        finalHour: 0,
        roomsList: []
    }

    componentDidMount() {
        getRooms()
            .then(res => {
                let date = new Date();
                this.setState({ date: date, initialHour: date, finalHour: date, roomsList: res.data })
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    _onChange = (value, key) => {
        console.log("value", value)
        this.setState({ [key]: value })
    }

    _onSubmit = () => {
        const {
            title,
            date,
            roomSelected,
            initialHour,
            finalHour,
        } = this.state;

        const dateFormat = moment(date).format("YYYY-MM-DD");
        const initialFormat = moment(initialHour).format("HH:mm");
        const finalFormat = moment(finalHour).format("HH:mm");

        console.log("dateFormat", dateFormat)
        console.log("initialFormat", initialFormat)

        let data = {
            title: title,
            room: roomSelected,
            initialDate: `${dateFormat} ${initialFormat}`,
            finalDate: `${dateFormat} ${finalFormat}`,
        }

        addNewSchedule(data)
            .then(res => {
                this.props.history.push(SYSTEM_ROUTES.HOME.ROUTE)
            })
            .catch(err => {
                console.log("err", err)
            })

        console.log("data", data)
    }

    render() {
        const {
            title,
            date,
            roomSelected,
            initialHour,
            finalHour,
            roomsList
        } = this.state;

        return (
            <Container>
                <Paper>
                    <Typography>Agendamento</Typography>
                    <TextField
                        value={title}
                        label="Título"
                        type="text"
                        onChange={(evt) => this._onChange(evt.target.value, 'title')}
                    />
                    <Select
                        labelId="demo-simple-select-label"
                        title="Selecione a sala"
                        id="demo-simple-select"
                        value={roomSelected}
                        onChange={(evt) => this._onChange(evt.target.value, 'roomSelected')}
                    >
                        <MenuItem value={0}>Selecione a sala</MenuItem>
                        {roomsList.map(room => (
                            <MenuItem value={room.id}>{room.name}</MenuItem>
                        ))}
                    </Select>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <KeyboardDatePicker
                            format="DD/MM/YYYY"
                            margin="normal"
                            id="date-picker-inline"
                            label="Data"
                            value={date}
                            onChange={value => this._onChange(value, 'date')}
                            KeyboardButtonProps={{ 'aria-label': 'change date' }}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Horário inicial"
                            value={initialHour}
                            onChange={value => this._onChange(value, 'initialHour')}
                            KeyboardButtonProps={{ 'aria-label': 'change time' }}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Horário final"
                            value={finalHour}
                            onChange={value => this._onChange(value, 'finalHour')}
                            KeyboardButtonProps={{ 'aria-label': 'change time' }}
                        />
                    </MuiPickersUtilsProvider>
                    <Button onClick={() => this._onSubmit()}
                    >
                        SALVAR
                        </Button>
                </Paper>
            </Container>
        );
    }
}

export { NewSchedulePage }