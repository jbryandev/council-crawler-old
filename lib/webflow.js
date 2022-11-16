import Webflow from 'webflow-api';

// Initialize the webflow client
const webflow = new Webflow({ token: process.env.WEBFLOW_API_KEY });

//=======================
// Agency
//=======================
// Get all agencies
export const getAgencies = async () => {
  const agencies = await webflow.items({
    collectionId: process.env.WEBFLOW_AGENCY_COLLECTION_ID,
  });
  if (!agencies) {
    throw 'Could not get agencies';
  }
  return agencies;
};

//=======================
// Agenda
//=======================
// Get all agendas
export const getAgendas = async () => {
  const agendas = await webflow.items({
    collectionId: process.env.WEBFLOW_AGENDA_COLLECTION_ID,
  });
  if (!agendas) {
    throw 'Could not get agendas';
  }
  return agendas;
};

// Add agenda
export const addAgenda = async (fields, live) => {
  const agenda = await webflow.createItem({
    collectionId: process.env.WEBFLOW_AGENDA_COLLECTION_ID,
    fields,
    live,
  });
  if (!agenda) {
    throw 'Could not add agenda';
  }
  return agenda;
};

// Update agenda
export const updateAgenda = async (itemId, fields, live) => {
  const agenda = await webflow.updateItem({
    collectionId: process.env.WEBFLOW_AGENDA_COLLECTION_ID,
    itemId: itemId,
    fields,
    live,
  });
  if (!agenda) {
    throw 'Could not update agenda';
  }
  return agenda;
};

// Patch agenda
export const patchAgenda = async (itemdId, fields, live) => {
  const agenda = await webflow.patchItem({
    collectionId: process.env.WEBFLOW_AGENDA_COLLECTION_ID,
    itemId: itemdId,
    fields,
    live,
  });
  if (!agenda) {
    throw 'Could not update agenda';
  }
  return agenda;
};

// Delete agenda(s)
export const deleteAgenda = async (itemdIds, live) => {
  const agenda = await webflow.deleteItems({
    collectionId: process.env.WEBFLOW_AGENDA_COLLECTION_ID,
    itemIds: itemdIds,
    live: live,
  });
  if (!agenda) {
    throw 'Could not delete agenda(s)';
  }
  return agenda;
};
