# Robotfriend app

- This is singled-page app tutorial that is converted from classes to hook.
- For CSS is used "tachyons" npm package and for the cool font I used this website:
  https://freefrontend.com/css-text-effects/#google_vignette
- App.js. I filtered the array of robots depending of the input of the search field
- CardList. I loop (map) thru the array of robots so I display the Card element.
- The images comes from a website, when word is added, it creates a ramdon robot image, so in order to have different robots, the image in Card.js is added the id of the users fetched from "jsonplace holder":
  <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
- Explanation of useEffect and useState
