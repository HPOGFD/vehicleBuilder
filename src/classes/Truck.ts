import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class extends Vehicle and implements AbleToTow
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor accepts Truck properties and ensures default wheels if not provided
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Call parent class constructor
    super(vin, color, make, model, year, weight, topSpeed, wheels);

    // Ensure the wheels array has exactly 4 elements
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];

    // Initialize additional Truck-specific property
    this.towingCapacity = towingCapacity;
  }

  // Implement the tow method from AbleToTow
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleMake = vehicle.make || 'Unknown Make';
    const vehicleModel = vehicle.model || 'Unknown Model';

    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${vehicleMake} ${vehicleModel} is being towed.`);
    } else {
      console.log(`${vehicleMake} ${vehicleModel} is too heavy to be towed.`);
    }
  }

  // Override the printDetails method from the Vehicle class
  printDetails(): void {
    super.printDetails(); // Call parent class details method
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log('Wheels:');
    this.wheels.forEach((wheel, index) => {
      console.log(`  Wheel ${index + 1}: ${wheel}`);
    });
  }
}

// Export the Truck class as the default export
export default Truck;
