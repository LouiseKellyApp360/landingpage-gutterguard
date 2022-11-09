import React, {useEffect} from 'react';
import '../../../assets/styles/Works.css';
import $ from 'jquery';
import videoPoster from '../../../assets/image/banner-image.png'
import videoWorks from '../../../assets/video/Gutterguards.mp4';

const Works = ({userData: {worksTitle, worksDescription}}) => {
    useEffect(() => {
        $(document).ready(function () {
            $(".video-wrapper").click(function () {
                if ($(".video").get(0).paused) {
                    $(".video").trigger("play");
                    $(".playpause").fadeOut(500);
                } else {
                    $(".video").trigger("pause");
                    $(".playpause").fadeIn(500);
                }
            });
        });
    }, [])

    return (
        <div className={'works'}>
            <div className={'works-title'}>
                <h1>{worksTitle}</h1>
            </div>
            <div className={'works-why'}>
                <p>{worksDescription}</p>
            </div>

            <div className="video-wrapper">
                <video className="video" src={videoWorks} poster={videoPoster}></video>
                <div className="playpause"></div>
            </div>

        </div>

    )};

export default Works;