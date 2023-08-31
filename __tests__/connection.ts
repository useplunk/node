import Plunk from "../src";

test("Making a connection", async () => {
  const plunk = new Plunk("");

  // Publishing an event
  // const success = await plunk.events.track({
  //   event: "new-project",
  //   email: "hello@useplunk.com",
  //   data: {
  //     project: "Plunk",
  //     url: {
  //       value: "https://www.useplunk.com",
  //       persistent: false,
  //     },
  //   },
  // });

  // Sending an email
  // const success = await plunk.emails.send({
  //   to: "hello@useplunk.com",
  //   subject: "Welcome to Plunk",
  //   body: "# Hello world!",
  //   type: "markdown",
  // });
});
