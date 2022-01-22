import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'

const Covid = () => {
    const aoi = 'https://static.pipezero.com/covid/data.json'
    const [data, setData] = useState([])

    useEffect(() => {

        fetch(aoi)
            .then(res => res.json())
            .then(res => {
                setData(res.locations)
            })

    }, [])




    return (
        <>
            <div style={{ margin: '120px auto', width: '95vw' }}>
                <h2>Tình hình Covid-19 Việt Nam</h2>
                <Table striped bordered hover >
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
                        {data.map((dat, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{dat.name}</td>
                                    <td>{dat.cases}</td>
                                    <td>{dat.casesToday}</td>
                                    <td>{dat.death}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </>)
};

export default Covid;
