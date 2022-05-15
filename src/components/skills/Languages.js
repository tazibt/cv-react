import React, { Component } from 'react';
import ProgressBar from '../skills/ProgtrssBar';
class Languages extends Component {
    state ={
        languages:[
            {id: 1, value: "HTML", xp:6},
            {id: 2, value: "CSS", xp:6},
            {id: 3, value: "Javascript", xp:3.8},
            {id: 4, value: "SQL", xp:1.5},
            {id: 5, value: "PHP", xp:0.7},
        ],
        frameworks:[
            {id: 5, value: "React", xp:1},
            {id: 6, value: "jQuery", xp:2},
            {id: 7, value: "wordpress", xp:4.6},
            {id: 8, value: "bootstrap", xp:3.0},
        ]
        
    }
    render() {
        let {languages, frameworks}= this.state
        return (
            <div className='languagesFrameworks'>
                <ProgressBar 
                  languages={languages}
                  className='languageDisplay'
                  titel='languages'
                />
                <ProgressBar 
                  languages={frameworks}
                  titel='frameworks, libraries & CMS'
                  className='frameworkDisplay'
                />
            </div>
        );
    }
}

export default Languages;