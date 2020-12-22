import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 150,
      jam: new Date().toLocaleTimeString(),
    }
    
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerDate = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate(){
    if(this.state.time === 0){
        this.componentWillUnmount()
    }
  }

  componentWillUnmount(){
    clearInterval(this.timerDate)
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      jam: new Date().toLocaleTimeString()
    });
  }

  render(){
      if(this.state.time > 0){
        return( 
                <>
                    <h1 style={{textAlign: "center"}}>
                    Sekarang jam : {this.state.jam}&emsp;&emsp;hitung mundur : {this.state.time}
                    </h1>
                </>
        )
      }else{
          return null
      }
  }
}

export default Timer