import React from 'react';
import { Link } from 'react-router-dom'
import Platter1 from '../../Assets/Platter1.jpg';
import Platter2 from '../../Assets/Platter2.jpg';
import Platter3 from '../../Assets/Platter3.jpg'
import './Home.css';

const Home = () => {
    return (
        <div className='homeContainer'>
            <div className='imageContainer'>
                <img className='cheesePlatterImg' src={Platter2} alt='A Cheese Platter' />
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
                <p className='welcomeText'>Now if you're anything like me you enjoy eating chunks of dairy paired with a nice meat on a tasty cracker.
                It's one thing to take it out of the fridge for a personal snack, but what happens when you have guests over? Laying it out on a platter
                is a terrific idea, but sometimes one that is easier said than done. Or maybe you bought all the charcuterie your heart desires only
                to realize you can't fit it all? Well, before you get your prosciutto all in a bunch give the virtual build your own board a try! It's
                made to make your visual planning easier, so you can spend more time eating! </p>
            </div>
            <div className='imageContainer'>
                <img className='cheesePlatterImg' src={Platter1} alt='Another Cheese Platter' />
            </div>
            <div className='imageAndButtonContainer'>
                <div className='imageContainer'>
                    <img className='cheesePlatterImg' src={Platter3} alt='A third Cheese Platter' />
                </div>
                <div className='textContainer'>
                <Link to='/build'>
                     <button 
                        className='buildButton'
                        >
                            Build A Board!
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
