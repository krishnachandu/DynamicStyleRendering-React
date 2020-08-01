//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
var date = new Date(2019, 1, 1, 17);
var hours = date.getHours();
var colors = { color: "Red" };
var currentSet = "Morning";
if (0 <= hours && hours <= 12) {
  currentSet = "Morning";
  colors.color = "red";
} else if (12 < hours && hours <= 18) {
  currentSet = "Afternoon";
  colors.color = "green";
} else {
  currentSet = "Night";
  colors.color = "blue";
}
ReactDOM.render(
  <h1 className="heading" style={colors}>
    {currentSet}
  </h1>,
  document.getElementById("root")
);
