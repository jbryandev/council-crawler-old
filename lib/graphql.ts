export const allAgenciesQuery = `
  {
    allAgencies(orderBy: name_ASC) {
      name
      id
      slug
    }
  }
`;

export const getAgencyQuery = `
  query ($slug:String) {
    agency(filter: {slug: {eq: $slug}}) {
      slug
      name
      id
    }
  }
`;

export const allAgendasQuery = `
 {
    allAgendas {
      date
      agency {
        slug
      }
    }
  }
`;

export const allAgencyAgendasQuery = `
  query ($agency_id:ItemId) {
    allAgendas(filter: {agency: {eq: $agency_id}}, orderBy: date_DESC) {
      date
      id
    }
  }
`;

export const getAgendaQuery = `
  query ($agency_id:ItemId, $date:Date) {
    agenda(filter: {agency: {eq: $agency_id}, date: {eq: $date}}) {
      id
      date
      url
      content
    }
  }
`;
