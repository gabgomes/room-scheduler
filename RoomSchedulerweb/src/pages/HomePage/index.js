import React, { Component } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import { Paper, Container, Input, Button, View } from "./styles";
import { getSchedules } from './../../services';
import moment from 'moment';
import { SYSTEM_ROUTES } from './../../constants'

class HomePage extends Component {

    state = {
        schedules: []
    }

    componentDidMount() {
        getSchedules()
            .then(res => {
                this.setState({ schedules: res.data })
                console.log("res", res)
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    render() {
        const { schedules } = this.state;
        console.log("schedules", schedules)
        return (
            <div>
                <View>
                    <Button onClick={() => this.props.history.push(SYSTEM_ROUTES.NEW_ROOM.ROUTE)}>
                        Nova Sala
                    </Button>
                    <Button onClick={() => this.props.history.push(SYSTEM_ROUTES.NEW_SCHEDULE.ROUTE)}>
                        Novo Agendamento
                    </Button>
                </View>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Data</TableCell>
                            <TableCell align="center">Título</TableCell>
                            <TableCell align="center">Sala</TableCell>
                            <TableCell align="center">Início</TableCell>
                            <TableCell align="center">Fim</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {schedules.map(schedule => (
                            <TableRow key={schedule.sala}>
                                <TableCell align="center">{moment(schedule.initialDate).format("DD/MM/YYYY")}</TableCell>
                                <TableCell>{schedule.title}</TableCell>
                                <TableCell align="center">{schedule.room}</TableCell>
                                <TableCell align="center">{moment(schedule.initialDate).format("HH:mm")}</TableCell>
                                <TableCell align="center">{moment(schedule.finalDate).format("HH:mm")}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div >
        );
    }
}

export { HomePage }