import { Request, Response } from "express";
import db from '@/db/drizzle'
import { urls } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { BASE_URL } from '@/utils/base-url'
class URLController {
  constructor() {}

  async createURL(req: Request, res: Response) {
    try {
      const { url } = req.body;
      const uniqueID = [...Array(6)].map(() => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62))).join('');
      const created = await db.insert(urls).values({
        url,
        uid: uniqueID, 
      }).returning({ created_at: urls.created_at, insertedId: urls.id })
      res.status(200).json({
        message: "Url created successfully!", 
        data: {
          id: created[0].insertedId, 
          original: url, 
          shortened: `${BASE_URL}/${uniqueID}`, 
          qr_code: `https://quickchart.io/qr?text=${`${BASE_URL}/${uniqueID}`}&size=200&centerImageUrl=https://i.imgur.com/RTuqNb2.png`, 
          created_at: created[0].created_at
        }
      })
    } catch (error: unknown) {
      console.log(error)
      res.status(500).json({
        message: "Failed to create url, something went wrong"
      })
    }
  }

  async redirect(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await db.select().from(urls).where(eq(urls.uid, id));
      if(product.length <= 0) {
        return res.status(404).json({
          error: "No url associated with that ID"
        })
      }
      res.redirect(product[0].url)
    } catch (error: unknown) {
      res.status(500).json({ 
        error: "Failed to get url, something went wrong"
      })
    }
  }

}

export default new URLController();
