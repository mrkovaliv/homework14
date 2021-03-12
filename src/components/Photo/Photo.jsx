import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { loadPhoto } from '../../ducks/photo';
import styles from "./Photo.module.css";


const propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    albumTitle: PropTypes.string,
    albumId: PropTypes.number
}


const Photo = ({ url, title, albumId, albumTitle }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        dispatch(loadPhoto(id));
    }, [])

    return <div className={styles["photo"]}>
        <div className={styles["title"]}>Single photo</div>
        <div className={styles["photo-block"]}>
            <div className={styles["photo-img"]}>
                <img src={url} alt="photo600" />
            </div>
            <div>
                <div className={styles["photo-name"]}>{title}</div>
                <div className={styles["photo-album"]}>
                    <button onClick={() => {
                        history.push(`/album/${albumId}`)

                    }}>
                        {albumTitle}
                    </button>
                </div>
            </div>
        </div>
    </div>;
};

Photo.propTypes = propTypes;

export default Photo;