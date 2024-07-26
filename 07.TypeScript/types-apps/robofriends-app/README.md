# Robotfriend app

- This is singled-page app tutorial that is converted from classes to hook.
- For CSS is used "tachyons" npm package and for the cool font I used this website:
  https://freefrontend.com/css-text-effects/#google_vignette
- App.js. I filtered the array of robots depending of the input of the search field
- CardList. I loop (map) thru the array of robots so I display the Card element.
- The images comes from a website, when word is added, it creates a ramdon robot image, so in order to have different robots, the image in Card.js is added the id of the users fetched from "jsonplace holder":
  <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
- Explanation of useEffect and useState

# Testing

I had a bug with "jest" that took me hour to solve. I found the solution here:
https://stackoverflow.com/questions/58613492/how-to-resolve-cannot-use-import-statement-outside-a-module-from-jest-when-run

1. Install jest, ts-jest, babel-jest, and @babel/preset-env:
   npm i jest ts-jest babel-jest @babel/preset-env

2. Add babel.config.js (only used by jest)
   module.exports = {presets: ['@babel/preset-env']}

3. In jest.config.js update to:

module.exports = {
preset: 'ts-jest',
transform: {
'^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
}
};

4. package.json
   "scripts": {
   "test": "jest"
   }

# Axios in a function that is exported in order to be testing in App.test.js

export async function fetchUsers() {
try {
const response = await axios.get(URL_USERS);
console.log(response.data);
const users = response.data
return {users}
} catch (error) {
console.error(error);
}
}

# passing the two arguments to the asyncThunk function.

export const getUsersAsync = createAsyncThunk(
'users/getUsersAsync', fetchUsers
);

# testing with typescript:

1. src/redux/filteredRobots.tsx: Define the function in the slice:

export async function fetchUsers(): Promise</_unresolved_/ any> {
try {
const response = await axios.get(URL_USERS);
console.log(response.data);
const users = response.data
return {users}
} catch (error) {
console.error(error);
}
}

2. App.test.ts Define axios

const mockedAxios = axios as jest.Mocked<typeof axios>;

3. package.json: Add a flag to test script so it won't bother me with the bug of "cannot import modules":

   "test": "react-scripts test --transformIgnorePatterns",

- This is a lot simplier that the method I had to use with jest

4. Install this recommended plugin to avoid bugs
   npm i @babel/plugin-transform-private-property-in-object

**bug**
When I try to run the test I got an error from watchman related to the version... it turns out that "brew" has to be downdate because the new changes creates this bug... it was fucking difficult to fig this out. I need to review Linux devOps to copy recomended watchman.rb to Formula. I had a problem with thie coz the recomended path was the correct one... now is working I don't need to go thru all the hazzle that I did in "robotsfriends-testing"...

I found the soluction in this site:

https://stackoverflow.com/questions/72451781/cant-use-watchman-operation-not-permitted

1. -- uninstall
   brew uninstall watchman
2. -- replace formula
   curl https://raw.githubusercontent.com/Homebrew/homebrew-core/8651d8e23d308e564414188509f864e40548f514/Formula/watchman.rb > /opt/homebrew/Library/Taps/homebrew/homebrew-core/Formula/watchman.rb
3. -- install again, using replaced formula
   brew install watchman
4. -- pin that version - Don't forget to unpin once this problem is solved...
   brew pin watchman
5. -- reset formula to original
   cd /opt/homebrew/Library/Taps/homebrew/homebrew-core/Formula/
   git checkout -- watchman.rb

- When I was trying to apply this, I ran into an error... the pat given does not match mine so I need to check where brew folder is:
  brew --repository

- Then find "Formula" folder and copy the given "watchman.rb"

Now everything works!
