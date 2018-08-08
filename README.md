# react-slideview 

Lightweight and customizable React component to build slide view. https://www.npmjs.com/package/react-slideview.

8Kb of size, no external dependecies.


## Demo 
please follow this link https://z2q3o48m1x.codesandbox.io/


## Docs

### How to use
Install using Yarn / NPM
```
yarn add react-slideview
```

Import and implement to your project
```
import React from "react"
import Slider from "react-slideview"
const Home = props => (
  <div>
    <Slider className="your-sliderwrapper-class">
      <div className="your-slideritem-class"> content 1 </div>
      <div className="your-slideritem-class"> content 2 </div>
      <div className="your-slideritem-class"> content 3 </div>
    </Slider>
  </div>
)
```

## Available props 
- id (string) : mandatory,
- className (string),
- style (object) : based on react,
- dots (boolean): default true,
- navigation (boolean): default false,
- auto (boolean): default false,
- speed (number): default 2000ms

## Core 
- [react](https://www.npmjs.com/package/react)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [styled-components](https://www.styled-components.com/)

## Used by
- https://kompetisi.id 
- https://sebangsa.com

## Author
- yussan < https://twitter.com/xyussanx >

