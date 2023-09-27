import React from "react";
import {useForm} from '@formspree/react'
import Slider from '@mui/material/Slider';

const Main = () => {
        const [state, handleSubmit] = useForm("xvojvped");
        if (state.succeeded) {
            return <p>Thanks for joining!</p>;
        }

        function valuetext(value) {
            return `${value}`;
          }
          
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Maggie's intro survey</h1>

            <div className="section">
                <h3 className="h1-6">What's your name?</h3>
                <textarea className="textarea" id="name" name="name"></textarea>
                <h3 className="h1-6">What is your main focus for our initial session?</h3>
                <p className="text">Please be honest. I'm here to support your education.</p>
                <textarea id="Main Focus" name="Main Focus" className="textarea"></textarea>
            </div>

            <div className="Slider-Box">
                <h3 className="h1-6">On a scale of 1-10 how proficient are you with what you have learned so far?</h3>
                <textarea className="textarea2" id="scale" name="scale"></textarea>
            </div>

            <div className="section">
            <h3 className="h1-6">What would you say you're most confident with?</h3>
            <textarea id="proficiency" name="proficiency" className="textarea"></textarea>
            <h3 className="h1-6">This is a quick problem that is solvable with simple javascript functions. Show me how you would solve it. Whether you explain it or show me a function is up to you, I just want to see how you would solve a problem.</h3>
            <h4 className="h1-6">Write a function named calculateSupply that:</h4>
            <ul>
                <li>takes 2 arguments: age, amount per day.</li>
                <li>calculates the amount consumed for rest of the life (based on a constant max age).</li>
                <li>outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"</li>
            </ul>
            <textarea id='solution' name="solution" className="textarea"></textarea>
            </div>
            <button type="submit">
        Submit
      </button>
        </form>
    )
}

export default Main;