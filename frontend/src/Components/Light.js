import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function Light() {
  const handleChange = (event, newValue) => {
    console.log(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="LED"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={0}
        step={25}
        marks
        min={0}
        max={100}
        style={{
          color: 'red', // Set the color of the slider track to red
        }}
        onChange={handleChange} // Add onChange event handler
      />
    </Box>
  );
}
