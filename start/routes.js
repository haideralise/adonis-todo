'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
'use strict'

const Route = use('Route')
const Event = use('Event')


Route.on('/').render('welcome')

Route.on('/home').render('home')

Route.post('/send', async ({request, session, response}) => {
  const message = request.input('message')

  Event.fire('send.message', message)

  session.flash({ status: 'Message sent' })
  return response.redirect('back')

}).as('sendMessage')

Route.get('/tasks', 'TaskController.index').as('tasks')

Route.post('tasks', 'TaskController.store')
Route.delete('tasks/:id', 'TaskController.destroy')
