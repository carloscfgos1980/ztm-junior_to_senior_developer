## 09.Security

# Lesson 1. Bruno's Request

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12678236

# Lesson 2. Section Overview

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12678239

# Lesson 3. Star Of Security

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12678245

- Check <security> diagram

# Lesson 4. Injections

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12678243

- Injections is one of the most common attack, for example SQL injections:
  'or 1=1--
  '; DROP TABLE users; --

  **prevent injections**

  1. Sanitizing input: make sure that the expected data is input
  2. Parametrize queries: prevent SQL injections
  3. Knex.ks or other ORMS: helps prevent injections

  Note: NPM Built In Audit

In the next video, one of the tools I am going to show you a tool called NSP. However, if you have NPM version 6 or higher, NPM has added a bunch of security checks inside of NPM so you no longer need to install NSP like I show you in the next video!

You can now just use npm audit and npm audit fix command instead of the NSP commands you will see in the next video (they do the same thing). You actually saw me use the command in the CWD: Keeping Your Projects Up To Date lecture already so you can review that one more time if you would like to see it in action!

# Lesson 5. 3rd Party Libraries

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/24934454

# Lesson 6. Logging

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12678237

- Logging tells about issue in the app, so insuficient logging can provoke that we can not check what the issue is

- There are two pro packages for logging:

1. morgan (I have already used this)
2. winston

# Lesson 7. HTTPS Everywhere

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12678241

SSL/TLS Certificates

https://letsencrypt.org

deploy the website in secure source

# Lesson 8. XSS + CSRF

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12678244

Cross Site Encripting is using for section high jacking, the way to prevent this is sanitize input

- Check <XSS + CSRF> diagram

* Olways validate users input

* By sessions and tokens video, this will make more sense

# Lesson 9. Secure Headers

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12678247

npm install helmet

# Lesson 10. Access Control

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12678240

- Principal of least privilage

cors middleware in Express

# Lesson 11. Data Management

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12678246

Encript the data that is sensitive like passwords
hashing password and how to store them

There 3 libraries that are really good:

1. bcrypt
2. scrypt
3. Aragon2

# Lesson 12. Don't Trust Anyone

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12678250

# Lesson 13. Authentication

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12678242

- Check <Authentication< diagram

# Lesson 13. Section Summary

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12678248

**resume**

- Lesson # 3 provide a diagram with the main issues for security
- Injections is on of the most dangerous way of hackers attack
- 3rd Party Libraries: audit the npm packahes
- Logging: logging middleware like morgans
- HTTPS Everywhere: host our website in a trusted site
- XSS + CSRF: Example of hackers attack
- Secure Headers: helmet middleware
- Access Control: CORS middleware
- Authentication
