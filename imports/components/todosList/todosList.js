import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template   from '../../../imports/components/todosList/todosList.html';
import { Tasks } from '../../../imports/api/tasks.js';
//import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor'
//export const Tasks = new Mongo.Collection('tasks');
//Items = new Mongo.Collection('items');

class TodosListCtrl {
  constructor($scope,$meteor) {
    $scope.viewModel(this);
    //console.log(Tasks.findOne());
    this.helpers({
      tasks() {
        console.log( Tasks.find());
        return Tasks.find().map( function(u) { return u; } );
      }
    })
    
    //this.tasks = Tasks.find().fetch();
    //$scope.$applyAsync();
    // this.helpers({
    //   tasks() {
    //     return Tasks.find({});
    //   }
    // });
    // this.helpers({
    //   tasks() {
    //     return Tasks.find({});
    //   }
    // })
    // this.tasks = [{
    //   text: 'This is task 1'
    // }, {
    //   text: 'This is task 2'
    // }, {
    //   text: 'This is task 3'
    // }];
  }
  addTask(newTask) {
    // Insert a task into the collection
    Tasks.insert({
      text: newTask,
      createdAt: new Date
    });

    // Clear form
    this.newTask = '';
  }

  setChecked(task) {
    // Set the checked property to the opposite of its current value
    Tasks.update(task._id, {
      $set: {
        checked: !task.checked
      },
    });
  }

  removeTask(task) {
    Tasks.remove(task._id);
  }
}

export default angular.module('todosList', [
  angularMeteor
])
  .component('todosList', {
    templateUrl:template,
    controller: ['$scope', TodosListCtrl]
  });