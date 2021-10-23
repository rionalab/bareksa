import React from 'react'
import Label from './Label';
import Styles from './style.module.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

function Table() {

    const [data, setData] = React.useState([]);

    const req = async () => {
        const url =
            'https://ae1cdb19-2532-46fa-9b8f-cce01702bb1e.mock.pstmn.io/takehometest/web/dashboard';
        const resp = await fetch(url);
        const respJson = await resp.json();

        setData(respJson.data.orders);
    };

    React.useEffect(() => {
        req();
    }, []);

    console.log(data)

    const labelTheme = {
        pending: 'orange',
        completed: 'green',
        canceled: 'red',
    };

    const formattedDate = (str) => {
        const d = new Date(str);

        const dd = `${d.getDate() < 10 ? '0':''}${d.getDate()}`
        const m = d.getMonth() + 1
        const mm = `${m < 10 ? '0':''}${m}`
        const yy = d.getFullYear().toString().substr(-2)
        const hh = `${d.getHours() < 10 ? '0' : ''}${d.getHours()}`;
        const ii = `${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}`;

        return `${dd}/${mm}/${yy} ${hh}:${ii}`;
    }

    return (
        <div>
            <h1 className='mt-0'>Orders</h1>
            <SimpleBar style={{ maxHeight: 400 }}>
                <table className={Styles.tableOrder} cellSpacing='0'>
                    <thead>
                        <tr>
                            <th>Order Number</th>
                            <th>Status</th>
                            <th>Operator</th>
                            <th>Location</th>
                            <th>Start Date</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIdx) => (
                            <tr key={rowIdx}>
                                <td>#{row.conversion_revenue}</td>
                                <td>
                                    <Label
                                        title={row.status}
                                        theme={labelTheme[row.status]}
                                    />
                                </td>
                                <td>{row.full_name}</td>
                                <td>{row.location}</td>
                                <td>{formattedDate(row.start_date)}</td>
                                <td>{formattedDate(row.due_date)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </SimpleBar>
        </div>
    );
}

export default Table
