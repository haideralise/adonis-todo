'use strict'

/*
|--------------------------------------------------------------------------
| RosterStatusSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const RosterStatus = use('App/Models/RosterStatus')

class RosterStatusSeeder {
  async run () {

    const stausInstance = new RosterStatus();
    const statuses = [
      {
        id : 1,
        title : 'On',
        color : '#45C35E',
        code : 'on',
        consider_off : 1,
        can_apply_leave : 1,
        can_changed_manually : 1
      },
      {
        id : 2,
        title : 'OFF',
        color : '#FF6666',
        code : 'on',
        consider_off : 1,
        can_apply_leave : 1,
        can_changed_manually : 1
      },
      {
        id : 3,
        title : 'Traveling',
        color : '#FFB266',
        code : 'T',
        consider_off : 1,
        can_apply_leave : 1,
        can_changed_manually : 1
      },
      {
        id : 4,
        title : ' On Site',
        color : '#FF6666',
        code : 'S',
        consider_off : 1,
        can_apply_leave : 1,
        can_changed_manually : 1
      },{
        id : 4,
        title : 'Holiday',
        color : '#909090',
        code : 'H',
        consider_off : 0,
        can_apply_leave : 0,
        can_changed_manually : 0
      },
    ];
    for(let i =0; i< statuses.length; i++){
      await  stausInstance.create(statuses[i]);
    }


  }
}

module.exports = RosterStatusSeeder
