const VehicleList = ({vehicles}) => (
  <div>
    <h2>Available Vehicles:</h2>
    <ul>
      {vehicles.map(vehicle => (
        <li key={vehicle.id}>
          {vehicle.vehicleType} - ${vehicle.price}
        </li>
      ))}
    </ul>
  </div>
)

export default VehicleList
