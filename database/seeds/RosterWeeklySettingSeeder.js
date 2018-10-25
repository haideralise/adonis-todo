'use strict'

/*
|--------------------------------------------------------------------------
| RosterWeeklySettingSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const weeklySettings = use('App/Models/RosterWeeklySetting')
class RosterWeeklySettingSeeder {
  async run () {

    const rosterWeeklySettings = new weeklySettings();

    rosterWeeklySettings.id = 0;
    rosterWeeklySettings.monday = 1 ;
      rosterWeeklySettings.tuesday = 1;
      rosterWeeklySettings.wednesday = 1;
      rosterWeeklySettings.thursday = 1;
      rosterWeeklySettings.friday = 1;
      rosterWeeklySettings.saturday = 0;
      rosterWeeklySettings.sunday = 0;
      rosterWeeklySettings.starts_at = '9:00:00';
      rosterWeeklySettings.ends_at = '18:00:00';
     await rosterWeeklySettings.save();

  }
}

module.exports = RosterWeeklySettingSeeder
