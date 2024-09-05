## Chapter 16. CI/CD

# Lesson 1. Bruno's Request

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681512

# Lesson 2. Section Overview

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681515

# Lesson 3. Continuous Integration, Delivery, Deployment

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681517

- Check <Continous Integration> diagram
- Check <Continous Delivery> diagram
  The team leader checks the project and click a button in order to set it to deployment
- Check <Continous Deployment> diagram
  It release automatically into deployment

# Lesson 4. Building Great Software

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681513

- Continuos integration is something that should be at the very beginning of the building process

- Check <CI process> diagram

# Lesson 5. Resources: CI Tools

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/13220246

There are a lot of good options for tools out there. You can have a look at this article for a run down of all of them:
https://code-maze.com/top-8-continuous-integration-tools/

As I stated in the video, most companies use one of these tools and my personal recommendations are:

TravisCI or CircleCI for hosted CI servers.

Jenkins for your own managed CI servers.

# Lesson 6. CircleCI

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681516

1. Create an account in CircleCI
2. Give access to CircleCI to our GitHub repositories
3. att the root of the project (robotsfriend), create .circleci/config.yml
4. Copy the configuration given from CircleCI
5. Commit the files to a different repository (if I am the only one working in the project, I can just commit it to "master")

# Lesson 7. Continuous Integration 1

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681511

.circleci/config.yml:
version: 2.1
jobs:
build:
docker: - image: circleci/node:latest
steps: - checkout - run: npm install - run: CI=true npm run build
test:
docker: - image: circleci/node:latest
steps: - checkout - run: npm install - run: npm run test
hithere:
docker: - image: circleci/node:latest
steps: - checkout - run: echo "Helllooooo!"
workflows:
version: 2
build-test-and-lint:
jobs: - build - hithere - test:
requires: - hithere

# Lesson 8. Continuous Integration 2. Prittier

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681510

Prettier organize our code and make it more readable
https://prettier.io

- Always check the offitial docs

Steps:

1. Install prettier:
   npm install --save-dev --save-exact prettier
2. Run this command in CLI:
   npm install --save-dev husky lint-staged
   npx husky init
   node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')"
3. In package.json, right after "eslintConfig" script:
   {
   "lint-staged": {
   "\*_/_": "prettier --write --ignore-unknown"
   }
   }
4. Add the changes to the repository

- Here I had a bug with testing. Answer was given by github:

1. Install a pluggin to fix this problem
   npm install --save-dev @babel/plugin-proposal-private-property-in-object
2. Create .babelrc file:
   {
   "presets": ["@babel/preset-react"],
   "plugins": ["@babel/plugin-proposal-private-property-in-object"]
   }

# Lesson 9. Building Great Software 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681514

- Check <complete flow> diagram

# Lesson 10. Section Summary

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12681509

- Using this method is very useful to work in a team since reduce the cances for bugs and breaing the app in production
