import { getNowPlaying } from '../spotify';

export default async function handler(req, res) {
  const response = await getNowPlaying();
  
  res.setHeader('Cache-Control', 's-maxage=60');
  
  return res.status(200).json(response);
}