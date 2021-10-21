import React from 'react'
import LineChart from './LineChart'
import PieChart from './PieChart'
import PolarChart from './PolarChart'
import Styles from './style.module.scss'

function SectionTop() {
    const [data, setData] = React.useState([]);

    const req = async () => {
        const url =
            'https://ae1cdb19-2532-46fa-9b8f-cce01702bb1e.mock.pstmn.io/takehometest/web/dashboard';
        const resp = await fetch(url);
        const respJson = await resp.json();

        setData(respJson.data.orders.map((row) => row.conversion_revenue));
    };

    React.useEffect(() => {
        req();
    }, []);

    return (
        <div className={Styles.sectionTop}>
            <PieChart />
            <PolarChart />
            <LineChart data={data} />
        </div>
    );
}

export default SectionTop
