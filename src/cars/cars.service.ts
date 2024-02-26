import { Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';

@Injectable()
export class CarsService {
  private cars = CARS;

  public getAllCars() {
    console.log('this.cars:', this.cars);
    if (!this.cars) {
      throw new Error('Invalid car object');
    }
    return this.cars;
  }

  public postCar(car) {
    if (!car) {
      throw new Error('Invalid car object');
    }
    this.cars.push(car);
    return this.cars;
  }

  public getCarById(id: number) {
    const car = this.cars.find((car) => car.id == id);
    // if (!car) {
    //   throw new Error('Car not found');
    // }
    return car;
  }

  public deleteCarById(id: number) {
    const index = this.cars.findIndex((car) => car.id == id);
    if (index === -1) {
      throw new Error('Car not found');
    }

    this.cars.splice(index, 1);
    return this.cars;
  }

  public putCarById(id: number, updatedCarProperty, updatedCarValue) {
    const index = this.cars.findIndex((car) => car.id == id);
    if (index === -1) {
      throw new Error('Car not found');
    }
    this.cars[index][updatedCarProperty] = updatedCarValue;
    return this.cars;
  }
}
