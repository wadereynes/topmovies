# Topmovies

Demo Link: https://topmovie100.herokuapp.com/

```
Project Structure:

topmovies
|--public
|  |--manifest.json
|  |--favicon.ico
|  |--index.html
|--src
|  |--assets
|  |  |--img
|  |  |--js
|  |  |--sass
|  |--views
|  |  |--Background.js
|  |  |--Container.js
|  |  |--LeftPane.js
|  |  |--ItemBox.js
|  |  |--TopNav.js
|  |  |--Loader.js
|  |  |--Modal.js
|  |  |--Favs.js
|  |  |--MovieCarousel.js
|  |  |--Footer.js
|  |  |--Item.js
|  |--index.js
|  |--registerServiceWorker.js
|  |--cookies.js

```

> index.js src loads first to start data and serves as entry point, Loader shows up an spinner while it fetches data from the api, when done it mounts the container component , which contains mainly the whole coding and logic of app.

> The project was intialized using the barebones from the node package ["create-react-app"](https://github.com/facebook/create-react-app) from facebook, then updated as needed.

## Frameworks and stuff used [out of create-react-app]
- [Bulma](https://bulma.io/)
- [Browser Cookies](https://www.npmjs.com/package/browser-cookies)
- [Fontawesome](https://fontawesome.com/)
- [Animate](https://daneden.github.io/animate.css/)
> And Web APIs

## User Story

In the app you can search from the top 100 of movies from itunes, using its API.
> PD: Sometimes <100 , it's cause of the API

You can type #20 to grab that element from the list showing it's name and artist, if you only type ie: 19 , the result will be taken based on it's title.

Btw you can also search either by artist or movie name, title.

You can also take a look at the movie price and its cover pic, another thing out there is that you can add up one movie to your fav's list, then you can manage them tappin' on the heart like icon

## How to host on local

first you need [NodeJS](https://nodejs.org/es/), then if you are on linux you gotta install git, if installed then copy this
```
git clone https://github.com/wadeshow/topmovies.git
```
when cloned  type
```
cd topmovies
```
then you gotta install all modules needed so
```
npm install
```
if all done then we can start the app, hoping no bugs comming ;'c
```
npm start
```
if you are on windows you can use the git cmd , fetch it [here](https://gitforwindows.org/)
and type all the above code

# Screenshots

## Home
![home](https://user-images.githubusercontent.com/7122291/127443706-968d0f1e-9105-43ce-8c34-b6d39206f4f5.png)

## Search
![search](https://user-images.githubusercontent.com/7122291/127443894-6a47921d-feb3-450c-b696-cd9a0694cab8.png)

## Movie Detail
![movie-detail](https://user-images.githubusercontent.com/7122291/127443999-6c26fbf6-1859-4f52-91f5-234bd3e48a9a.png)

## Favorite
![favorite](https://user-images.githubusercontent.com/7122291/127444084-3da84ac8-6d10-4f06-b6b8-109418ef1233.png)
