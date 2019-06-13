const Country = Object.freeze({
  GB: "Great Britain",
  FR: "France",
  AU: "Australia",
  US: "United States"
});

const getCountryCode = country => {
  const countryMatch = Object.values(Country).indexOf(country);

  return {
    name: country,
    ...(countryMatch && {
      code: Object.keys(Country)[countryMatch]
    })
  };
};

const countries = ["Great Britian", "France", "United States"];

module.exports = countries.map(getCountryCode);
