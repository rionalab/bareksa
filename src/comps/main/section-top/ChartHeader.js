import Styles from './style.module.scss';

function ChartHeader({ title, type}) {
    return (
        <div className={Styles.header}>
            <h1 className='title'>{title}</h1>
            <button className={Styles[type]}>
                {type === 'date' && (
                    <>
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
                    </>
                )}
                {type === 'dotted' && (
                    <svg
                        width='12'
                        height='4'
                        viewBox='0 0 12 4'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M1.33333 3.33341C0.596954 3.33341 0 2.73646 0 2.00008C0 1.2637 0.596954 0.666748 1.33333 0.666748C2.06971 0.666748 2.66667 1.2637 2.66667 2.00008C2.66667 2.73646 2.06971 3.33341 1.33333 3.33341ZM6 3.33341C5.26362 3.33341 4.66667 2.73646 4.66667 2.00008C4.66667 1.2637 5.26362 0.666748 6 0.666748C6.73638 0.666748 7.33333 1.2637 7.33333 2.00008C7.33333 2.73646 6.73638 3.33341 6 3.33341ZM9.33333 2.00008C9.33333 2.73646 9.93029 3.33341 10.6667 3.33341C11.403 3.33341 12 2.73646 12 2.00008C12 1.2637 11.403 0.666748 10.6667 0.666748C9.93029 0.666748 9.33333 1.2637 9.33333 2.00008Z'
                            fill='#333333'
                        />
                    </svg>
                )}
            </button>
        </div>
    );
}

export default ChartHeader
