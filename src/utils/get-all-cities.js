export const getAllCities = (country) => {
  const cities = country.flatMap((obj) =>
    obj.cities.map((city) => `${city}, ${obj.country}`)
  );

  return cities;
};
