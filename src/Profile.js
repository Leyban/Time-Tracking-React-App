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
            console.log("handleClicked daily");
            history.push('/daily');
        } else if (mode === 'weekly'){
            setWeekly('active');
            console.log("handleClicked weekly");
            history.push('/weekly');
        } else {
            setMonthly('active');
            console.log("handleClicked monthly");
            history.push('/monthly');
        }
    }

    useEffect(() => {handleClick(props.timeSpan);},[]);
    

    return (  
        <div className="profile" id='profile'>
            <div className="details">
                <img src={profilePic} alt="User Face" />
                <p>Report for</p>
                <h3>{user}</h3>
            </div>
            <ul>
                <li><button className={daily} id='daily' onClick={(e) => handleClick(e.target.id)}>Daily</button></li>
                <li><button className={weekly} id='weekly' onClick={(e) => handleClick(e.target.id)}>Weekly</button></li>
                <li><button className={monthly} id='monthly' onClick={(e) => handleClick(e.target.id)}>Monthly</button></li>
            </ul>
        </div>
    );
}
 
export default Profile;