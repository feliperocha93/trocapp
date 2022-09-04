import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUser = async (res: NextApiResponse, id: number) => {
  const user = await prisma.user.findUnique({ where: { id } });
  res.json(user);
};

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  const methods = {
    get: await getUser(res, Number(id)),
    default: () => {
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    },
  };

  return methods[method];
}
