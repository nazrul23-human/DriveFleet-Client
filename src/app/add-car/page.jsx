"use client"
import { FieldError, Input, Label, ListBox, TextField, Select, TextArea, Button } from '@heroui/react';
import React from 'react';
import toast from "react-hot-toast";

const AddCarPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const carData = Object.fromEntries(formData.entries());
        console.log(carData)

        const res = await fetch('http://localhost:5000/add-car', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carData)

        });
        const data = await response.json();

        if (response.ok) {
            toast.success("Car added successfully! 🚗");

            e.currentTarget.reset();
        } else {
            toast.error("Failed to add car!");
        }
    }

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
                                <ListBox.Item id="Sports" textValue="Sports">
                                    Sports
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="Luxury" textValue="Luxury">
                                    Luxury
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="Electric" textValue="Electric">
                                    Electric
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="Super car" textValue="Super car">
                                    Super car
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="Hyper car" textValue="Hyper car">
                                    Hyper car
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="Limousine" textValue="Limousine">
                                    Limousine
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="Hybrid" textValue="Hybrid">
                                    Hybrid
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="Coupe" textValue="Coupe">
                                    Coupe
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="Sedan" textValue="Sedan">
                                    Sedan
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="Crossover" textValue="Crossover">
                                    Crossover
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
