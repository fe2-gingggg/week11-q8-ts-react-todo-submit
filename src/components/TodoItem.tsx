import { CSSProperties } from 'react'
import { Todo } from '../modules/todos'
import { MdDelete } from 'react-icons/md'

type TodoItemProps = {
  todo: Todo
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  const handleToggle = () => onToggle(todo.id)
  const handleRemove = () => onRemove(todo.id)

  const ListItemStyle: CSSProperties = {
    color: '#686868',
  }
  const ListItemBoxStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  }
  const textStyle: CSSProperties = {
    textDecoration: todo.done ? 'line-through' : 'none',
    fontWeight: 'bold',
    fontSize: 18,
  }
  const removeStyle: CSSProperties = {
    color: '#ff6b6b',
    marginLeft: 8,
    fontSize: 21,
    display: 'flex',
    alignItems: 'center',
  }

  return (
    <li style={ListItemStyle}>
      <div style={ListItemBoxStyle}>
        <span onClick={handleToggle} style={textStyle}>
          {todo.text}
        </span>
        <span onClick={handleRemove} style={removeStyle}>
          {<MdDelete />}
        </span>
      </div>
    </li>
  )
}

export default TodoItem
