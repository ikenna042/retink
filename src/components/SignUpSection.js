import './SignUpSection.css'

const SignUpSection = () => {
    return (
        <div className="mt-4 mb-5 justify-content-md-center">
                <div className="signup-text text-center mb-3">Sign Up For The BETA to see more</div>
                <div className="row justify-content-md-center">
                    <div className="col-2">
                        <input className='form-input text-center' type="text" placeholder='Business Name' />
                    </div>
                    <div className="col-2">
                        <input className='form-input text-center' type="text" placeholder='Email' />
                    </div>
                </div>
                <div className="row text-center mt-4">
                <div className='mb-4'>
                    <button type='button' className="notify-btn button"><span> Notify me </span></button>
                </div> 
                <div>
                <button type='button' className="signup-btn button"><span> Sign up as a freelance partner </span></button>
                </div>
                </div>
            </div>
    )
}

export default SignUpSection;