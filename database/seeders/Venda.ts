import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Venda from "App/Models/Venda";

export default class extends BaseSeeder {
  public async run() {
    await Venda.createMany([
      {
        veiculoId: 1,
        clienteId: 1,
        funcionarioId: 1,
        concessionariaId: 1,
      },
    ]);
  }
}
