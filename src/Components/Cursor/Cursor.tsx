import React, { Component } from 'react';

interface CursorCircleProps {}

interface CursorCircleState {
  x: number;
  y: number;
}

class Cursor extends Component<CursorCircleProps, CursorCircleState> {
  constructor(props: CursorCircleProps) {
    super(props);
    this.state = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
  }

  componentDidMount() {
    document.body.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    document.body.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (e: MouseEvent) => {
    const circleSize = 20;
    const xOffset = circleSize;
    const yOffset = circleSize;
    
    // Calculate the cursor position relative to the document's scroll position
    const x = e.clientX - xOffset + window.scrollX;
    const y = e.clientY - yOffset + window.scrollY;
    
    this.setState({
      x,
      y,
    });
  };

  render() {
    const { x, y } = this.state;

    return (
      <div
        className="circle"
        style={{ left: `${x}px`, top: `${y}px` }}
      >
        {/* You can customize the circle's appearance here */}
      </div>
    );
  }
}

export default Cursor;
