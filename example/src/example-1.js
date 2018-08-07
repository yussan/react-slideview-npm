import React, { Component } from "react"
import ReactDom from "react-dom"
import SlideView from "../../src/components/SlideView"

const dummyStyle = {
  width: "500px",
  padding: "100px",
  textAlign: "center",
  color: "#000",
  background: "gray"
}



const ExampleApp = props => (
  <div>
    <h1>This is Example App of SlideView</h1>
    <SlideView id="example-slider-1" style={{width:"700px"}}>
      <div style={dummyStyle}>1</div>
      <div style={dummyStyle}>2</div>
      <div style={dummyStyle}>3</div>
    </SlideView>
  </div>
)

const Container = document.getElementById("example-app")
ReactDom.render(<ExampleApp />, Container)
