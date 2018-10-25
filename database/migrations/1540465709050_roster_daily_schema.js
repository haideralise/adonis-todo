'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RosterDailySchema extends Schema {
  up () {
    this.create('roster_dailies', (table) => {
      table.increments()
      table.date('day_date')
      table.time('start_at')
      table.time('ends_at')
      table.integer('status_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('roster_dailies')
  }
}

module.exports = RosterDailySchema
