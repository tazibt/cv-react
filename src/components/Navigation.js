import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
       
        <div className='sidebar'>
             <div className='id'>
                  <div className='idContent'>
                    
                    <h3>ismail tazibt</h3>
                   </div>
               </div>

             <div className='navigation'>
                <ul>
                    
                     <li>
                     <NavLink to="/Home" activeClassName='navActive'>
                       <i className='fas fa-home'></i>
                         <span>home</span>
                      </NavLink>
                      </li>
                      <li>
                     <NavLink to="/Skills" activeClassName='navActive'>
                       <i className='fas fa-mountain'></i>
                         <span>skills</span>
                      </NavLink>
                      </li>
                      <li>
                     
                     <NavLink to="/Portfolio"  activeClassName='navActive'>
                      <i className='fas fa-images'></i>
                         <span>portfolio</span>
                     </NavLink>
                      </li>
                      <li>
                     <NavLink to="/Contact" activeClassName='navActive'>
                      <i className='fas fa-address-book'></i>
                         <span>contact</span>
                      </NavLink>
                      </li>               
                </ul>
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
        
        
    );
};

export default Navigation;