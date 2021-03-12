const RECEIVED = 'homework14/main_page/received';

const received = (data) => ({
    type: RECEIVED,
    payload: data

});

export const loadPhotos = (from = 0) => (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?_offset=${from}&_limit=${from + 6}`)
        .then((response) => response.json())
        .then((data) => dispatch(received(data)));
};

const initialState = {
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED:
            return {
                data: action.payload
            }
        default:
            return state;
    }
};

export default reducer;