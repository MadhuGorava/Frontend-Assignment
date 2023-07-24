import {useState} from 'react'
import axios from 'axios'
import VehicleList from './VehicleList'
import dummyData from './dummyData.json'

const App = () => {
  const [pointA, setPointA] = useState('')
  const [pointB, setPointB] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [availableVehicles, setAvailableVehicles] = useState([])

  const handleSearch = () => {
    // Here, you can implement the API call to fetch real data using Axios
    // For now, we will use the dummyData to demonstrate the functionality
    const filteredVehicles = dummyData.filter(vehicle =>
      vehicle.availability.includes(selectedDate),
    )
    setAvailableVehicles(filteredVehicles)
  }

  return (
    <div className="container">
      <h1>Airport Transfer Booking App</h1>
      <div>
        <label htmlFor="pointA">Point A:</label>
        <input
          type="text"
          id="pointA"
          value={pointA}
          onChange={e => setPointA(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pointB">Point B:</label>
        <input
          type="text"
          id="pointB"
          value={pointB}
          onChange={e => setPointB(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="selectedDate">Date:</label>
        <input
          type="date"
          id="selectedDate"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <VehicleList vehicles={availableVehicles} />
    </div>
  )
}

export default App
