import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import jwt from "jwt-simple";

const prisma = new PrismaClient();

interface loginParams {
  email: string;
  password: string;
}

const login = async (res: NextApiResponse, params: loginParams) => {
  const { email, password } = params;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || user.password !== password) {
    return res.status(400).json({
      error: "Este e-mail não está cadastrado ou a senha está errada.",
    });
  }

  delete user.password;
  const token = jwt.encode(user, process.env.SECRET);
  res.status(200).json({ token });
};

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { email, password },
    method,
  } = req;

  const methods = {
    POST: async () => await login(res, { email, password } as loginParams),
    default: () => {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    },
  };

  return (methods[method] && methods[method]()) || methods.default();
}
