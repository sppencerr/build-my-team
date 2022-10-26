const { htmlGenerator } = require('./src/temp');
const { writeFile } = require('./src/temp');
const { getAnswers } = require('./src/temp');


const init = async () => {
    
   
    const answers = await getAnswers("Mngr");
    
    
    const htmlString = await htmlGenerator(answers);
    
   
    const fileWritten = await writeFile(htmlString, "builtTeam.html");
    
    // ture or false confirmation to end
    return fileWritten;
}

init();
