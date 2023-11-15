// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(200)
    .json([
      "Hello, world!",
      "Hi there!",
      "Good morning!",
      "Good afternoon!",
      "Good evening!",
      "How are you doing?",
      "Nice to meet you!",
      "Greetings!",
      "Welcome!",
      "Howdy!",
    ]);
}
