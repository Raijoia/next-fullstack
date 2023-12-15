import { NextApiRequest, NextApiResponse } from 'next';

const httpStatus = {
  Sucess: 200,
  BadRequest: 400,
  InternalServerError: 500,
  NotFound: 404
};

const controllerByMethod = {
  POST(req: NextApiRequest, res: NextApiResponse) {
    res.status(httpStatus.Sucess).json({ message: 'POST' });
  },
  GET(req: NextApiRequest, res: NextApiResponse) {
    res.status(httpStatus.Sucess).json({ message: 'GET' });
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const controller = controllerByMethod[req.method];
  if (!controller) {
    res.status(httpStatus.NotFound).json({ message: 'Not Found' });
    return;
  }

  controller(req, res);
}
