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

// Using the default API URL
const plunk = new Plunk("Your secret key");

// Or specifying a custom API URL
const plunkCustom = new Plunk("Your secret key", { baseUrl: "https://selfhosted.example.com/api/v1/" });
```

These changes will allow users to specify a custom API URL while maintaining backward compatibility with the existing implementation.

## API
### Events
#### track()
Used to publish an event

##### Parameters
- `event`: The name of the event to publish
- `email`: The email address of the user to publish the event to
- `subscribed` [Optional]: Whether to the contact is subscribed to marketing emails, defaults to `true`
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
- `body`: The body of the email
- `type` [Optional]: The type of email to send (`html` or `markdown`)
- `from` [Optional]: The email address of the sender
- `name` [Optional]: The name of the sender
- `subscribed` [Optional]: Whether to the contact is subscribed to marketing emails, defaults to `false`

```ts
const success = await plunk.emails.send({
  to: "hello@useplunk.com",
  subject: "Welcome to Plunk",
  body: "Hello world!",
});
```