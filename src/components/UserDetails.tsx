import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { defaultData } from '../mocks/defaultData';
import { H4, Text } from '@salt-ds/core';

const UserDetails = () => {
  const { id } = useParams<{ id: string }>(); // Access the user ID from the URL
  const [user, setUser] = useState<{
    id: number;
    name: string;
    code: string;
    capital: string;
    rating: number;
    population: number;
    date: string;
    age: number;
    email: string;
    gender: string;
    address: string;
    city: string;
    country: string;
    phone_number: string;
  } | null>(null);

  useEffect(() => {
    const fetchUser = () => {
      const userData = defaultData.find(user => user.user_id === parseInt(id || ''));
      if (userData) {
        setUser(userData);
      } else {
        setUser(null);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>No Results Found</div>;
  }

  return (
    <div>
      <H4>User Details</H4>
      <Text>Name: {user.name}</Text>
      <Text>Code: {user.code}</Text>
      <Text>CaTextital: {user.capital}</Text>
      <Text>Rating: {user.rating}</Text>
      <Text>TextoTextulation: {user.population}</Text>
      <Text>Date: {user.date}</Text>
      <Text>Age: {user.age}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Gender: {user.gender}</Text>
      <Text>Address: {user.address}</Text>
      <Text>City: {user.city}</Text>
      <Text>Country: {user.country}</Text>
      <Text>Phone Number: {user.phone_number}</Text>
    </div>
  );
};

export default UserDetails;