import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className='contactContent'>
                <div className='header'></div>
                <div className='contactBox'>
                    <h1>coordinates</h1>
                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Marseille</span>
                        </li>
                        <li>
                            <i className='fas fa-mobile-alt'></i>
                            <CopyToClipboard text='0637444924'>
                                <span className='clickInput' onClick={() => alert('Telephone copié')}>06 37 44 49 24</span>
                            </CopyToClipboard>                            
                        </li>
                        <li>
                           <i className='fas fa-envelope'></i>
                              <CopyToClipboard text='tazibt2010@gmail.com'>
                                <span className='clickInput' onClick={() => alert('E-mail  copié')}>tazibt2010@gmail.com</span>
                              </CopyToClipboard>                      
                        </li>
                    </ul>
                </div>
                

            </div>
        </div>
    );
};

export default Contact;
