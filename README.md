# Frontend Mentor - Age calculator app solution

This is a solution to
the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
    - Any field is empty when the form is submitted
    - The day number is not between 1-31
    - The month number is not between 1-12
    - The year is in the future
    - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

1. **Action**
   ![action](/screenshots/gif-action.gif)

2. **Desktop**
   ![desktop](/screenshots/desktop.jpeg)

3. **Desktop - Initial State**
   ![desktop-initial](/screenshots/desktop-initial.jpeg)

4. **Mobile**

   ![mobile](/screenshots/mobile.jpeg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Redux](https://redux.js.org/) - For managing state and fetching data
- [TailwindCSS](https://tailwindcss.com/) - For static style
- [React Spring](https://www.react-spring.dev/) - For animation

### What I learned

Rather than using Framer Motion like in my other challenges, I used React Sprint for simple animated Counter in this
project.

```typescript
const different = moment.preciseDiff(passedDate, today, true);

return NextResponse.json({ different });
```

Besides of that, I have learned how to create a simple API with NextJS 13.

```typescript jsx
const { number } = useSpring({
  from: { number: 0 },
  to: { number: maxValue },
  delay: 200,
  config: {
    mass: 1,
    tension: 170,
    friction: 10
  }
});
```

### Continued development

Compared with the challenge's request, I have not implemented the input warning custom style yet.
I will come back to add this feature in the future.

## Author

- Website - [Dat Proto](https://datproto.com)
- Frontend Mentor - [@datproto](https://www.frontendmentor.io/profile/datproto)
- Twitter - [@DatProtocol](https://twitter.com/DatProtocol)
