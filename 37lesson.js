const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'},
        showAgeAndLangs: function(plan) {
            const {age} = plan;
            const {languages} = plan.skills;
            let str = `Мне ${age} и я владею языками: `
            languages.forEach(function(lang) {
                str += `${lang.toUpperCase()} `;
            });
        
            return str;
        }
    
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
function showExperience(plan) {

    const {exp} = plan.skills;
    return exp;

}
console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills;
    let str = '';
    for (let key in programmingLangs) {     
            str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }  
    return str; 
    }
    console.log(showProgrammingLangs(personalPlanPeter));






