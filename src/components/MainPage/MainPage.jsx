import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { loadPhotos } from '../../ducks/mainPage';
import styles from './MainPage.module.css';


const propTypes = {
    images: PropTypes.array
}

const MainPage = ({ images }) => {
    const dispatch = useDispatch();
    let history = useHistory();
    useEffect(() => {
        dispatch(loadPhotos());
    }, [])

    return <div className={styles["main"]}>
        <div className={styles["main-title"]}>Photos</div>
        <div className={styles["main-images"]}>
            {images.map(({ thumbnailUrl, id }) =>
                <button className={styles["main-img"]} key={id} onClick={() => {
                    history.push(`/photo/${id}`);
                }}>
                    <img src={thumbnailUrl} alt="photo150" />
                </button>)}
        </div>
        <div className={styles["main-btn"]}>
            <button onClick={() => { dispatch(loadPhotos(images.length)) }}>Load more</button>
        </div>

    </div>;
};

MainPage.propTypes = propTypes;

export default MainPage;