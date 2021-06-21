# Laughing&Beyond (frontend)

## Description:
A collection of Jokes and FunFacts for laughter, learning and inspiration. 
Jointly created by Julia Christensen and Andrea Clark
* [Repository for Project 3 - frontend](https://github.com/aflack143/laughing-beyond-frontend)
* [Repository for Project 3 - backend](https://github.com/aflack143/laughing-beyond-backend)

## Brief Example:
Screenshots from website: <br>
<img src="https://user-images.githubusercontent.com/80013194/122523473-aa309f00-cfdc-11eb-9895-5f2a84683d43.png" width="100" height="100">
<img src="https://user-images.githubusercontent.com/80013194/122622081-2e2a6b80-d05d-11eb-8d46-6ad0232fbe0d.png" width="100" height="100">
<img src="https://user-images.githubusercontent.com/80013194/122523299-7a819700-cfdc-11eb-8e6b-544d38343e7c.png" width="100" height="100">

Demo: http://laughing-beyond.surge.sh/

## Features:
**_Bronze_**:
* Home Page
    * Nav bar with links to each page(and back to Home)
    * Display a random item for each of the types (Jokes, FunFacts, Quotes)
* Jokes Page
    * Display random list of 10 jokes
    * Button to refresh for another random 10 jokes 
* FunFacts Page
    * Display random fun fact
    * Button to refresh for another random fun fact 
* User profile page
    * Sign-up and Login Pages
    * Edit profile

**_Silver_**:
* Jokes Page
    * Search using radio buttons for 4 types of jokes (Random, General, Knock-Knock, Programming)
* FunFacts Page
    * User input number to display a random fact about that number
    * User input month/day to display a random fact about that date in history

**_Gold_**:
* Jokes Page
    * Search box allowing to search for specific words in "setup" content (ie: road, array, cow, etc..)
    * Add a joke
* Quotes Page
    * Display a random Quotes with name of Author
    * Search Author for all quotes said by them.
* User profile page
    * User Authentication
    * User Favorite Joke, Quote, FunFact
* User comments added to Joke, Quote, FunFact pages


## Technologies Used:
  React 
  Axios
  
## URLs
* [/ = HomePage](http://localhost:3000/)
* [/signup](http://localhost:3000/signup)
* [/login](http://localhost:3000/login)
* [/profile/:id](http://localhost:3000/profile/7)
* [/jokes](http://localhost:3000/jokes)
* [/funfacts](http://localhost:3000/funfacts)  

## Getting Started:
<img src="https://user-images.githubusercontent.com/80013194/122136009-430dc180-ce07-11eb-9933-9ed9701f94ff.png" width="400">
<img src="https://user-images.githubusercontent.com/80013194/122136023-4c972980-ce07-11eb-9ffe-33aad8c87e1c.png" width="400">
<img src="https://user-images.githubusercontent.com/80013194/122136034-5325a100-ce07-11eb-8ba2-ba1cb73bd887.jpg" width="400">

**_Key notes_**: 
[Link to Asana](https://app.asana.com/0/1200474893168640/list)

**Aha! Moment:**
When coding, we were struggling to add a new key/value pair to each of the children of my array object. A workaround was to map them then to a new component page then add the separate key/value for the jokes page allowing to toggle the show/hide button. This worked as an alternate, but we really wanted to know the right way to accomplish this same task. Thankfully we found this [website](https://medium.com/swlh/the-setstate-hook-for-setting-state-on-an-array-of-children-11e6437880da) and it worked like a charm!<br>
Here is a sample of the updated code that uses .forEach to update the inner child key/value:<br>
```js 
   axios.get('https://official-joke-api.appspot.com/jokes/ten')
        .then(resp => {
            const allJokes = resp.data
            allJokes.forEach(joke => {
            joke.display = false;
            })
            setData(prevState=>({
                ...prevState,
                jokes: allJokes,
            }))
        })
````
### Sources: 
API's used:<br>
 * [Jokes API](https://github.com/15Dkatz/official_joke_api)
   * [Jokes API-Demo](https://official-joke-api.appspot.com/random_joke)
 * [Numbers API](http://numbersapi.com/)

Other sources used:<br>
 * [Radio Button Display](https://stackoverflow.com/questions/44577673/react-js-how-do-i-set-a-checked-selected-radio-button-and-track-the-onchange)<br>
 * [Rerendering Child Component when props is updated on Parent](https://stackoverflow.com/questions/38892672/react-why-child-component-doesnt-update-when-prop-changes)<br>
 * [Hover Animation](https://www.joshwcomeau.com/react/boop/)
 * [Setting state within an array of children](https://medium.com/swlh/the-setstate-hook-for-setting-state-on-an-array-of-children-11e6437880da)
* [Setting up drop down list](https://blog.logrocket.com/building-a-custom-dropdown-menu-component-for-react-e94f02ced4a1/)
* [How to Fetch Data in React ](https://www.freecodecamp.org/news/fetch-data-react/)
building-a-custom-dropdown-menu-component-for-react-e94f02ced4a1/)
* [ES6 This.state to ovoid binding ](https://medium.com/@joespinelli_6190/using-arrow-functions-to-avoid-binding-this-in-react-5d7402eec64)