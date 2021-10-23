import DatePicker from './DatePicker';
import Styles from './style.module.scss';
import Table from './Table';

function SectionBottom() {

    return (
        <div className={Styles.sectionBottom}>
            <div className={Styles.datepicker}>
                <DatePicker />
            </div>
            <div className={Styles.table}>
                <Table />
            </div>
        </div>
    );
}

export default SectionBottom;
