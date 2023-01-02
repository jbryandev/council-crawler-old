// import { NextApiRequest, NextApiResponse } from 'next';
// import { getAllAgendas } from '@/lib/datocms';
// import { differenceInDays } from 'date-fns';

// // Cutoff age for cleanup (number of days)
// // Agendas older than this will be deleted
// const CUTOFF_AGE = 30;

// // Handler function for API requests
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     try {
//       const { authorization } = req.headers;
//       if (authorization === `Bearer ${process.env.API_SECRET_KEY}`) {
//         // Call cleanup function
//         cleanup();
//         res.status(200).json({ success: true });
//       } else {
//         res.status(401).json({ succes: false });
//       }
//     } catch (error: any) {
//       res.status(500).json({ statusCode: 500, message: error.message });
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }

// const cleanup = async () => {
//   console.log('Cleaning up...');
//   const agendas = await getAllAgendas();
//   for (const i in agendas) {
//     const agendaDate = new Date(agendas[i].date);
//     const currentDate = new Date(Date.now());
//     const agendaAge = differenceInDays(currentDate, agendaDate);
//     if (agendaAge > CUTOFF_AGE) {
//       // console.log(
//       //   `${agendas[i].agency.name} ${agendas[i].date} will be deleted.`
//       // );
//     }
//   }
//   console.log('Clean up complete.');
// };
