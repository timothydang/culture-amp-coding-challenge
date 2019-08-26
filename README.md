# Coding challenge for Culture Amp

- Having looked at [Rest Hooks](https://resthooks.io "Rest Hooks") before, I want to take this opportunity to use it for this code challenge as it seems to be a good library to tackle this code assignment efficiently.
  - It provides a few user-friendly React hooks to wire up exisiting REST endpoints. Not only it handles cache for network requests, it also give some handy functions for handle loading state and network errors via React Suspense and error boundary.

## Assumptions
- To save some time with styling, I have used [semantic-ui](https://react.semantic-ui.com/) for React.
- Survey ID are parsed from the response `url` attribute. This is used to uniquely identified each survey and act as a primary key for Resource Definition in [Rest Hooks](https://resthooks.io "Rest Hooks").
- Participation rate and question rating are both formatted to 1 decimal point.
- Tests are written using Jest and react-testing-library. Due to time constraint, I have only covered testing UI components. Integration and HTTP request, React hooks testing hasn't been covered in this submission.

### Running on local development environment

```yarn start``

### Building the app for production

```yarn build``

### Running test

```yarn test``
