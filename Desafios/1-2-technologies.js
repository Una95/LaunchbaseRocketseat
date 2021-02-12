const users = [
    { name: "Raul", technologies: ["JavaScript", "Node.js"] },
    { name: "Jasmine", technologies: ["JavaScript", "CSS"] },
    { name: "Marta", technologies: ["JavaScript", "CSS"] },
    { name: "Carlos", technologies: ["HTML", "Node.js"] }
];


function cssUserCheck(user) {
    for (let tech of user.technologies) {
        if (tech == 'CSS') return true
    }

    return false
}


for (let i of users) {
    console.log(`${i.name} works with ${i.technologies.join(", ")}`)
}


for (let i = 0; i < users.length; i++) {
    const userWorksWithCss = cssUserCheck(users[i])

    if (userWorksWithCss) {
        console.log(`The user ${users[i].name} works with CSS.`)
    }
}
