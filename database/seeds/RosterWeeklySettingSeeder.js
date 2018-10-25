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
const weeklySettings = use('App/Models/RosterStatus')
class RosterWeeklySettingSeeder {
  async run () {

    const rosterWeeklySettings = new weeklySettings();

    rosterWeeklySettings.id = 0;
    rosterWeeklySettings.wd0 = 1 ;
      rosterWeeklySettings.wd1 = 1;
      rosterWeeklySettings.wd2 = 1;
      rosterWeeklySettings.wd3 = 1;
      rosterWeeklySettings.wd4 = 1;
      rosterWeeklySettings.wd5 = 0;
      rosterWeeklySettings.wd6 = 0;
      rosterWeeklySettings.starts_at = '9:00:00';
      rosterWeeklySettings.ends_at = '18:00:00';
     await rosterWeeklySettings.save();

  }
}

module.exports = RosterWeeklySettingSeeder
