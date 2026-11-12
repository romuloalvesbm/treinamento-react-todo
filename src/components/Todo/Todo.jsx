import { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoContainer } from "./Todo.styles";

function Todo() {
  // const tarefas = [
  //   { id: crypto.randomUUID(), titulo: "Fazer compras" },
  //   { id: crypto.randomUUID(), titulo: "Estudar" },
  //   { id: crypto.randomUUID(), titulo: "Entregar Projeto" },
  // ];

  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });
  const [titulo, setTitulo] = useState("");
  const [prioridade, setPrioridade] = useState("Baixa");

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function addTarefa(e) {
    // tarefas.push(
    //   { id: crypto.randomUUID(), titulo: "Nova tarefa" },
    // );
    e.preventDefault(); //previnindo o comportamento padrão do form

    const novaTarefa = {
      id: crypto.randomUUID(),
      titulo: titulo,
      prioridade: prioridade,
      concluido: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTitulo("");

    console.log(novaTarefa);
  }

  function removeTarefa(id) {
    // console.log(id);
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  function alterConclusao(id) {
    setTarefas(
      tarefas.map((item) =>
        item.id === id ? { ...item, concluido: !item.concluido } : item,
      ),
    );
  }
  return (
    <TodoContainer>
      <h3>Crie sua tarefas</h3>
      <form onSubmit={addTarefa}>
        <input
          type="text"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          placeholder="Tìtulo da Tarefa"
        />

        <select
          value={prioridade}
          onChange={(event) => setPrioridade(event.target.value)}
        >
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>

        <button type="submit" disabled={!titulo.trim()}>
          Adicionar tarefa
        </button>
      </form>

      {tarefas.map((item) => (
        <TodoItem
          tarefa={item.titulo}
          id={item.id}
          key={item.id}
          prioridade={item.prioridade}
          concluido={item.concluido}
          onToggle={alterConclusao}
          onRemove={removeTarefa}
        />
      ))}
    </TodoContainer>
  );
}

export default Todo;
