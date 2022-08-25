import { OptionsItem } from "../../../types/types";

type CheckboxesTypes = OptionsItem & { registerName: string };

type lowerDefaultValuesTypes = {
  sleepingPlaces: string;
  district: string;
  metro: string;
  gaz1: boolean;
  gaz2: boolean;
  gaz3: boolean;
  gaz4: boolean;
  gaz5: boolean;
  duh1: boolean;
  duh2: boolean;
  duh3: boolean;
  duh4: boolean;
  duh5: boolean;
  coffe1: boolean;
  coffe2: boolean;
  coffe3: boolean;
  coffe4: boolean;
  coffe5: boolean;
  micro1: boolean;
  micro2: boolean;
  micro3: boolean;
  micro4: boolean;
  micro5: boolean;
  posuda1: boolean;
  posuda2: boolean;
  posuda3: boolean;
  posuda4: boolean;
  posuda5: boolean;
  posudMachine1: boolean;
  posudMachine2: boolean;
  posudMachine3: boolean;
  posudMachine4: boolean;
  posudMachine5: boolean;
};

export type defaultValuesTypes = lowerDefaultValuesTypes & {
  rooms: string;
  priceFrom: string;
  priceTo: string;
};

export const rooms: OptionsItem[] = [
  { id: "1", value: "1", label: "1 комн." },
  { id: "2", value: "2", label: "2 комн." },
  { id: "3", value: "3", label: "3 комн." },
  { id: "4", value: "4", label: "4 комн." },
  { id: "5", value: "5", label: "5 комн." },
  { id: "6", value: "6", label: "6 комн." },
];

export const checkboxes: CheckboxesTypes[] = [
  {
    id: "1",
    value: "ГазоваяПлита",
    label: "Газовая плита",
    registerName: "gaz1",
  },
  { id: "2", value: "Духовка", label: "Духовка", registerName: "duh1" },
  { id: "3", value: "Кофеварка", label: "Кофеварка", registerName: "coffe1" },
  {
    id: "4",
    value: "МикроволноваяПечь",
    label: "Микроволновая печь",
    registerName: "micro1",
  },
  { id: "5", value: "Посуда", label: "Посуда", registerName: "posuda1" },
  {
    id: "6",
    value: "ПосудомоечнаяМашина",
    label: "Посудомоечная машина",
    registerName: "posudMachine1",
  },
  {
    id: "7",
    value: "ГазоваяПлита",
    label: "Газовая плита",
    registerName: "gaz2",
  },
  { id: "8", value: "Духовка", label: "Духовка", registerName: "duh2" },
  { id: "9", value: "Кофеварка", label: "Кофеварка", registerName: "coffe2" },
  {
    id: "10",
    value: "МикроволноваяПечь",
    label: "Микроволновая печь",
    registerName: "micro2",
  },
  { id: "11", value: "Посуда", label: "Посуда", registerName: "posuda2" },
  {
    id: "12",
    value: "ПосудомоечнаяМашина",
    label: "Посудомоечная машина",
    registerName: "posudMachine2",
  },
  {
    id: "13",
    value: "ГазоваяПлита",
    label: "Газовая плита",
    registerName: "gaz3",
  },
  { id: "14", value: "Духовка", label: "Духовка", registerName: "duh3" },
  { id: "15", value: "Кофеварка", label: "Кофеварка", registerName: "coffe3" },
  {
    id: "16",
    value: "МикроволноваяПечь",
    label: "Микроволновая печь",
    registerName: "micro3",
  },
  { id: "17", value: "Посуда", label: "Посуда", registerName: "posuda3" },
  {
    id: "18",
    value: "ПосудомоечнаяМашина",
    label: "Посудомоечная машина",
    registerName: "posudMachine3",
  },
  {
    id: "19",
    value: "ГазоваяПлита",
    label: "Газовая плита",
    registerName: "gaz4",
  },
  { id: "20", value: "Духовка", label: "Духовка", registerName: "duh4" },
  { id: "21", value: "Кофеварка", label: "Кофеварка", registerName: "coffe4" },
  {
    id: "22",
    value: "МикроволноваяПечь",
    label: "Микроволновая печь",
    registerName: "micro4",
  },
  { id: "23", value: "Посуда", label: "Посуда", registerName: "posuda4" },
  {
    id: "24",
    value: "ПосудомоечнаяМашина",
    label: "Посудомоечная машина",
    registerName: "posudMachine4",
  },
  {
    id: "25",
    value: "ГазоваяПлита",
    label: "Газовая плита",
    registerName: "gaz5",
  },
  { id: "26", value: "Духовка", label: "Духовка", registerName: "duh5" },
  { id: "27", value: "Кофеварка", label: "Кофеварка", registerName: "coffe5" },
  {
    id: "28",
    value: "МикроволноваяПечь",
    label: "Микроволновая печь",
    registerName: "micro5",
  },
  { id: "29", value: "Посуда", label: "Посуда", registerName: "posuda5" },
  {
    id: "30",
    value: "ПосудомоечнаяМашина",
    label: "Посудомоечная машина",
    registerName: "posudMachine5",
  },
];

export const lowerDefaultValues: lowerDefaultValuesTypes = {
  sleepingPlaces: "",
  district: "",
  metro: "",
  gaz1: false,
  gaz2: false,
  gaz3: false,
  gaz4: false,
  gaz5: false,
  duh1: false,
  duh2: false,
  duh3: false,
  duh4: false,
  duh5: false,
  coffe1: false,
  coffe2: false,
  coffe3: false,
  coffe4: false,
  coffe5: false,
  micro1: false,
  micro2: false,
  micro3: false,
  micro4: false,
  micro5: false,
  posuda1: false,
  posuda2: false,
  posuda3: false,
  posuda4: false,
  posuda5: false,
  posudMachine1: false,
  posudMachine2: false,
  posudMachine3: false,
  posudMachine4: false,
  posudMachine5: false,
};

export const defaultValues: defaultValuesTypes = {
  rooms: "",
  priceFrom: "",
  priceTo: "",
  ...lowerDefaultValues,
};
