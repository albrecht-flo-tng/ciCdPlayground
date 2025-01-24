import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Flo",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Automated Deployment", "Automated testing", "Security checks"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins, GitLab",
    // What do you want to learn in this workshop?
    expectations: ["I hope to gain an overview of Jenkins and an introduction to GitHub actions"],
  },
});
