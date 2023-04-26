# Plunk Node.js
This project contains the helper library for interacting with the Plunk API using Node.js.

## Table of contents
- [Installation](#installation)
- [Getting started](#getting-started)
- [API](#api)
    - [Events](#events)
    - [Email](#emails)

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
#### track()
Used to publish an event

##### Parameters
- `event`: The name of the event to publish
- `email`: The email address of the user to publish the event to
- `data` [Optional]: An object containing the data to attach to the user

```ts
const success = await plunk.events.track({
  event: "new-project",
  email: "hello@useplunk.com",
  data: {
    company: "Plunk"
  }
});
```

### Emails
#### send()
Used to send a transactional email
##### Parameters
- `to`: The email address of the recipient
- `subject`: The subject of the email
- `body`: The body of the email (HTML, plain text, or Markdown)
- `from` [Optional]: The email address of the sender
- `name` [Optional]: The name of the sender
- `withUnsubscribe` [Optional]: Whether to include an unsubscribe link hosted by Plunk in the email

```ts
const success = await plunk.emails.send({
  to: "hello@useplunk.com",
  subject: "Welcome to Plunk",
  body: "# Hello world!",
});
```