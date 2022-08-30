const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//need to save our answer somewhere so in another object could work
const objectOutput={}
rl.question('What do you think of Node.js? ', (answer) => {
    objectOutput.node=answer
    rl.question('What your name?', (answer) => {
    objectOutput.name=answer
        rl.question('Whats an activity you like doing?', (answer) => {
        objectOutput.activity=answer
          rl.question('What do you listen to while doing that?', (answer) => {
        objectOutput.listen=answer
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
            objectOutput.meal=answer
            rl.question('Whats your favourite thing to eat for that meal?', (answer) => {
                objectOutput.eat=answer
                rl.question('Which sport is your absolute favourite?', (answer) => {
                    objectOutput.sports=answer
                    rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
                        objectOutput.superpower=answer
                        rl.close();
                        console.log(`Thank you for your valuable feedback: Some of the things I enjoy are \n ${objectOutput.node} \n ${objectOutput.name} \n ${objectOutput.activity} \n ${objectOutput.listen} \n ${objectOutput.meal} \n ${objectOutput.eat} \n ${objectOutput.sports} \n ${objectOutput.superpower}`)
                    });});});});
        });
});});});


