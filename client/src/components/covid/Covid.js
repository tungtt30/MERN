import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'

const Covid = () => {
    const aoi = 'https://static.pipezero.com/covid/data.json'
    const [data, setData] = useState([])
    const [today, setToday] = useState({ internal: { cases: 0, death: 0, recovered: 0, } })
    const [total, setTotal] = useState({ cases: 0, death: 0, recovered: 0 })

    useEffect(() => {

        fetch(aoi)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setData(res.locations)
                setToday(res.today)
                setTotal(res.total.internal)
            })
    }, [])




    return (
        <>
            <div style={{ margin: '120px auto', width: '95vw' }}>
                <h2>Tình hình Covid-19 Việt Nam</h2>
                <div>
                    <ul>
                        <li>Ca mắc mới hôm nay: {today.internal.cases} ca</li>
                        <li>Ca tử vong: {today.internal.death} ca</li>
                        <li>Khỏi bệnh: {today.internal.recovered} ca</li>
                    </ul>
                </div>
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
                        <tr>
                            <td>#</td>
                            <td>Cả nước</td>
                            <td>{total.cases}</td>
                            <td>{today.internal.cases}</td>
                            <td>{total.death}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>)
};

export default Covid;
