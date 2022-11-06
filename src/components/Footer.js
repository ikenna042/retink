import { SocialIcon } from 'react-social-icons';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div>
            <div className="main-footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div><img src={logo} className="logo" alt="logo" /></div>
                    </div>
                    <div className="col">
                        Connect with us
                        <div className="row mt-1">
                        <SocialIcon url='https://www.facebook.com' className='socials' />
                        <SocialIcon url='https://www.twitter.com' className='socials' />
                        <SocialIcon url='https://www.instagram.com' className='socials' />
                        <SocialIcon url='https://www.linkedin.com' className='socials' />
                        <SocialIcon url='https://www.youtube.com' className='socials' />
                        <SocialIcon url='https://www.pinterest.com' className='socials' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 location">
                        <div>Product by Retink Media UG</div>
                        <div className='mt-2'>Bonn, Germany</div>
                    </div>
                    <div className="col-4 location">
                        <div>Get Early Access</div>
                        <div className='mt-2'>Provide Feedback</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="row">
                <div className="col text-start">
                    Copyright &#169; 2021 Retink
                </div>
                <div className="col text-end">
                    Terms of Service
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;