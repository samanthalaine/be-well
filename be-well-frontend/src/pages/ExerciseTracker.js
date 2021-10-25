import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'




function ExerciseTracker() {
    const [ completed, setCompleted ] = useState(false)
    const [ currentDays, setCurrentDays ] = useState(0)

    const aqua = "#00ACC1"
    const grey = "#B0BEC5"

    const data = {
        labels: [
            "Today",
        ],
        datasets: [{
            backgroundColor: [aqua, grey],
            data: [100, 100]
        }]
    };
    return (
        <Paper style={{padding :20,height:'95vh',width:500, margin:"100px auto"}}>
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Exercise Tracker</h3>
            <Doughnut 
                data={data}
                />
                <Button style={{ background: "#B2EBF2", display: 'flex', alignItems: 'center', justifyContent: 'center', margin:"40px auto" }}>Click to Complete</Button>
        </Paper>
    )
}

export default ExerciseTracker
