import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import Navbar from '../components/Navbar'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'




function ExerciseTracker() {
    const [ completed, setCompleted ] = useState(false)
    const [ currentDays, setCurrentDays ] = useState(0)

    const aqua = "#00ACC1"
    const grey = "#B0BEC5"

    let data = {
        labels: [
            "Completed",
            
        ],
        datasets: [{
            backgroundColor: [aqua],
            data: 0
        }]
    };

    let chartData = data.datasets[0].data
    console.log(chartData)

    

    const addCompletion=()=>{
        if (chartData === 0) {
            return chartData + 1 
        }
    }
    addCompletion()
    


    return (
        <>
        <Navbar/>
        <Paper style={{padding :20,height:'95vh',width:500, margin:"100px auto"}}>
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Exercise Tracker</h3>
            <Doughnut 
                data={data}
                />
                <Button style={{ background: "#B2EBF2", display: 'flex', alignItems: 'center', justifyContent: 'center', margin:"40px auto" }} onClick={addCompletion}>Click to Complete</Button>
        </Paper>
        </>
    )
}

export default ExerciseTracker
