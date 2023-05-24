import React from 'react';
import Platter1 from '../../Assets/Platter1.jpg';
import Platter2 from '../../Assets/Platter2.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className='homeContainer'>
            <div className='imageContainer'>
                <img className='cheesePlatterImg' src={Platter1} alt='A Cheese Platter' />
            </div>
            <div className='textContainer'>
                <h1>Welcome</h1>
                <p className='welcomeText'>Hello all you classy people! If you're reading this, you are probably looking to make what we in the 
                business call a "shar-cute-a-ree" board (don't worry, it took me about a year to learn how to properly pronounce it too). These boards 
                are a great way to entertain, feed, and more often than not impress your guests. The best part about them is that there is not one 
                set-in-stone right way to make them! Think that cheese looks nice next to those crackers? Boom, throw it on. It's whatever looks visually 
                appealing to your eye. Guest doesn't like it? Tell them it's abstract or kick them out, the choice is yours.</p>
            </div>

            <div className='textContainer'>
                <p className='welcomeText'>Hello all you classy people! </p>
            </div>
            <div className='imageContainer'>
                <img className='cheesePlatterImg' src={Platter2} alt='Another Cheese Platter' />
            </div>
        </div>
    );
};

export default Home;
