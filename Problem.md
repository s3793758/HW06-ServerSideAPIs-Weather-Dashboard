##PEDAC

```
P - Understand the Problem
    - read the problems description
    -idenfity inputs/outputs
    -identify rules/requirements
    -ask clarifiying questions
    -examine all examples
E - Examples/Test Cases
    -understand how the input translates to output
    -identify edge cases
        -can my program handle int, or empty arrays?
    -create the test cases and confirm outputs

D - Data Structures
    -what kind of data are you primarily dealing with ?
        -strings, arrays, numbers, objects, etc
    -this helps you to focus on methods for these types
A - Algorithm
    -steps by step process that takes you from input to output
    handles edges cases and valid example inputs
    -your code will depend on your algorithm
C - Code
    -time to write the code
    -use everything you've fathered in your pedac to write the code
    -debug (if needed)
    - if theyre are error in output
    - carefully review algorithm before looking at your code
    - once you've identified the issue, change the algorithm first, then fix the code
```

```
        ## Acceptance Criteria
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city


```

```
INPUT
        - city location current weather conidition
        - current and present weather
        - i view UV idex
        - search history

```

```
OUTPUT
        -city search history
        -city current and present weather
            -current weather for city
                - city name
                - date
                - icon represting weather condition
                    - temperature
                    - humidity
                    - wind speed
                    - UV index (sun ray)
                - view UV 
                    - presented color indicates whether the coniditions are favorable, moderate or severe
            -future weather condition city
                -5 day forecast
                    -date
                    -icon represting weather condition
                    -temperature
                    -speed
                    -humidity
        -search history
```

RULES
    Front-end Bootstrap
    API (apiKey= ebfa409f8c74cfaa9fbe4012e3cdb636)
        - [OpenWeather One Call API](https://openweathermap.org/api/one-call-api) to retrieve weather data for cities. Read through the documentation for setup and usage instructions. You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).


    

DATA STRUCTURES

html
js
css
    

// get your locaiton using gogole getolaction api

// defint lat, lon value, api_key

// call the weater api with those variable and api url (fetch)

// get aip response and display the result on the web page

ALGORITHM
