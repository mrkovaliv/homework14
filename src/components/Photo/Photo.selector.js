import { createSelector, createStructuredSelector } from 'reselect';
import photo from '../../ducks/photo';

const selectorPhoto = createSelector(
    (state) => state.photo,
    ({ photo }) => photo ? photo : {}

);

export default selectorPhoto;