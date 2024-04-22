export class CreateCharacters1713807452115 {

    async up(queryRunner) {
        await queryRunner.query(`
        create table characters (
            id integer generated always as identity primary key,
            name varchar(100) not null,
            gender varchar not null,
            species varchar(100) not null,
            type varchar,
            status varchar(50)
        )
        `)
    }

    async down(queryRunner) {
        await queryRunner.query(`
        drop table characters;
        `)
    }

}
