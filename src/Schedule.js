import work     from './images/icon-work.svg';
import study    from './images/icon-study.svg';
import social   from './images/icon-social.svg';
import selfCare from './images/icon-self-care.svg';
import play     from './images/icon-play.svg';
import exercise from './images/icon-exercise.svg';
import ellipsis from './images/icon-ellipsis.svg';
import data     from './database/data.json'
import Profile  from './Profile'

const Schedule = (props) => {
    const activities = [    {"logo":work,       "title":"Work",         id:1},
                            {"logo":study,      "title":"Study",        id:2},
                            {"logo":social,     "title":"Social",       id:3},
                            {"logo":selfCare,   "title":"Self Care",    id:4},
                            {"logo":play,       "title":"Play",         id:5},
                            {"logo":exercise,   "title":"Exercise",     id:6}];

    const database = data;

    return (
        <div className="activities">
            <Profile timeSpan={props.timeSpan}/>
            {activities.map(act => {return(
                <div className={`activity-${act.id} container`} key={act.id}>
                    <img src={act.logo} alt='activity logo'/>
                    <div className="sched-details">
                        <div className="sched-top-row">
                            <p>{act.title}</p>
                            <a href="#"><img src={ellipsis} alt="mini menu button" /></a>
                        </div>

                            {database.map(activeData => { if(activeData.title == act.title){
                                return (
                                    <div className="sched-bottom-row" key={activeData.title}>
                                        <h1>{activeData.timeframes[props.timeSpan].current}hrs</h1>
                                        <p>Last Week - {activeData.timeframes[props.timeSpan].previous}hrs</p>
                                    </div> 
                                )
                            }})}
                    </div>
                </div>
            )})}
        </div>
    );
}
 
export default Schedule;