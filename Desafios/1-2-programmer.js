const programmer = {
    name: 'Elisama',
    age: 25,
    technologies: [
        { name: 'C++', expertise: 'Desktop' },
        { name: 'Python', expertise: 'Data Sciencie' },
        { name: 'JavaScript', expertise: 'Web/Mobile' }
    ]
};

console.log(`The user ${programmer.name} is ${programmer.age} years old and uses the technology ${programmer.technologies[0].name} with expertise in ${programmer.technologies[0].expertise}`)
