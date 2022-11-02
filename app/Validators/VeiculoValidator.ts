import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VeiculoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    concessionariaId: schema.number([rules.exists({ table: 'concessionarias', column: 'id' })]),

    tipoId: schema.number([rules.exists({ table: 'tipos', column: 'id' })]),

    marcaId: schema.number([rules.exists({ table: 'marcas', column: 'id' })]),

    vendaId: schema.number([rules.exists({ table: 'vendas', column: 'id' })]),

    modelo: schema.string([rules.maxLength(50)]),

    ano: schema.number([rules.maxLength(4)]),

    cor: schema.string([rules.maxLength(100)]),

    combustivel: schema.string([rules.alpha(), rules.maxLength(100)]),

    qtdPassageiros: schema.number.optional(),

    cambio: schema.string([rules.maxLength(50)]),

    cilindrada: schema.number.optional(),

    potencia: schema.number([rules.maxLength(100)]),

    // preco: schema.([
    // rules.maxLength(4),
    // ])
  })

  public messages: CustomMessages = {}
}
