const RECEIVED = 'homework14/photo/received';

const received = (data) => ({
    type: RECEIVED,
    payload: data

});

export const loadPhoto = (id) => (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}?_expand=album`)
        .then((response) => response.json())
        .then((data) => dispatch(received(data)));
};

const initialState = {
    photo: {
        albumId: 0,
        url: '',
        albumTitle: '',
        title: '',
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED:
            const { albumId, url, album, title } = action.payload;
            const albumTitle = album.title;
            return {
                photo: { albumId, url, albumTitle, title }
            }
        default:
            return state;
    }
};

export default reducer;