import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

const Covid = () => {
    const aoi = 'https://static.pipezero.com/covid/data.json'
    const [data, setData] = useState({})

    useEffect(() => {

        fetch(aoi)
            .then(res => res.json())
            .then(res => setData(res))

    }, [])


    const locations = data.locations
    const overview = data.overview


    return (<Table striped bordered hover style={{ margin: '120px 0', overflow: 'hidden' }}>
        <thead>
            <tr>
                <th>#</th>
                <th>Tỉnh</th>
                <th>Ca nhiễm</th>
                <th>Ca nhiễm hôm nay</th>
                <th>Tử vong</th>
            </tr>
        </thead>
        <tbody>
            {locations.map((dat, index) => {
                return (
                    <tr>
                        <td>{index}</td>
                        <td>{dat.name}</td>
                        <td>{dat.case}</td>
                        <td>{dat.caseToday}</td>
                        <td>{dat.death}</td>
                    </tr>
                )
            })}

        </tbody>
    </Table>)
};

export default Covid;
