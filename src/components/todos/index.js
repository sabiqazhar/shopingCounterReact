import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './todos.module.css'
import plusIcon from '../../assets/plus-icon.svg'
import minusIcon from '../../assets/minus-icon.svg'

const todos = ({todos, handleAdd, handleSub}) => {
    return (
        <div className={styles.todos}>
            {todos.map((todo, index, arr) => {
              return (
                <div 
                    key={index}
                    className={classNames(styles.todo, {
                        [styles.todoDevider]: !(arr.length === index + 1)
                    })}
                >
                  
                  {todo.title}
                  
                  <div className={styles.todoIconWrapper}>
                    <div className={styles.todoCount}>{todo.count}</div>

                    <button onClick={()=> handleSub(index)}
                    className={styles.todoActionButton}>
                      <img src={minusIcon} alt='minus-icon'/>
                    </button>

                    <button onClick={() => handleAdd(index)}
                    className={styles.todoActionButton}>
                      <img src={plusIcon} alt='plus-icon'/>
                    </button>
                  </div>
                </div>
              )
            })}
        </div>
    )
}

todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number
    })),
    handleSub: PropTypes.func,
    handleAdd: PropTypes.func
}

export default todos




