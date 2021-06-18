import { Entity, PrimaryColumn, CreateDateColumn, Column, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm'

import { v4 as uuid } from 'uuid'

import { Funcionarios } from './Funcionarios';

@Entity('entregaEPI')
class EntregaEPI {
    @PrimaryColumn()
    id: string;

    @Column()
    funcionario_id: string;

    @Column()
    nome_epi: string;

    @Column()
    data_entrega: string;

    @Column()
    quantidade_entregue: number;

    @JoinColumn({ name: 'funcionario_id' })
    @ManyToOne(() => Funcionarios)
    funcionarios: Funcionarios;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
        this.id = uuid()
        }
    }
}

export { EntregaEPI }