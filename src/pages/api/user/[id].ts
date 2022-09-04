import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUsers = async (res: NextApiResponse) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id, name },
    method,
  } = req;

  const methods = {
    get: await getUsers(res),
    put: () => res.status(200).json({ id, name: name || `User ${id}` }),
    default: () => {
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    },
  };

  return methods[method];
}
