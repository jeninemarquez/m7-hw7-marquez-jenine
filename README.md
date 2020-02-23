# m7-hw7-marquez-jenine

The main thing I had trouble with was getting the weather description to work instead of saying "undefined". I eventually figured it out after finding this Stack Overflow thread where the solution was to write weather[0].description instead of just weather.description, since the weather section was wrapped in both square and curly brackets. 

Here is the thread: https://stackoverflow.com/questions/41008123/openweather-api-getjson-request-returning-undefined
