function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function resThis() {
    console.log("start");
    await sleep(2000);
    console.log("You waited 2 seconds");
    await sleep(1000);
    console.log("You waited 1 more second");
}

resThis()
console.log("fin!");

//2

async function testErr() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        throw new Error("TEST ERROR 0x0000000");
        const posts = await response.json();
        console.log(posts);
        // await resolve(resp => console.log(resp))
    } catch (error) { console.log(error.message) }


    // .then(res => res.json())
    // .then(post => console.log(post))
    // .catch(err => console.log(err))

}

testErr()

//3
const info = {
    id: "4",
    name: "Jake Smith",
    age: 15,
    email: "jake.smith@example.com",
    phone: "553-9112"
}

const options = {
    method: "POST",
    body: JSON.stringify(info),
    headers: { "Content-Type": "application/json; charset=UTF-8" }
}

const infoToUpdate = {
    id: "3",
    name: "Alan Smith",
    age: 16,
    email: "alan.smith@example.com",
    phone: "551-9112"
}

const optionsToUpdate  = {
    method: "PUT",
    body: JSON.stringify(infoToUpdate),
    headers: { "Content-Type": "application/json; charset=UTF-8" }
}

const infoToPartiallyUpdate = {
    name: "Anna Smith",
}

const optionsToPartiallyUpdate  = {
    method: "PATCH",
    body: JSON.stringify(infoToPartiallyUpdate),
    headers: { "Content-Type": "application/json; charset=UTF-8" }
}

async function getAllStudents() {
    try {
        const students = await fetch("http://localhost:3000/students")
        const posts = await students.json();
        console.log(posts);
    } catch (error) { console.log(error.message) }

    try {
        const students = await fetch("http://localhost:3000/students/2")
        const posts = await students.json();
        console.log(posts);
    } catch (error) { console.log(error.message) }

    // try { /*loops the whole thing(((*/
    //     const students = await fetch("http://localhost:3000/students", options)
    //     const posts = await students.json();
    //     console.log(posts);
    // } catch (error) { console.log(error.message) }

    // try { /* again, it loops everything*/
    //     const students = await fetch("http://localhost:3000/students/2", optionsToUpdate)
    //     const posts = await students.json();
    //     console.log(posts);
    // } catch (error) { console.log(error.message) }

    //   try { 
    //     const students = await fetch("http://localhost:3000/students/1", optionsToPartiallyUpdate)
    //     const posts = await students.json();
    //     console.log(posts);
    // } catch (error) { console.log(error.message) }
    
}

getAllStudents()