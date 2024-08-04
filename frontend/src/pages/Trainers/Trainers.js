import React from 'react'
import Card from '../../components/Card/Card';
import './Trainers.css';

function Trainers() {
    return ( 
        <>
        <div className='trainer-text-bg'>
            <h1 className='highlighted head text-uppercase font-weight-bold'>Personal Trainer</h1>
        </div>
        <div className='intro'>
            <h1 className='question'>What is your Goal?</h1>
            <p>Lose Weight, drop a dress size, build strength, run a marathon, train for a specific event or rehabilitate.</p>
            <p>Lose Weight, drop a dress size, build strength, run a marathon, train for a specific event or rehabilitate.</p>
        </div>

        <div class="d-flex justify-content-center align-items-center trainers-section flex-column" >
            <Card img = "/bg.jpg" name = 'Trainer' rating={5} description="
            Lose Weight, drop a dress size, build strength, run a marathon, train for a specific event or rehabilitate.Lose Weight, drop a dress size, build strength, run a marathon, train for a specific event or rehabilitate.
            "/>
            <Card img = "/bg.jpg" name = 'Trainer' rating={5} description="
            Lose Weight, drop a dress size, build strength, run a marathon, train for a specific event or rehabilitate.Lose Weight, drop a dress size, build strength, run a marathon, train for a specific event or rehabilitate.
            "/>
            <Card img = "/bg.jpg" name = 'Trainer' rating={5} description="
            Lose Weight, drop a dress size, build strength, run a marathon, train for a specific event or rehabilitate.Lose Weight, drop a dress size, build strength, run a marathon, train for a specific event or rehabilitate.
            "/>
            <Card img = "/bg.jpg" name = 'Trainer' rating={5} description="
            Lose Weight, drop a dress size, build strength, run a marathon, train for a specific event or rehabilitate.Lose Weight, drop a dress size, build strength, run a marathon, train for a specific event or rehabilitate.
            "/>
        </div>

        </>
     );
}

export default Trainers;