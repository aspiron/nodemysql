const db = require('../common/connection')

let people = {}

people.all =  async function (req, res) {
    try {
        let query  = `select * from people ORDER BY name`
        let people = await db.query(query)
        res.send(people)
    } catch (error) {
        throw new Error(error)
    }
}

people.byId = async function (req, res) {
    try {
        let id = req.params.id
        let query = `select * from people where id =:id`
        let people = await db.query(query,{
            id:id
        })
        res.send(people)
    } catch (error) {
        throw new Error(error)
    }
}

//search name
people.search = async function (req, res) {
    try {
        let name = req.params.name
        let query = `select * from people where name like '%${name}%' limit 1`
        let people = await db.query(query)
        res.send(people)
    } catch(err) {
        throw new Error(err)
    }
}


//create people
people.create = async function (req, res) {
    try {
        let body = req.body
        // console.log(req)
        let query = `insert into people (
            name,
            address,
            phone,
            created_at,
            updated_at
        ) values (
            :name,
            :address,
            :phone,
            now(),
            now()
        )` 
        let result = await db.query(query, {
            name:body.name,
            address:body.address,
            phone:body.phone
        })
        res.send({
            status:'success',
            result:result
        })
    } catch(err) {
        throw new Error(err)
    }
}


//update people
people.update = async function (req, res) {
    try {
        let id = req.params.id
        let people = req.body
        let query = `update people set 
            name=:name,
            address=:address,
            phone=:phone,
            updated_at=now() 
            where id=:id` 
        let result = await db.query(query, {
            name:people.name,
            address:people.address,
            phone:people.phone,
            id:id
        })
        res.send({
            status:'success',
            result:result
        })
    } catch(err) {
        throw new Error(err)
    }
}


//delete people
people.delete = async function (req, res) {
    try {
        let id = req.params.id
        let query = `delete from people where id=:id` 
        let result = await db.query(query, {
           id:id
        })
        res.send({
            status:'success',
            result:result
        })
    } catch(err) {
        throw new Error(err)
    }
}


module.exports = people