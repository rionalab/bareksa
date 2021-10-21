import React from 'react'
import { Line } from 'react-chartjs-2';
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
            <div className={Styles.header}>
                <h1 className='title'>Revenue</h1>
                <button>
                    <span>Feb - Mar 2021</span>
                    <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M2 4.66675C2 3.56218 2.89543 2.66675 4 2.66675H12C13.1046 2.66675 14 3.56218 14 4.66675V12.6667C14 13.7713 13.1046 14.6667 12 14.6667H4C2.89543 14.6667 2 13.7713 2 12.6667V4.66675Z'
                            stroke='#333333'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M10.6667 1.33325V3.99992'
                            stroke='#333333'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M5.33331 1.33325V3.99992'
                            stroke='#333333'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M2 6.66675H14'
                            stroke='#333333'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </button>
            </div>
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
