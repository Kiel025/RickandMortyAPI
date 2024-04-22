import { EntitySchema } from 'typeorm'

export const Character = new EntitySchema({
    name: "Characters",
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        name: {
            type: 'varchar',
            length: 100,
        },
        gender: {
            type: 'varchar'
        },
        status: {
            type: 'varchar',
            length: 50
        },
        species: {
            type: 'varchar',
            length: 100
        },
        type: {
            type: 'varchar',
        }
    }
})