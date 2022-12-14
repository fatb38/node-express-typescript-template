import request from 'supertest'
import express from 'express'
import router from '../user/user.routes'

const app = express()
app.use('/', router)

describe('User routes', () => {
  test('responds to api/user/', async () => {
    const res = await request(app).get('/')
    expect(res.header['content-type']).toBe('application/json; charset=utf-8')
    expect(res.statusCode).toBe(200)
    expect(res.text).toEqual(JSON.stringify({
      firstname: 'François',
      lastname: 'Damiens'
    }))
  })
})
