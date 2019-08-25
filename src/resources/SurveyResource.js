import { Resource } from 'rest-hooks';

export default class SurveyResource extends Resource {
  url = '';
  name='';
  participant_count = 0;
  response_rate = 0;
  submitted_response_count = 0;
  themes = [];

  pk() {
    // Note: since resource id is missing, try to get it from the url
    // Real-world REST endpoint should provide an id for any resource
    if (this.id && this.id !== '') {
      return this.id
    }

    const regex = /(\/surveys\/|\/survey_results\/)(\d+)/
    this.id = this.url.match(regex)[2]
    return this.id;
  }

  // Note: overwrite the default fetch shape in rest-hooks
  static detailShape() {
    return {
      ...super.detailShape(),
      schema: { survey_result_detail: this.getEntitySchema() }
    };
  }

  // Note: overwrite the default fetch shape in rest-hooks
  static listShape() {
    return {
      ...super.listShape(),
      schema: { survey_results: [this.getEntitySchema()] }
    };
  }

  // static urlRoot = 'https://px2yf2j445.execute-api.us-west-2.amazonaws.com/production/surveys';
  static urlRoot = 'http://127.0.0.1:8000/surveys';
}
