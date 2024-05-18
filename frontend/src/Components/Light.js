import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

function valuetext(value) {
  return `${value}°C`;
}

export default function Light() {
  const handleChange = (event, newValue) => {
    handleSubmit(newValue)
  };
  const handleSubmit = async (data) => {
    const Data={"LED":data}
    try {
      const response = await fetch('http://localhost:7777/cam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Response:', responseData);
    } catch (error) {
      console.error('Error:', error.message);
    }
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
