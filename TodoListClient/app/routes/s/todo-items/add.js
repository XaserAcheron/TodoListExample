import Ember from 'ember';
import DataRoute from 'ember-data-route';

export default Ember.Route.extend(DataRoute, {
  model() {
    const newItem = this.store.createRecord('todo-item');

    // [XA] Default the owner to the first user. This is just a temporary shim
    // to get this to work; in a real app, get the user ID from the session.
    const currentUser = this.store.peekAll('application-user').get('firstObject');
    newItem.set('owner', currentUser);
    return newItem;
  },

  actions: {
    save() {
      this.get('controller.model')
        .save()
        .then(() => {
          this.transitionTo('s.todo-items');
        });
    }
  },

});
