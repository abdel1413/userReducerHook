import { useReducer } from "react";
import { initialState } from "./InitialState";
import { Reducer as reducer } from "./Reducer";

export const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const handleChange = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChange(todo)}
              />
              {todo.title}
            </label>
          </div>
        );
      })}
    </div>
  );
};
