// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    ["วันนี้", "ท้องฟ้า", "เป็น", "สี", "ฟ้า", "อย่าง", "ไร", "มา"],
    ["สี", "ฟ้า", "ของ", "ท้องฟ้า", "วันนี้", "มา", "จาก", "อะไร"],
    ["ทำไม", "วันนี้", "ท้องฟ้า", "ถึง", "ดู", "ฟ้า", "มาก"],
    ["สาเหตุ", "ใด", "ทำให้", "ท้องฟ้า", "วันนี้", "มี", "สีฟ้า"],
    ["ฟ้า", "วันนี้", "เป็น", "สีฟ้า", "เพราะ", "อะไร"],
  ]);
}
