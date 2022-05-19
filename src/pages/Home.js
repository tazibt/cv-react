import { MdFileDownload} from "react-icons/md";
import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className='homeContent'>
                <h1>ismail tazibt</h1>
                    <h2>web developer</h2>
                    <div className='pdf'>
                        <a href='./media/CV.pdf' target='_blank'>Cv pdf<MdFileDownload/></a>
                    </div>
                
                    
                    <div className='socialNetwork'>
                    <ul>
                     <li>
                         <a href='https://www.linkedin.com/in/it-220771239'target='_blanc'
                         rel='noopener noreferrer.'><i className='fab fa-linkedin'></i></a>
                      </li>
                     <li>
                          <a href='https://github.com/tazibt'target='_blanc'
                            rel='noopener noreferrer.'><i className='fab fa-github'></i></a>
                        </li> 
                     <li>
                          <a href='https://codepen.io/tazibt'target='_blanc'
                            rel='noopener noreferrer.'><i className='fab fa-codepen'></i></a>
                         </li>     
                     </ul>
                
                     </div> 
                        
                
                    
                                      
                                       
                    
            
            </div>
        </div>
    );
};

export default Home;