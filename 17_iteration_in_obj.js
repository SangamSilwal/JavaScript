const language = {
    javaScript :'JS',
    "c++":"cpp",
    "python":"py"
}

for (const key in language) {
    console.log(`${key} for ${language[key]}`)
}

const programming = ["js","rb","py","java","cpp"]
for(const key in programming)
{
    console.log(key)   //---> This will print the key or index of the list programming
    console.log(programming[key])
}



