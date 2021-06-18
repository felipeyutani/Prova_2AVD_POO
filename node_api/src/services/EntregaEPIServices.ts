import { getCustomRepository } from 'typeorm'
import { EntregaEPIRepository } from '../repositories/EntregaEPIRepository'

interface CriarEntregas {
    funcionario_id: string;
    nome_epi: string;
    data_entrega: string;
    quantidade_entregue: number;
}

interface ListarEntregas {
    id: string
}

interface AtualizarEntregas {
    id: string;
    funcionario_id: string;
    nome_epi: string;
    data_entrega: string;
    quantidade_entregue: number;
}

class EntregaEPIServices {
    async create({ funcionario_id, nome_epi, data_entrega, quantidade_entregue}: CriarEntregas) {
        const entregaEPIRepository = getCustomRepository(EntregaEPIRepository)

        const entregaEPI = entregaEPIRepository.create({
            funcionario_id,
            nome_epi,
            data_entrega,
            quantidade_entregue
        })

        await entregaEPIRepository.save(entregaEPI)
        return entregaEPI
    }

    async index() {
        const entregaEPIRepository = getCustomRepository(EntregaEPIRepository)

        const entregaEPI = await entregaEPIRepository.find({
        relations: ['funcionarios']
        })

        return entregaEPI
    }

    async show({ id }: ListarEntregas) {
        const entregaEPIRepository = getCustomRepository(EntregaEPIRepository)

        const entregaEPI = await entregaEPIRepository.findOne(id, {
        relations: ['funcionarios']
        })

        if (!entregaEPI) {
            throw new Error('ID de entrega não encontrado!')
        }

        return entregaEPI
    }

    async delete({ id }: ListarEntregas) {
        const entregaEPIRepository = getCustomRepository(EntregaEPIRepository)

        const entregaEPI = await entregaEPIRepository.findOne({ id })

        if (!entregaEPI) {
            throw new Error('ID de entrega não encontrado!')
        }

        return await entregaEPIRepository.delete({ id })
    }

    async update({ id, 
    funcionario_id, nome_epi, data_entrega, quantidade_entregue }: AtualizarEntregas) {
        
        const entregaEPIRepository = getCustomRepository(EntregaEPIRepository)

        let entregaEPI = await entregaEPIRepository.findOne({ id })

        if (!entregaEPI) {
            throw new Error('ID de entrega não encontrado!')
        }

        await entregaEPIRepository.update(
        id, {
            funcionario_id,
            nome_epi,
            data_entrega,
            quantidade_entregue
        })

        entregaEPI = await entregaEPIRepository.findOne({ id })
        return entregaEPI
    }
}

export { EntregaEPIServices }