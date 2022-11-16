import { getAgendas, addAgenda, deleteAgenda } from '@/lib/webflow';

// Handler function for API requests
export default async function handler(req, res) {
  //
  // Verify authenticated
  //
  const { authorization } = req.headers;
  if (authorization === `Bearer ${process.env.API_SECRET_KEY}`) {
    if (req.method === 'GET') {
      //
      // Return all agendas
      //
      try {
        const agendas = await getAgendas();
        res.status(200).json(agendas);
        return agendas;
      } catch (error) {
        res.status(500).json({ statusCode: 500, message: error.message });
      }
    } else if (req.method === 'POST') {
      //
      // Add agenda
      //
      try {
        const fields = req.body;
        const live = req.query.live;
        const agenda = await addAgenda(fields, live);
        res.status(200).json(agenda);
      } catch (error) {
        res.status(500).json({ statusCode: 500, message: error.message });
      }
    } else if (req.method === 'DELETE') {
      //
      // Delete agenda
      //
      try {
        const itemIds = req.body.itemIds;
        const live = req.body.live;
        const agenda = await deleteAgenda(itemIds, live);
        res.status(200).json(agenda);
      } catch (error) {
        res.status(500).json({ statusCode: 500, message: error.message });
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
