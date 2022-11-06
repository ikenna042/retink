import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import videoplayback from '../assets/videoplayback.mp4';

const VideoPlayer = () => {
    return (
        <Video autoplay  loop>
            <source src={videoplayback} type="video/mp4" width={250} />
        </Video>
    )
}

export default VideoPlayer;