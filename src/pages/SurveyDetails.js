import React from 'react';
import Survey from './../components/Survey';

export default function SurveyDetails ({ match }) {
  const surveyId = match.params.id

  return (
    <>
      <Survey id={surveyId} />
    </>
  )
}
