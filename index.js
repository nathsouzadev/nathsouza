setInterval(() => {
    const date = new Date()
    document.getElementById('time').innerHTML = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}, 1000)
