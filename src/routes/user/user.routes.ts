import { Router, Request, Response } from 'express'

const router = Router()

router.route('/')
  .get((req: Request, res: Response) => {
    res.json(
      {
        firstname: 'François',
        lastname: 'Damiens'
      }
    )
  })

export default router
