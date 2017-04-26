# Next & Apollo Example with Redux Integration [![Build Status](https://travis-ci.org/ads1018/next-apollo-example.svg?branch=master)](https://travis-ci.org/ads1018/next-apollo-example)

*Note: this example has been merged into the  [Next.js](https://github.com/zeit/next.js/) `examples/` directory as an [official showcase](https://github.com/zeit/next.js/tree/master/examples/with-apollo-and-redux).
The only difference between the two examples is the CSS-in-JS solution. This example features my preferred CSS-in-JS solution, [Styletron](http://styletron.js.org), whereas the other example features [styled-jsx](https://github.com/zeit/styled-jsx) (for those who prefer a more traditional CSS syntax).

## Demo
https://next-with-apollo.now.sh

## How to use
Install it and run

```bash
npm install
npm run dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example
By default, Apollo Client creates its own internal Redux store to manage queries and their results. If you are already using Redux for the rest of your app, [you can have the client integrate with your existing store instead](http://dev.apollodata.com/react/redux.html).
