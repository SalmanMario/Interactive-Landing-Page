# Frontend Mentor - Interactive rating component solution

![Design preview for the Interactive rating component coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Solution for css](https://www.youtube.com/watch?v=cQnUopEeZgw&t=0ss&ab_channel=TsbSankara)
- Live Site URL: [My live page](https://salmanmario.github.io/Interactive-Landing-Page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I've learned again about css flex-box and it's properties,which was the most difficult part of this challenge

To see how you can add code snippets, see below:

```html
<div class="main-container"></div>
```

```css
body {
  background-color: var(--dark-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  margin: 0.5rem;
  min-height: 100vh;
}
```

```js
btns.forEach((rateBtn) => {
  rateBtn.addEventListener("click", function () {
    rating.innerHTML = rateBtn.innerHTML;
  });
});
```

### Useful resources

- [Youtube Guide](https://www.youtube.com/watch?v=cQnUopEeZgw&t=0ss&ab_channel=TsbSankara) - This helped me with css flex.

## Author

- Website - [Salman Mario](https://salmanmario.github.io/Interactive-Landing-Page/)
- Frontend Mentor - [@SalmanMario](https://www.frontendmentor.io/profile/SalmanMario)

# Interactive-Landing-Page
