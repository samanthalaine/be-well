import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import Navbar from '../components/Navbar'




function ExerciseTracker() {
    
    const [chartToggle, setChartToggle] = useState(true)

    const aqua = "#00ACC1"
    const grey = "#B0BEC5"

    const chartOne = {
        labels: [
          'Not Complete',
          'Complete',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [1, 0],
          backgroundColor: [
            grey,
            aqua
          ],
          hoverOffset: 4
        }]
      };

    const chartTwo = {
        labels: [
          'Not Complete',
          'Complete',
        ],
        datasets: [{
          label: 'My Second Dataset',
          data: [0, 1],
          backgroundColor: [
            grey,
            aqua
          ],
          hoverOffset: 4
        }]
      };


    return (
        <>
        <Navbar/>
        <Paper style={{padding :20,height:'95vh',width:500, margin:"100px auto"}}>
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Track Your Exercise</h3>
            <Doughnut 
                data={chartToggle ? chartOne : chartTwo}
                
                />
                <Button style={{ background: "#B2EBF2", display: 'flex', alignItems: 'center', justifyContent: 'center', margin:"40px auto" }} onClick={()=>setChartToggle(!chartToggle)} >Click to Complete</Button>
        </Paper>
        </>
    )
}

export default ExerciseTracker
