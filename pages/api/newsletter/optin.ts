import { NextApiRequest, NextApiResponse } from 'next';

import sendGridMail from '@sendgrid/mail';
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
    const email = req.body.email;

    if (!email || !email.includes('@')) {
      res
        .status(httpStatus.BadRequest)
        .json({ message: 'Você precisa enviar um email válido' });
      return;
    }

    // cadastrar no db
    await dbClient
      .from('newsletter_users')
      .insert({ email: email, optin: true });

    // cadastrar como user no supabase
    await dbClient.auth.admin.createUser({ email: email });

    try {
      sendGridMail.setApiKey(process.env.SENDGRID_KEY);
      await sendGridMail.send({
        to: email,
        from: 'raijoiamv@gmail.com',
        subject: 'Newsletter - Raí Joia',
        html: '<h1>Olá, seja bem vindo a minha newsletter!</h1>'
      });

      res
        .status(httpStatus.Sucess)
        .json({ message: 'email cadastrado e enviado' });
    } catch (error) {
      res
        .status(httpStatus.InternalServerError)
        .json({ message: `${error}, falhamos em enviar o seu email` });
      return;
    }
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
