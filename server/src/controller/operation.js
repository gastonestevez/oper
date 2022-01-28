const operation = require('../entities/operation')

const getAllOperations = async () => {
    const result = await operation.findAll()
    return result
}

const insertOperation = async (payload) => {
    const result = await operation.create(payload)
    return result
}

const getOperationById = async (id) => {
    const result = await operation.findOne({
        where: {
            id
        }
    })
    return result
}

const modifyOperationById = async (id, payload) => {
    const result = await operation.update({
        ...payload,
        type: undefined
    }, {
        where: {
            id
        }
    })
    return result
}

const deleteOperationById = async (id) => {
    const result = await operation.destroy({
        where: {
            id
        }
    })
    return result
}

module.exports = {
    getAllOperations,
    insertOperation,
    getOperationById,
    modifyOperationById,
    deleteOperationById
}