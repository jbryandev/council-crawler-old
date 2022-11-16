import { patchAgenda } from '@/lib/webflow';

// Handler function for API requests
export default async function handler(req, res) {
  //
  // Verify authenticated
  //
  const { authorization } = req.headers;
  if (authorization === `Bearer ${process.env.API_SECRET_KEY}`) {
    if (req.method === 'PATCH') {
      //
      // Update agenda
      //
      try {
        const itemId = req.query.itemId;
        const fields = req.body;
        const live = req.query.live;
        const agenda = await patchAgenda(itemId, fields, live);
        res.status(200).json(agenda);
      } catch (error) {
        res.status(500).json({
          statusCode: 500,
          message: error.message,
          problems: error.problems,
        });
      }
    } else {
      //
      // Reject any other method
      //
      res.status(405).end('Method Not Allowed');
    }
  } else {
    //
    // Not authenticated
    //
    res.status(401).end('Not Authorized');
  }
}
