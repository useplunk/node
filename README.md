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
- `event`: The name of the event to publish
- `email`: The email address of the user to publish the event to
- `data` [Optional]: An object containing the data to attach to the user

```ts
const success = await plunk.events.publish({
  event: "new-project",
  email: "hello@useplunk.com",
  data: {
    company: "Plunk"
  }
});
```