import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



function valuetext(value) {
    return `${value}`;
  }
  

const DiscreteSlider = () => {
  return (
    <div className="Slider-Box">
        <h3 className="h1-6">On a scale of 1-10 how proficient are you with what you have learned so far?</h3>
      <Slider
        aria-label="Temperature"
        className=""
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
      />
    </div>
  );
}

export default DiscreteSlider;