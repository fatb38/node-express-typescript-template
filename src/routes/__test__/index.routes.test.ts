import request from 'supertest'
import express from 'express'
import router from '../index.routes'

const app = express()
app.use('/', router)

describe('Index routes', () => {
  test('responds to /', async () => {
    const res = await request(app).get('/')
    expect(res.header['content-type']).toBe('text/html; charset=utf-8')
    expect(res.statusCode).toBe(200)
    expect(res.text).toEqual('Coucou petite perruche !!')
  })
})
