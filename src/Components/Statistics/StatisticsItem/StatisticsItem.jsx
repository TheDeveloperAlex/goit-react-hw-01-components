import s from './StatisticsItem.module.css';

const StatisticsItem = ({ label, percentage }) => {
    return (
        <li  className={s.item} >
            <span className={s.span}>{label}</span>
            <span>{percentage}</span>
        </li>
    );
}

export default StatisticsItem;

