import { useCallback, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";
import {ITodo} from './Interfaces'



const App: React.FC = () => {

  const [productData, setProductData] = useState<ITodo[]>([]);
  const createProduct = (data: any) => {
    const newTodo = {
      ...data,
      id: Date.now(),
      comlited: false
    }
    setProductData(prev => [newTodo, ...prev]);
    console.log(productData);
  };

  const onRemove = useCallback((id:number):void => {
    setProductData(prev => prev.filter(todo => todo.id !== id))
  }, [productData, setProductData])

  return (
    <div className="App">
      <Form onFormSubmit={createProduct} />
      <TodoList onRemove={onRemove} todos={productData} />
    </div>
  );
};

export default App;
