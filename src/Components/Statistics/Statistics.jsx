import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return (
        <section className={s.section}>
            {title && <h2 className={s.header}>{title}</h2>}
            <ul className={s.list}>
                {stats.map(e => (
                    <li key={e.id} className={s.item} >
                        <span className={s.span}>{e.label}</span>
                        <span>{e.percentage}</span>
                    </li>
                    
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