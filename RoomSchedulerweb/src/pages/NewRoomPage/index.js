import React, { Component } from "react";
import { TextField, Snackbar, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { Container, Form, Input, Button, Paper } from "./styles";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import moment from 'moment';
import { SYSTEM_ROUTES } from './../../constants'
import { addNewRoom } from './../../services'
import { getRooms } from './../../services';

class NewRoomPage extends Component {

    state = {
        title: '',
        date: '',
        roomSelected: 0,
        initialHour: 'Wed Apr 01 2020 15:17:20',
        finalHour: 'Wed Apr 01 2020 15:17:20',
        toastVisible: false,
        roomsList: []
    }

    componentDidMount() {
        getRooms()
            .then(res => {
                this.setState({ roomsList: res.data })
            })
            .catch(err => {
                console.log("err", err)
            })
        let date = new Date();
        this.setState({ date: date })
    }

    _onChange = (value, key) => {
        this.setState({ [key]: value })
    }

    _onSubmit = () => {
        const { title } = this.state;

        let data = {
            name: title,
        }

        addNewRoom(data)
            .then(res => {
                this.props.history.push(SYSTEM_ROUTES.HOME.ROUTE)
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    render() {
        const {
            title,
            date,
            roomSelected,
            initialHour,
            finalHour,
            roomsList,
            toastVisible,
        } = this.state;

        const {
            classes
        } = this.props;
        return (
            <Container>
                <Paper>
                    <Typography>Adicionar Sala</Typography>
                    <Input
                        onChange={(evt) => this._onChange(evt.target.value, 'title')}
                        value={title}
                        placeholder="Nome da Sala"
                    />
                    <Button onClick={() => this._onSubmit()} >SALVAR</Button>
                </Paper>
            </Container>

        );
    }
}
// export default compose(
//     withStyles(Styles, { withTheme: true }),
//     connect(null, {}),
// )(NewRoomPage);
export { NewRoomPage };