# Plunk Node.js
This project contains the helper library for interacting with the Plunk API using Node.js.

## Table of contents
- [Installation](#installation)
- [Getting started](#getting-started)
- [API](#api)
    - [Events](#events)

![Card](https://www.useplunk.com/assets/card.png)

## Installation
Installing the latest version can be done through your package manager.

```shell
npm i @plunk/node

yarn add @plunk/node
```

## Getting started
Any interaction you want to make with the Plunk API needs to be done through the Plunk client. You can use a default import to get started.

```js
import Plunk from '@plunk/node';

const plunk = new Plunk("Your secret key");
```

## API
### Events
#### publish()
Used to publish an event

##### Parameters
- String, the email of the lead you want to look up
```ts
const success = await plunk.events.publish({
  event: "new-project", 
  email: "hello@useplunk.com"
});
```