## Chapter 03. Performance

# Lesson 1. Bruno's Request

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604204

# Lesson 2. Introduction to Performance Part 1

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604201

# Lesson 3. 3 Keys To Performance

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604203

- Improve the Client side (frontend)
- Transfer of our file over the wire. Network latency
- Improve the process done in the backend

* Check <improve performance> diagram

# Lesson 4. Network Performance

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604210

- Minimize text (HTML, CSS, Javascript) and minimize images. Check <network performance> diagram

# Lesson 5. Image File Formats

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604202

Formats:

- JPG: Bit large in size and rich in colors. It does not allow transparency
- GIF: small, good for animations
- PNG: less rich in colors than JPG, allows transparency
- SVG: very small size, low range colors, it can expand several time the size and the quality is the same, it is often used by designers

# Lesson 6. Image Optimizations 1

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604208

- If you want transparency: use a PNG
- If you want animation: use a GIF
- If you want colorful images: use a JPG
- If you want simple icons, logos, illustrations: use SVG
- Reduce PNG with TinyPNG
- Reduce JPG with JPEG-optimazer
- Try to use simple illustration over highly detailed photographs
- Always low JPG image quality (30 - 60 %)
- Resize image based on size it will be desplayed
- Display different size image for different backgrounds
- Use CDNs like imigx
- Remove image metadata

# Lesson 7. Image Optimizations 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604205

- Use of media queries (CSS to set format depending on the screen size)

# Lesson 8. Delivery Optimizations

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604216

- If we are gonna use a library, then use those that are light weight

# Lesson 9. Exercise: #2 - Network Optimizations

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604215

Open Chrome with the example to check the javascript developer tools

http://127.0.0.1:5500

# Lesson 10. Solution: #2 - Network Optimizations

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604209

- Website to minimize the script:
  https://minify-js.com

- Website to minize CSS:
  https://minify-css.com

* Somehow the website is not working

- I need to install a image editor to reduce the size of the image

- Delete this css so the website won't ipload the large image in the wide screen:
  @media screen and (min-width: 900px) {
  body {
  background: url('./large-background.jpg') no-repeat center center fixed;
  background-size: cover;
  }
  }

- Combine css files:
  Copy code from style2.css to style.css
  Delete style2.css

- Combine javascript files:
  Copy code from script2.js and script3.js into script
  Delete script2 and script3

* There are tools to do this like webpack, this is just an exercise

# Lesson 11. Critical Render Path Introduction

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604211

DOM => Document Object Model

- Check <critical render path> diagram

# Lesson 12. Critical Render Path 1

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604207

- Load CSS file as soon as possible, in the <head>
- Load Javascript files as late as possible, right before </body>

# Lesson 13. Critical Render Path 2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604214

CSS:

- Load only what you need
- Above the fold loading
- Media atribute (media queries)
- Less specifity

<Above the fold loading> means only to load the css that the user watch with scrollong. This is done with a javascript checking(if):
const loadStyleSheet = src => {
if(document.createStylesheet){
document.createStylesheet(src)
}else{
const stylesheet = document.createElement('link');
stylesheet.href = src;
stylesheet.type = 'text/css';
stylesheet.rel = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(stylesheet)
}
}

window.onload = function(){
console.log('window done');
loadStyleSheet(./style3.css)
}

<Less specifity>

/_ bad _/
.header .nav .item .link a.important{
color:pink
}

/_ good _/

a.important{
color:pink
}

# Lesson 14. Critical Render Path 3

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604206

- Load Scripts asynchronously
- Defer loading of scripts
- Minimize DOM manipulation
- Avoid long running javascrips

* Check <synchronous vs asynchronous> diagram

# Lesson 15. Critical Render Path 4

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604200

- Check <critical render path> diagram

# Lesson 16. Exercise: #4 - Keiko Corp Website

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604220

Websites to analizes other websites:

https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect

https://www.webpagetest.org

# Lesson 17. Solution: Keiko Corp Website

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604213

1. Move the scripts outta <head> and place them just above </body>
2. Minimize the size of the image

# Lesson 18. HTTP/2

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604217

# Lesson 19. Section Summary

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12604212
