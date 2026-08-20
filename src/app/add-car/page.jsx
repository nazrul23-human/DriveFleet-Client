"use client"
import { FieldError, Input, Label, ListBox, TextField,Select, TextArea, Button } from '@heroui/react';
import React from 'react';

const AddCarPage = () => {
    const onSubmit = (e => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const carData = Object.fromEntries(formData.entries());
        console.log(carData)
    })
    return (
        <div className="p-10 max-w-7xl mx-auto">
            <p className="rounded-full bg-gray-200 text-blue-800 font-bold text-2xl text-center "
            >Add Your Car</p>
            <form
            onSubmit={onSubmit}
            className="p-10 space-y-8 w-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField name="carName" isRequired>
                  <Label>Car Name</Label>
                  <Input placeholder="Toyota" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Country
              <TextField name="country" isRequired>
                <Label>Country</Label>
                <Input placeholder="Indonesia" className="rounded-2xl" />
                <FieldError />
              </TextField> */}


              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="carType"
                  isRequired
                  className="w-full"
                  placeholder="Select Car Type"
                >
                  <Label>Car Type</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Nissan" textValue="Nissan">
                        Nissan
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Toyota" textValue="Toyota">
                        Toyota
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Honda" textValue="Honda">
                        Honda
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Suzuki" textValue="Suzuki">
                         Suzuki
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="LandRover" textValue="Land Rover">
                         Land Rover
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Ferrari" textValue="Ferrari">
                        Ferrari
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Lamborghini" textValue="Lamborghini">
                        Lamborghini
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="BMW" textValue="BMW">
                        BMW
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Audi" textValue="Audi">
                        Audi
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Tesla" textValue="Tesla">
                        Tesla
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <TextField name="price" type="number" isRequired>
                <Label>Daily Rent Price($)</Label>
                <Input
                  type="number"
                  placeholder="$100"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Duration */}
              <TextField name="duration" isRequired>
                <Label>Duration</Label>
                <Input
                  placeholder="Time/Days"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
              <TextField name="availabilityStatus" isRequired>
                <Label>Availability Status</Label>
                <Input
                  placeholder="Select status"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Departure Date
              <div className="md:col-span-2">
                <TextField name="departureDate" type="date" isRequired>
                  <Label>Departure Date</Label>
                  <Input type="date" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div> */}

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe your experience..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <div>
                <Button
              type="submit"
              variant="outline"
              
              className=" rounded w-full bg-gray-200 text-blue-800 font-bold text-2xl "
            >
              Add Car
            </Button>
            </div>
          </form>
        </div>
    );
};

export default AddCarPage;
