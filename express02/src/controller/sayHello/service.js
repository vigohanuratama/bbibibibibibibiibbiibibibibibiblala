const db = require('../../config/db/db')
const service = {}

service.showSomething = async(text) => {
    return "SHOW GREATING: " + text
}

service.testingQuery = async() =>{
    const query = await db.query(`select * from pabean.td_header where nomor_pengajuan ilike $nomor_aju limit 5`,{
        bind: {
            nomor_aju : `%30101%`
        },
        type: db.QueryTypes.SELECT,
    })
    return query
}

module.exports = service