import React, { useCallback, useReducer, useRef } from 'react';
import TodoTemplate from './TodoList/js/TodoTemplate';
import TodoInsert from './TodoList/js/TodoInsert';
import TodoList from './TodoList/js/TodoList';

function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
        array.push({
            id: i,
            text: `할 일 ${i}`,
            checked: false
        });
    }
    return array;
}
// 함수 리렌더링 방지 방법은 두가지(useState의 함수형 업데이트 기능, useReducer)가 있음.
// Reducer를 사용하면 상태를 업데이트 하는 로직을 모아서 컴포넌트 바깥에서 관리할 수 있는 장점
// 두 방법이 성능상으로는 비슷하기 때문에 취향에 따라 결정.
function todoReducer(todos, action) { // reducer
    switch (action.type) {
        case 'INSERT':
            return todos.concat(action.todo);
        case 'REMOVE':
            return todos.filter(todo => todo.id !== action.id);
        case 'TOGGLE':
            return todos.map((todo) => todo.id === action.id ? { ...todo, checked: !todo.checked} : todo);
        default: return todos;
    }
}

const App = () => {
    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos); // reducer
    //const [todos, setTodos] = useState(createBulkTodos);  
    // createBulkTodos()형태로 넣어주면 리렌터링 될때 마다 함수 호출되며 createBulkTodos로 전달할 경우 첫 렌더링 때만 실행하게 됨.
    /*const [todos, setTodos] = useState([
        { id: 1, text: 'React Basic', checked: true },
        { id: 2, text: 'Component Style', checked: true },
        { id: 3, text: 'Make TodosApp', checked: false }
    ]);*/

    const nextId = useRef(todos.length + 1);

    const onInsert = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text: text,
            checked: false
        };

        //setTodos(todos => todos.concat(todo));
        dispatch({ type: 'INSERT', todo }); // reducer
        nextId.current += 1;
    }, []);

    const onRemove = useCallback((id) => {
        //setTodos(todos => todos.filter(todo => todo.id !== id));
        dispatch({ type: 'REMOVE', id }); // reducer
    }, []);

    const onToggle = useCallback((id) => {
        //setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
        dispatch({ type: 'TOGGLE', id }); // reducer
    }, []);

    return (
      <TodoTemplate>
          <TodoInsert onInsert={onInsert} />
          <TodoList todos={ todos } onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    );
}
export default App;