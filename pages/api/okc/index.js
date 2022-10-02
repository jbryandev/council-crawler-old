export default function getUpcomingMtgs(req, res) {
  if (req.method === 'GET') {
    const url =
      'https://okc.primegov.com/api/v2/PublicPortal/ListUpcomingMeetings?_=1664477923943';

    try {
      const response = await fetch(url);
      console.log(response);
      res.statusCode = 200;
      return res;
    } catch (e) {
      res.statusCode = 404;
      return res;
    }
  }
}
