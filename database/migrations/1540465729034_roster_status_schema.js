'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RosterStatusSchema extends Schema {
  up () {
    this.create('roster_statuses', (table) => {
      table.increments()
      table.string('title').unique
      table.string('color')
      table.string('code').unique
      table.boolean('consider_off')
      table.boolean('can_apply_leave')
      table.boolean('can_changed_manually')
      table.timestamps()
    })
  }

  down () {
    this.drop('roster_statuses')
  }
}

module.exports = RosterStatusSchema
