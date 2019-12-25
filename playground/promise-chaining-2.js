require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5dfe87899441625714db0b7e').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5dfc1e8fdf4291521cff34de').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})