import React from 'react';
import Navigation from '../components/Navigation';
import Hobbies from '../components/skills/Hobbies';
import Languages from '../components/skills/Languages';
import OtherSkills from '../components/skills/OtherSkills';
const Skills = () => {
    return (
        <div>
            <div className='skills'>
               <Navigation />            
               <div className='skillsContent'>
                   <Languages />
                   <OtherSkills />
                   <Hobbies />
                    
               </div>
            </div>
            
        </div>
    );
};

export default Skills;