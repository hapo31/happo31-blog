// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-fetch";
import { APIResponse, ErrorResponse } from "./status";

export type CreateResponse = APIResponse<{}> | ErrorResponse;

export async function postArticle(title: string, body: string) {
  const result = await fetch("api/create", {
    method: "POST",
    body: JSON.stringify({ title, body }),
  });

  return (await result.json()) as CreateResponse;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateResponse>
) {
  const requestBody = JSON.parse(req.body);
  const { title, body }: { title: string; body: string } = requestBody;
  try {
    if (title != null && body != null) {
      const client = new PrismaClient();
      await client.article.create({
        data: {
          body: Buffer.from(body),
          title,
          snippet: body.substr(0, 128),
        },
      });
      res.status(200).json({ data: {} });
    } else {
      res.status(400).json({ reason: `title or body is missing, need both.` });
    }
  } catch (e) {
    res.status(500).json({ reason: JSON.stringify(e) });
  }
}
