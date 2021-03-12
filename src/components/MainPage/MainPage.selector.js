import { createSelector } from 'reselect';
import mainPage from '../../ducks/mainPage';

const selectorPhotosMain = createSelector(
    (state) => state.mainPage,
    ({ data }) => data ? data : []
)

export default selectorPhotosMain;