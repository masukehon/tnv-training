
const words = [
    { _id: 'a1', en: 'one', vn: 'mot', isMemorized: true },

    { _id: 'a2', en: 'two', vn: 'hai', isMemorized: false },

    { _id: 'a3', en: 'three', vn: 'ba', isMemorized: false },

    { _id: 'a4', en: 'four', vn: 'bon', isMemorized: true }
];

export function WordReducer(state = words, action) {
    if (action.type === 'REMOVE_WORD') {
        return state.filter(x => x._id !== action._id);
    }
    if (action.type === 'UPDATE_MEMORIZED') {
        return state.map(x => {
            if (x._id !== action._id) {
                return x;
            }
            // return {_id: x._id, en: x.en, vn: x.vn, isMemorized: !x.isMemorized};
            return {...x, isMemorized: !x.isMemorized};
        });
    }
    if (action.type === 'ADD_WORD') {
        return state.concat(action.newWord);
    }
    return state;
}

export function FilterReducer(state = 'SHOW_ALL', action) {
    if (action.type === 'MESSAGE') {
        state = action.filter;
    }
    return state;
}
