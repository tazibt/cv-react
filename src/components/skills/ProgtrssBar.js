import React from 'react';

const ProgtrssBar = (props) => {

    return (
        <div className='=props.className'>
            <h3>{props.titel}</h3>
            <div className='years'>
                <span>years of experience</span>
                <span>3 Years</span>
                <span>6 years</span>
                
            </div>
            <div>
                {
                    props.languages.map((item) => {
                        let xpYears = 6;
                        let progressBar = item.xp / xpYears * 100 + '%';
                    
                        return (
                            <div key={item.id} className="languagesList">
                              <li>{item.value}</li>
                              <div className="progressBar" 
                                   style={{width:progressBar}}>
                                </div>

                            </div>
                        )
                    
                    })
                        
                
                    
                }
                
            </div>
        </div>
    );
};

export default ProgtrssBar;