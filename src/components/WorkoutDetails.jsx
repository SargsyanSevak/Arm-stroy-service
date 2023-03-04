import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {

  return (
    <div className="workout-details">
      <h4 style={{color:'red'}}>{workout.title}</h4>
      <p style={{color:'green'}}>{workout.load}</p>
      <p style={{color:'blue'}}>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
    </div>
  )
}

export default WorkoutDetails