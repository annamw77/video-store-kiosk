import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  overview: DS.attr('string'),
  inventory: DS.attr('number'),
  poster_filename: DS.attr('string'),
});
