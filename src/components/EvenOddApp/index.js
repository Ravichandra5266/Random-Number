import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({count: randomNumber}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="bg-container">
        <h1 className="count-value">Count {count}</h1>
        <p className="count-value-txt">{text}</p>
        <button className="btn" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
