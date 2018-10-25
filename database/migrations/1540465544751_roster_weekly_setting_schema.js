'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RosterWeeklySettingSchema extends Schema {
  up () {
    this.create('roster_weekly_settings', (table) => {
      table.increments()
      table.integer('monday').default(1)
      table.integer('tuesday').default(1)
      table.integer('wednesday').default(1)
      table.integer('thursday').default(1)
      table.integer('friday').default(1)
      table.integer('saturday').default(0)
      table.integer('sunday').default(0)
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
