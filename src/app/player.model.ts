export class Player {
  id: number;
  name: string;
  symbol?: 'X' | 'O';
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
