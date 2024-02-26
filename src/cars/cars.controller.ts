import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarDto } from './car.dto';

@Controller('cars')
export class CarsController {
  constructor(private carServices: CarsService) {}

  @Get()
  public getAllCars() {
    console.log('start fetching all cars.....');
    return this.carServices.getAllCars();
  }

  @Post()
  public postCar(@Body() car: CarDto) {
    console.log('start postCar.....');
    return this.carServices.postCar(car);
  }

  @Get(':id') // Updated decorator to specify route parameter
  public getCarById(@Param('id') id: number) {
    console.log('start getCarById.....');
    return this.carServices.getCarById(id);
  }

  @Delete(':id') // Updated decorator to specify route parameter
  public deleteCarById(@Param('id') id: number) {
    console.log('start deleteCarById.....');
    return this.carServices.deleteCarById(id);
  }

  @Put(':id') // Updated decorator to specify route parameter
  public putCarById(@Param('id') id: number, @Query() updatedCar) {
    console.log('start putCarById.....');
    return this.carServices.putCarById(
      id,
      updatedCar.property_name,
      updatedCar.property_value,
    );
  }
}
