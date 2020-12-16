import Workout from "../../Components/Workout/Workout";
import Exercise from "../../Components/Exercise/Exercise";

const exercises = {
    1: {  name: "Pushups" },
    2: {  name: "Pullups" },
    3: {  name: "Squats" }
}

const workout =
    {
        id: 1,
        name: 'My custom workout',
        exercises: [
            {
                id: 1,
                reps: 10
            },
            {
                id: 2,
                reps: 10
            },
            {
                id: 3,
                reps: 10
            }
        ]
    }


export default function Workouts() {
    return (
        <div >
            <h1>Workout</h1>


            <div className="flex ">
                <div className="p-4 mr-4 bg-indigo-600 text-white rounded">
                    { Object.keys(exercises).map((key) => <Exercise name={exercises[key].name} id={key} />) }
                </div>

                <div className="p-4 bg-indigo-600 text-white rounded">
                    {
                        workout.exercises.map((exercise) => <WorkoutExercise exercise={exercise} />)
                    }
                </div>
            </div>


        </div>
    )
}

function WorkoutExercise({exercise}) {
    return <div>
        {exercises[exercise.id].name} - {exercise.reps}
    </div>
}
