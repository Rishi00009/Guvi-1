fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // 1 . Get all the countries from Asia continent /region using Filter method
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log("Countries in Asia:", asiaCountries.map(country => country.name));

    // 2 . Get all the countries with a population of less than 2 lakhs (200,000) using Filter method
    const counWithPopuLessThan200k = data.filter(country => country.population < 200000);
    console.log("Countries with population less than 200,000:", counWithPopuLessThan200k.map(country => country.name));

    //3 . Print the following details name, capital, flag, using forEach method
    console.log("Details of countries - name, capital, flag:");
    data.forEach(country => {
      console.log(`Name: ${country.name}`);
      console.log(`Capital: ${country.capital}`);
      console.log(`Flag: ${country.flags.svg}`);
      console.log("---------------------------------------");
    });

    // 4 . Print the total population of countries using reduce method
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population of all countries:", totalPopulation);

    // 5 . Print the country that uses US dollars as currency
    const countryWithUSDollar = data.find(country => {
      return country.currencies && country.currencies.USD && country.currencies.USD.name === 'United States dollar';
    });
    if (countryWithUSDollar) {
      console.log("Country that uses US dollars as currency:", countryWithUSDollar.name);
    } else {
      console.log("No country found that uses US dollars as currency.");
    }
  })
  .catch(error => console.error('Error fetching data:', error));



