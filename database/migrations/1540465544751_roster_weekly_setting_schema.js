'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RosterWeeklySettingSchema extends Schema {
  up () {
    this.create('roster_weekly_settings', (table) => {
      table.increments()
      table.integer('wd0').default(1)
      table.integer('wd1').default(1)
      table.integer('wd2').default(1)
      table.integer('wd3').default(1)
      table.integer('wd4').default(1)
      table.integer('wd5').default(0)
      table.integer('wd6').default(0)
      table.time('starts_at')
      table.time('ends_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('roster_weekly_settings')
  }
}

module.exports = RosterWeeklySettingSchema
