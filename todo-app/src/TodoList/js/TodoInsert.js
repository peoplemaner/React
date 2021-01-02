import { MdAdd } from 'react-icons/md';
import '../css/TodoInsert.scss';
import { useState, useCallback } from 'react';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []); // 두번째 파라미터가 없으면 리렌더링 떄마다 함수가 새로 생성됨, []면 첫 렌더링에 한번 생성됨, [value]면 value가 변경될 때마다 새로 생성됨.

    const onSubmit = useCallback((e) => {
        onInsert(value);
        setValue(''); // value값 초기화
        // 이벤트는 브라우저에서 새로고침을 발생 시킴.
        // 이를 방지하기 위해 이 함수를 호출.
        e.preventDefault();
    }, [onInsert, value]);

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="일정을 입력하세요" value={value} onChange={onChange} />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;