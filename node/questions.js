const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "Wht is your prefered programming language"
]

const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
    process.stdout.write(` \n `);
};

ask();