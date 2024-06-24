import axios from 'axios';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function(req: VercelRequest, res: VercelResponse) {
  try {
    const response = await axios.get('https://cdn-dev.preoday.com/challenge/menu');
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
  }
}
