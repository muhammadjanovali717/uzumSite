import React, { Component } from 'react';
import "./Slider.css"
class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: 0,
    };
  }

  componentDidMount() {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 13  );

    this.interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = targetTime - currentTime;
      this.setState({ remainingTime: timeDifference });

      if (timeDifference <= 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  render() {
    const { remainingTime } = this.state;

    // Calculate remaining hours, minutes, and seconds
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return (
      <div className='counter'>
        <p>{`${hours}  ${minutes}  ${seconds} `}</p>
      </div>
    );
  }
}

export default Countdown;
