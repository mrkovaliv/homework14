import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams, useHistory } from "react-router-dom";
import { loadPhotos, loadUser } from '../../ducks/album';
import styles from "./Album.module.css";


const propTypes = {
    userName: PropTypes.string,
    userEmail: PropTypes.string,
    photos: PropTypes.array
}


const Album = ({ userName, userEmail, photos }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(loadUser(id));
        dispatch(loadPhotos(id));
    }, []);


    return <div className={styles["album"]}>
        <div className={styles["album-title"]}>Album page</div>
        <div className={styles["album-info"]}>{userName} - {userEmail}</div>
        <div className={styles["album-images"]}>
            {photos.map(({ thumbnailUrl, id }) =>
                <button className={styles["album-img"]} key={id} onClick={() => {
                    history.push(`/photo/${id}`);
                }}>
                    <img src={thumbnailUrl} alt="photo150" />
                </button>)}
        </div>
        <div className={styles["album-btn"]}>
            <button onClick={() => { dispatch(loadPhotos(id, photos.length)) }}>Load more</button>
        </div>

    </div>;
};

Album.propTypes = propTypes;

export default Album;