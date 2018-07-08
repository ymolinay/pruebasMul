export class Service {
  id: number;
  name: string;
  description: string;
  type: number;

  constructor()
  constructor(id: number, name: string, description: string, type: number)
  constructor(id?: number, name?: string, description?: string, type?: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
  }
}
