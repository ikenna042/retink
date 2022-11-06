import { useSpring, animated } from 'react-spring';

import logo from '../assets/logo.png';
import avatar from '../assets/avatar.png';
import VideoPlayer from '../components/VideoPlayer';
import IconCardGroup from '../components/IconCardGroup';
import ServiceCardGroup from '../components/ServiceCardGroup';
import SignUpSection from '../components/SignUpSection';

const Home = () => {
    const styles = useSpring({
        from: { opacity: 0, marginTop: -500 },
        to: { opacity: 1, marginTop: 0 },
        config: { duration: 1000 }
    });

    const stylesImg = useSpring({
        from: { opacity: 0, marginLeft: -500 },
        to: { opacity: 1, marginLeft: 0 },
        config: { duration: 1500 },
        delay: 1000,
    });
    return (
        <animated.div style={styles} className="home">
            <div className="container">
            <div className="row">
                <div className="col-8 mt-5">
                    <img src={logo} className="logo" alt="logo" />
                    <div className="row">
                        <div className="col">
                            <h4 className='title mt-4'>Get Advanced AI <br />+ Expert Created</h4>
                        </div>
                        <div className="col">
                            <h4 className='title mt-5' style={{color: '#7E1CFE'}}> Logos </h4>
                        </div>
                    </div>
                    <div className="sub-title mt-4">
                        Boost your sales 10x faster with content customized by our unique partnership of human creativity and AI optimization
                    </div>
                    <div className="signup-text mt-4">
                        Sign Up For The BETA!
                    </div>
                    <div className="invite">
                        <input className='business-input' type="text" id='business-name' placeholder="Business name"/> would like a beta invite sent to <input className='business-input' type="text" placeholder="@email address"/> when it’s ready!
                    </div>
                    <div className="row mt-4">
                        <div className="col-4">
                            <button type='button' className="notify-btn button"> <span>Notify me</span>  </button>
                        </div>
                        <div className="col text-left">
                            <button type='button' className="signup-btn button"><span> Sign up as a freelance partner </span></button>
                        </div>
                    </div>
                </div>
                <animated.div style={stylesImg} className="col-4">
                    <img src={avatar} className="avatar" alt="retink avatar" />
                </animated.div>
            </div>
            <h2 className="signup-text text-center mt-5"> EXPLAINER </h2>
            <div className="mb-4 video-container text-center mt-4">
                <VideoPlayer />
            </div>
            <div className="group-cards mb-5">
                <IconCardGroup />
            </div>
            <div className='mt-5'>
                <h4 className='signup-text text-center mt-4'>Transform your Creation Process</h4>
                <div className='card-subtitle text-center'>
                    With a new approach toordering content, you can now stop juggling multiple <br /> documents and meetings and start publishing content faster and on demand
                </div>
            </div>

            <div className='mb-5'>
                <h4 className='signup-text text-center mt-4'>Activate your business growth with RetinkContent.</h4>
                <div className='card-subtitle text-center'>
                    Save time and maintain your brand identity within your budget range or  <br /> sign up for affordable plans and still access multiple content services like:
                </div>
            </div>
                <ServiceCardGroup />
                <SignUpSection />
            </div>
            
            
        </animated.div>
        
    )
}

export default Home;