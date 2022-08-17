export type UserTypes = {
  login: string;
  password: string;
  email: string;
  phoneNumber?: string;
  name?: string;
  photoPath?: string;
  id?: string;
};

export type RegistryUserTypes = UserTypes & {
  passwordRepeat: string;
  captcha: string;
};

export type NewsTypes = {
  title: string;
  body: string;
  article: string[];
  date: string;
  photoUrl: string;
  photoUrlBig: string;
  key: string;
  id: string;
};

export type NewsQueryTypes = {
  items: NewsTypes[];
  count: number;
};

export type ApartmentTypes = {
  id: string;
  title: string;
  price: {
    price: string;
    interval: string;
    currency: string;
  };
  info: {
    address: string;
    tenants: string;
    rooms: string;
    metro: string;
    district: string;
    area: string;
  };
  description: string;
  ownerId: string;
  status: string;
  img: string;
};

export type ApartmentQueryTypes = {
  items: ApartmentTypes[];
  count: number;
};

export type ContactsTypes = {
  address: string;
  phone: string;
  email: string;
  workTime: string;
};

export type PostTypes = {
  email: string;
  name: string;
  message: string;
};

export type OptionsItem = {
  id: string;
  value: string;
  label: string;
};
