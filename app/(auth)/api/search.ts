import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Invalid query' });
  }

  const movies = await prisma.movie.findMany({
    where: {
      title: {
        contains: query,
        mode: 'insensitive',
      },
    },
  });

  res.status(200).json(movies);
}
