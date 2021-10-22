import Styles from './style.module.scss';
import { PolarArea } from 'react-chartjs-2';
import ChartHeader from './ChartHeader';

function PolarChart() {

    const data = {
        labels: ['Cat#1', 'Cat#2', 'Cat#3', 'Cat#4'],
        datasets: [
            {
                label: '# of Votes',
                data: [20, 16, 18, 12],
                borderWidth: 0,
                backgroundColor: [
                    '#EBA45E',
                    '#E4EAEB',
                    '#725E9C',
                    '#5C8F94',
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        segmentShowStroke: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 5,
                    usePointStyle: true,
                },
            },
        },
        elements: {
            arc: {
                borderWidth: 10,
                borderColor: 'magenta',
                backgroundColor: 'red',
            },
        },
        scales: {
            r: {
                grid: {
                    display: false,
                },
                pointLabels: {
                    color: 'red',
                },
                angleLines: {
                    color: 'magenta',
                    lineWidth: 10,
                },
                ticks: {
                    stepSize: 2,
                    display: false,
                },
            },
        },
    };

    return (
        <div className={Styles.container}>
            <ChartHeader title='Users' type='dotted' />
            <div className={Styles.chartContainer}>
                <PolarArea data={data} options={options} />
            </div>
        </div>
    );
}

export default PolarChart
