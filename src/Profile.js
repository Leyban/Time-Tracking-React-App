import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import profilePic from './images/image-jeremy.png'


const Profile = (props) => {
    const user = 'Jeremy Robson'
    const [daily, setDaily] = useState('inactive');
    const [weekly, setWeekly] = useState('active');
    const [monthly, setMonthly] = useState('inactive');
    
    const history = useHistory();

    const handleClick = (mode) => {
        setDaily('inactive');
        setWeekly('inactive');
        setMonthly('inactive');

        if(mode === 'daily'){
            setDaily('active');
            history.push('/Time-Tracking-React-App/daily');
        } else if (mode === 'weekly'){
            setWeekly('active');
            history.push('/Time-Tracking-React-App/weekly');
        } else {
            setMonthly('active');
            history.push('/Time-Tracking-React-App/monthly');
        }
    }

    useEffect(() => {handleClick(props.timeSpan);},[])
    

    return (  
        <div className="profile" id='profile'>
            <div className="details">
                <img src={profilePic} alt="User Face" />
                <p>Report for</p>
                <h3>{user}</h3>
            </div>
            <ul>
                <li><a href="#profile" className={daily} id='daily' onClick={(e) => handleClick(e.target.id)}>Daily</a></li>
                <li><a href="#profile" className={weekly} id='weekly' onClick={(e) => handleClick(e.target.id)}>Weekly</a></li>
                <li><a href="#profile" className={monthly} id='monthly' onClick={(e) => handleClick(e.target.id)}>Monthly</a></li>
            </ul>
        </div>
    );
}
 
export default Profile;