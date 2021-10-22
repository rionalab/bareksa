import Styles from './style.module.scss';
import { Pie } from 'react-chartjs-2';
import ChartHeader from './ChartHeader';

function PieChart() {
    const data = {
        labels: ['Item#1', 'Item#2', 'Item#3', 'Item#4'],
        datasets: [
            {
                label: '# of Votes',
                data: [20, 19, 10, 17],
                backgroundColor: ['#EBA45E', '#E4EAEB', '#725E9C', '#5C8F94'],
                borderColor: ['#EBA45E', '#E4EAEB', '#725E9C', '#5C8F94'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 5,
                    usePointStyle: true,
                },
            },
        },
    };

    return (
        <div className={Styles.container}>
            <ChartHeader title='Conversion' type='dotted' />
            <div className={Styles.chartContainer}>
                <Pie data={data} options={options} />
            </div>
        </div>
    );
}

export default PieChart;
