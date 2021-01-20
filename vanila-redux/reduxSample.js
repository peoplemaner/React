// 액션(action)
// {
//     type: 'TOGGLE_VALUE',
//     data: {
//         id: 1,
//         text: '리덕스 배우기'
//     }
// }

// {
//     type: 'CHANGE_INPUT',
//     text: '안녕하세요'
// }

// 액션 함수(action creator)
function addTodo(data) {
    return {
        type: 'ADD_TODO',
        data
    };
}

const changeInput = text => ({
    type: 'CHANGE_INPUT',
    text
});

// 리듀서(reducer)
const initialState = { counter: 1 };

function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return { counter: state.counter + 1 };
        default: return state;
    }
}
// 구독(subscribe)
const listener = () => {
    console.log('상태가 업데이트됨');
}
const unsubscribe = store.subscribe(listener);

unsubscribe(); // 추후 구독을 비활성화할 떄 함수 호출