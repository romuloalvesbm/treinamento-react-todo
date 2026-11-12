import { TodoItemContainer } from "./TodoItem.styles";

function TodoItem({ id, tarefa, prioridade, concluido, onRemove, onToggle }) {
  return (
    <TodoItemContainer prioridade={prioridade}>
      <p onClick={() => onToggle(id)} className={concluido? "concluido" : ""} >{tarefa}</p>
      <span>Prioridade: {prioridade}</span>
      <button onClick={() => onRemove(id)}>X</button>
    </TodoItemContainer>
  );
}

export default TodoItem;
