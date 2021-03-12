import { createSelector, createStructuredSelector } from 'reselect';
import photo from '../../ducks/album';

const photoSelector = (state) => state.album;

const userSelector = createSelector(
    photoSelector,
    ({ user }) => user ? user : {}

);
const photosSelector = createSelector(
    photoSelector,
    ({ photos }) => photos ? photos : {}

);

const selectorAlbum = createStructuredSelector({
    user: userSelector,
    photos: photosSelector
});

export default selectorAlbum;
