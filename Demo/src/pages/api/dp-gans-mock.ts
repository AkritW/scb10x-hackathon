// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    ["ทำไม", "วัน", "นี้", "ฟ้า", "ถึง", "สดใส", "เป็น", "พิเศษ"],
    ["มอง", "ดู", "ท้องฟ้า", "แล้ว", "วันนี้", "มัน", "ฟ้า", "มาก", "เลย"],
    ["วันนี้", "ท้องฟ้า", "เป็น", "สี", "ฟ้า", "ยิ่งกว่า", "ทุกวัน"],
    ["วันนี้", "บน", "ท้องฟ้า", "เต็ม", "ไปด้วย", "สี", "ฟ้า"],
    ["วันนี้", "ทำไม", "ท้องฟ้า", "สี", "ฟ้า"],
  ]);
}
