import { Meteor } from 'meteor/meteor';
import {Tasks } from '../imports/api/tasks.js';

Meteor.startup(() => {
  Tasks.insert({ text: 'hello how are you Umesh!' });
  // code to run on server at startup
//   if(Tasks.find().count() === 0){
//     Tasks.insert({
//       text: 'Test'
//     })
//     Tasks.insert({
//       text: 'Test1'
//     })
//     Tasks.insert({
//       text: 'Test2'
//     })
//     Tasks.insert({
//       text: 'Test3'
//     })
//     Tasks.insert({
//       text: 'Test4'
//     })
// }
});
