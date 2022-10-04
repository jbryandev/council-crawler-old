export type Agency = {
  id: string;
  name: string;
  slug: string;
};

export type Agenda = {
  id: string;
  date: string;
  url: string;
  agency: { slug: string };
};
