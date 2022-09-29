const API_URL = 'https://graphql.datocms.com';
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllAgencies() {
  const data = await fetchAPI(
    `
    {
      allAgencies(orderBy: name_ASC) {
        name
        id
        slug
      }
    }
  `
  );
  return data?.allAgencies;
}

export async function getAgency(slug) {
  console.log(slug);
  const data = await fetchAPI(
    `
    query ($slug:String) {
      agency(filter: {slug: {eq: $slug}}) {
        slug
        name
        id
      }
    }
  `,
    {
      variables: {
        slug,
      },
    }
  );
  return data?.agency;
}

export async function getAllAgencyAgendas(agency_id) {
  const data = await fetchAPI(
    `
    query ($agency_id:ItemId) {
      allAgendas(filter: {agency: {eq: $agency_id}}) {
        date
        id
      }
    }
  `,
    {
      variables: {
        agency_id,
      },
    }
  );
  return data?.allAgendas;
}

export async function getAgenda(agency_id, date) {
  const data = await fetchAPI(
    `
    query ($agency_id:ItemId, $date:Date) {
      agenda(filter: {agency: {eq: $agency_id}, date: {eq: $date}}) {
        date
        url
      }
    }
  `,
    {
      variables: {
        agency_id,
        date,
      },
    }
  );
  return data?.agenda;
}
