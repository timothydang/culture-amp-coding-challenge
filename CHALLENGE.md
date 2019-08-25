# Culture Amp’s Front End Coding Test

Given an HTTP API that offers access to a database of survey results, your task
is to build a web front end that displays the data supplied by this API. You
must process the survey data and display the results in a clear, usable
interface.

Use whatever client-side libraries or frameworks you think make sense.

## The API

Here is the root URL for an HTTP API that offers access to a database of survey
results:

https://px2yf2j445.execute-api.us-west-2.amazonaws.com/production

If you request /surveys (appending this to the root URL above), you will get
a list of the surveys that are stored in the database, and high-level statistics
for each. For each survey, a URL is included that points to the address you can
use to fetch the details for that specific survey.

(If the API URL doesn't work for you, please contact us. It may have changed!)

The details you can get for each survey include all of the response data. Each
survey is broken into one or more themes, each theme contains one or more
questions, and each question contains a list of responses. A response represents
an individual user (`"respondent_id"`) answering an individual question
(`"question_id"`). The content of each response represents an agreement rating
on a scale of `"1"` (strongly disagree) to `"5"` (strongly agree). If you
wished, you could obtain all of the responses for a single user by consulting
all of the responses with that user’s `"respondent_id"`.

## Requirements

Your application should include:

- a page that lists all of the surveys and allows the user to choose one to view
  its results;
- a page that displays an individual survey’s results, including:
  - the participation rate as a percentage
  - the average rating (from 1 to 5) for each question

Responses with an empty rating should be considered non-responses (questions
skipped by the survey respondent). These responses should be excluded when
calculating the average.

You can deliver a set of static HTML pages that consume the API data with
JavaScript, but keep in mind that we need to be able to read your code, so if
you’re compiling your JavaScript in any way, please include your source code
too. Alternatively, if you want to build an application that runs on its own web
server, that’s okay too.

## Recommendations

- Be creative in considering the right way to display the results.
- Feel free to use frameworks and libraries, but keep in mind that we are
  looking for something that demonstrates that you can write good front-end
  code, not just wire up a framework.
- The data we have there now should load pretty quickly, but web APIs aren't
  always so performant. Consider how your application will behave if the API is
  slow.
- Include a README file with clear build instructions that we can follow.
- Include in your README any other details you would like to share, such as
  tradeoffs you chose to make, what areas of the problem you chose to focus on
  and the reasons for your design decisions.
- We like tests and types, but neither is mandatory.

Beyond meeting the minimum requirements above, it’s up to you where you want to
focus. We don’t expect a fully-finished, production-quality web application;
rather, we’re happy for you to focus on whatever areas you feel best showcase
your skills.

## Submitting your solution

Assuming you use Git to track changes to your code, when you’re ready to submit
your solution, please use `git bundle` to package up a copy of your repository
(with complete commit history) as a single file and send it to us as an email
attachment.

```
git bundle create front-end-coding-test.bundle master
```

We look forward to seeing what you come up with!
