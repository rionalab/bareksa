import React from 'react'
import LineChart from './LineChart'
import PieChart from './PieChart'
import PolarChart from './PolarChart'
import Styles from './style.module.scss'

function SectionTop() {

    return (
        <div className={Styles.sectionTop}>
            <PieChart />
            <PolarChart />
            <LineChart />
        </div>
    );
}

export default SectionTop
