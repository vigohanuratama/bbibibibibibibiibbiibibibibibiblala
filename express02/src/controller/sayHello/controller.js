const controllerSayHello = {}
const service = require('./service')


controllerSayHello.sayHello = async(req, res) => {
    const time = req.query.time || ''

    try {
        const saySomething = await service.showSomething(time)
        res.status(200).json({
            status: '01',
            status_message: 'Success',
            data: saySomething
        })
    } catch (error) {
        res.status(500).json({error: "ERROR"})
    }
}

controllerSayHello.testingQuery = async(req, res) => {
    try {
        const testingQuery =  await service.testingQuery()
        res.status(200).json({
            status: '01',
            status_message: 'Success',
            data: testingQuery
        })
    } catch (error) {
        res.status(500).json({error: "ERROR"})
    }
}

module.exports = controllerSayHello