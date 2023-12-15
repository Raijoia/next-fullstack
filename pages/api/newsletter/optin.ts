import { NextApiRequest, NextApiResponse } from 'next';

import { createClient } from '@supabase/supabase-js';

// Supabase setup
// ==============================================
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const dbClient = createClient(SUPABASE_URL, SUPABASE_KEY);
// ==============================================

const httpStatus = {
  Sucess: 200,
  BadRequest: 400,
  InternalServerError: 500,
  NotFound: 404
};

const controllerByMethod = {
  async POST(req: NextApiRequest, res: NextApiResponse) {
    res.status(httpStatus.Sucess).json({ message: 'POST' });
  },
  async GET(req: NextApiRequest, res: NextApiResponse) {
    const { data, error } = await dbClient.from('newsletter_users').select('*');

    res.status(httpStatus.Sucess).json({ message: 'GET', total: data.length });
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
