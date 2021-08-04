import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                        Join the Adventure newsletter to receive our best vaction deales
                    </p>
                    <p className='footer-subscription-text'>
                        Your can sunsubscribe at any time
                    </p>
                    <div className='input-areas'>
                        <form>
                            <input type='email' name='email' placeholder='Your email' className='footer-input' />
                            <Button buttonStyle='btn-primary'>Subscrbe</Button>
                        </form>
                    </div>
                </section>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>about</h2>
                            <Link to='./pages/SignUp.js'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Cantect</Link>
                            <Link to='/'>Investeres</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>                        
                        <div className='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='./pages/SignUp.js'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Cantect</Link>
                            <Link to='/'>Investeres</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>Video</h2>
                            <Link to='./pages/SignUp.js'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Cantect</Link>
                            <Link to='/'>Investeres</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>                        
                        <div className='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to='./pages/SignUp.js'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Cantect</Link>
                            <Link to='/'>Investeres</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>
                    </div>
                </div>
                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='footer-logo'>
                            <Link to='/' className='soaial-logo'>
                                TRVL <i className='fab fa-typo3' />
                            </Link>
                        </div>
                        <small className='website-rights'>HRVAL  2020</small>
                        <div className='social-icons'>
                            <Link className='social-icon-link facebook'
                                to='/'
                                target='-blank'
                                aria-label='Facebook'
                            >
                                <i className='fab fa-facebook'></i>
                            </Link>
                            <Link className='social-icon-link instagram'
                                to='/'
                                target='-blank'
                                aria-label='Instagram'
                            >
                                <i className='fab fa-instagram'></i>
                            </Link>                            
                            <Link className='social-icon-link tw'
                                to='/'
                                target='-blank'
                                aria-label='Instagram'
                            >
                                <i className='fab fa-instagram'></i>
                            </Link>                            
                            <Link className='social-icon-link instagram'
                                to='/'
                                target='-blank'
                                aria-label='Instagram'
                            >
                                <i className='fab fa-instagram'></i>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer

