import Styles from '../style.module.scss';

function User() {
    return (
        <div className={Styles.user}>
            <div className={Styles.initial}>
                <span>RH</span>
            </div>
            <p>
                <b>Reinhart H.</b>
                <span>Kemang, Jakarta</span>
            </p>
            <button>
                <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M4 6L8 10L12 6'
                        stroke='#333333'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            </button>
        </div>
    );
}

export default User;
