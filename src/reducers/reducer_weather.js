import { FETCH_WEATHER } from '../actions/index';
import _ from 'lodash';

export default function(state = [], action) {

  switch (action.type) {
  case FETCH_WEATHER:
  const weatherData = action.payload.data;

    if(weatherData.cod !== '404') {
      // prevent duplicates being added to the list
      let containsCity = _.find(state, function (item) { return item.city.id === weatherData.city.id });
      if (containsCity) { return state; }

      return [weatherData, ...state];

    } else {
      console.log(weatherData.message);
      return state;
    }
    // return state.concat([weatherData]);
    // return [ weatherData, ...state ];
  }
  return state;
}
