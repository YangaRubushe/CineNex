import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/utils/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  if (typeof query !== "string" || query.trim() === "") {
    return res.status(400).json([]);
  }

  const data = await prisma.movie.findMany({
    where: {
      OR: [
        { title: { contains: query, mode: "insensitive" } },
        { category: { contains: query, mode: "insensitive" } },
      ],
    },
    select: {
      age: true,
      duration: true,
      id: true,
      release: true,
      imageString: true,
      overview: true,
      youtubeString: true,
      title: true,
      category: true,
      WatchLists: true,
    },
  });

  res.json(data);
}
