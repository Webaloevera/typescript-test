import React from "react";
import "./todolist.css";
import { ITodo } from '../../Interfaces'

interface ITodoProps {
  todos: ITodo[]
  onRemove: (id: number | undefined) => void
}

const TodoList: React.FC<ITodoProps> = ({ todos, onRemove }) => {
  return (
    <div>
      <div className="cards">
        {todos &&
          (todos || []).map((item) => {
            return (
              <div key={item.id} className="card">
                <img src={item.image} alt="" />
                <div className="card__info">
                  <p>{item.name}</p>
                </div>
                <div className="card__delete">
                    <i onClick={() => onRemove(item.id)}>Delete</i>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
