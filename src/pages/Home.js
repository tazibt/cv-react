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
            </div>
        </div>
    );
};

export default Home;