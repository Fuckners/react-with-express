import Knex from "knex";

export default Knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '@Banco_Dados',
        database: 'scrim_shop'
    }
})