const RECEIVED_PHOTOS = 'homework14/album/received_photo';
const RECEIVED_USER = 'homework14/album/received_user';

const receivedPhotos = (data) => ({
    type: RECEIVED_PHOTOS,
    payload: data

});
const receivedUser = (data) => ({
    type: RECEIVED_USER,
    payload: data

});

export const loadPhotos = (id, from = 0) => (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}&_offset=${from}&_limit=${from + 6}`)
        .then((response) => response.json())
        .then((data) => dispatch(receivedPhotos(data)));
};

export const loadUser = (id) => (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}?_expand=user`)
        .then((response) => response.json())
        .then((data) => dispatch(receivedUser(data)));
};

const initialState = {
    photos: [],
    user: {
        name: '',
        email: ''
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_PHOTOS:
            return {
                ...state,
                photos: action.payload
            }
        case RECEIVED_USER:
            const { user } = action.payload;
            const { name, email } = user;
            return {
                ...state,
                user: {
                    name,
                    email
                }
            }
        default:
            return state;
    }
};

export default reducer;