import { InventDetails } from './invent-details';

export class InventDose {
      id: number;
      idEmployee: number;
      status: number;
      idTable: number;
      idVisiter: number;
      dateInvent: number;
      inventDetails: InventDetails[] = [];
}
