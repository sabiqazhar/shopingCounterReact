import PropTypes from 'prop-types'
import styles from './info.module.css'

const Info = ({todosLength, totalCounts, onDelete}) => {
    return (
        <div className={styles.info}>
          <div className={styles.infoTotal}>
            <p>{`Total list: ${todosLength}`}</p>
          </div>
          
          <div className={styles.infoTotal}>
            <p>{`Total Count: ${totalCounts}`}</p>
          </div>

          <button onClick={onDelete} className={styles.deleteAllBtn}>
            Delete all list
          </button>
        </div>
    )
}

Info.propTypes = {
    todosLength: PropTypes.number,
    totalCounts: PropTypes.func,
    onDelete: PropTypes.func,
}

export default Info