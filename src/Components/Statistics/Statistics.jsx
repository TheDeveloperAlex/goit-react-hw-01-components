import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem/StatisticsItem';

const Statistics = ({ title, stats }) => {
    return (
        <section className={s.section}>
            {title && <h2 className={s.header}>{title}</h2>}
            <ul className={s.list}>
                {stats.map(({ id, label, percentage }) => (
                    <StatisticsItem label={label} percentage={percentage} key={id} />
                ))}
                </ul>
        </section>
    )
        
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.object,   
    )
}

export default Statistics;