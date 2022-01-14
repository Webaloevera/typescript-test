import { useCallback, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Categories from "./components/Categories";
import "./App.css";
import { ITodo } from "./Interfaces";

const CATEGORY_NAMES: string[] = ["COLOR", "COUNTRY", "NAMES"];

const App: React.FC = () => {
  const [productData, setProductData] = useState<ITodo[]>([]);
  const createProduct = (data: any): void => {
    const newTodo = {
      ...data,
      id: Date.now(),
      comlited: false,
    };
    setProductData((prev) => [newTodo, ...prev]);
    console.log(productData);
  };

  const onRemove = useCallback(
    (id: number): void => {
      setProductData((prev) => prev.filter((todo) => todo.id !== id));
    },
    [productData, setProductData]
  );

  const [activeCategory, setActiveCategory] = useState<null | number>(null);

  const onClickCategory = (index: number): void => {
    setActiveCategory(index);
    filterCategories(index);
  };

  const filterCategories = useCallback(
    (id: number): void => {
      setProductData((prev) =>
        prev.filter((todo) => Number(todo.category) === id)
      );
    },
    [onClickCategory, productData]
  );
  return (
    <div className="App">
      <Form onFormSubmit={createProduct} />
      <Categories
        activeCategory={activeCategory}
        onClickCategory={onClickCategory}
        nameCategories={CATEGORY_NAMES}
      />
      <TodoList onRemove={onRemove} todos={productData} />
    </div>
  );
};

export default App;
