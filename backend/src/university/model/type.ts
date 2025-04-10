export type Attributes = {
  id: number;
  companyTitle: string;
  title: string;
  link: string;
  companyLogo: string;
  certificate: string;
  description: string;
  startAt: string;
  endAt: string;
};
export type UniversityType = Pick<
  Attributes,
  | 'companyTitle'
  | 'title'
  | 'certificate'
  | 'companyLogo'
  | 'description'
  | 'endAt'
  | 'link'
  | 'startAt'
>;
export type UniversitiesType = Pick<
  Attributes,
  | 'companyTitle'
  | 'title'
  | 'certificate'
  | 'companyLogo'
  | 'description'
  | 'endAt'
  | 'link'
  | 'startAt'
  | 'id'
>;
