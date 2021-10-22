import React from 'react'
import { Line } from 'react-chartjs-2';
import ChartHeader from './ChartHeader';
import Styles from './style.module.scss';

function LineChart({ data }) {

    const [dataSet, setDataSet] = React.useState(data)

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {

                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
        },
    };

    const newData = (canvas) => {
        const ctx = canvas.getContext('2d');
        const g = ctx.createLinearGradient(100, 300, 100, 0);
        g.addColorStop(0, 'white');
        g.addColorStop(1, 'rgba(120, 151, 100, 0.65)');

        return {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: '# of Revenue',
                    data : dataSet,
                    fill: true,
                    backgroundColor: g,
                    tension: 0.2,
                    pointBackgroundColor: 'transparent',
                    pointBorderColor: 'transparent',
                    borderColor: '#789764',
                },
            ],
        }

    };

    React.useEffect(() => {
        setDataSet(data)
    }, [data])

    return (
        <div className={Styles.container}>
            <ChartHeader title="Revenue" type="date" />
            <Line data={newData} options={options} />
            <div className={Styles.footer}>
                <h6>Total Revenue</h6>
                <h3>$76685.41</h3>
                <h5>
                    <svg
                        width='8'
                        height='8'
                        viewBox='0 0 8 8'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M4 6.66658V1.33325'
                            stroke='#5F9F2F'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M2 3.33325L4 1.33325L6 3.33325'
                            stroke='#5F9F2F'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                    <span>&nbsp;&nbsp;&nbsp;7,00%</span>
                </h5>
            </div>
        </div>
    );
}

export default LineChart
