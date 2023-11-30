// Problem 1
let HR = {
    "employees": [
        {
            "name": 'Sam',
            "department": 'Tech',
            "designation": 'Manager',
            "salary": 40000,
            "raiseEligible": true,
        },
        {
            "name": 'Mary',
            "department": 'Finance',
            "designation": 'Trainee',
            "salary": 18500,
            "raiseEligible": true,
        },
        {
            "name": 'Bill',
            "department": 'HR',
            "designation": 'Executive',
            "salary": 21200,
            "raiseEligible": false,
        }
    ]
}

let company = {
    "companyInfo":[
    {
    "companyName": 'Tech Stars',
    "website": 'www.techstars.site',
    "employees": HR["employees"],
 } ]
}

// Question 1
console.log(HR["employees"]);
// Question 2
console.log(company);
// Question 3
HR["employees"].push({
    "name": 'Anna',
    "department": 'Tech',
    "designation": 'Executive',
    "salary": 25600,
    "raiseEligible": false,
});
console.log(company["companyInfo"][0]["employees"][HR["employees"].length -1]);

// Question 4 
let totalSalary = 0;
for (let i =0; i < HR["employees"].length; i++){
    totalSalary += HR["employees"][i]["salary"];
}

console.log(totalSalary)

// Question 5 

function livingWage(){
    for (let i =0; i < HR["employees"].length; i++){
        if (HR['employees'][i]["raiseEligible"] == true){
                HR["employees"][i]["salary"] = HR["employees"][i]["salary"] * 1.1;
                HR["employees"][i]["raiseEligible"] = false;
        }
    }
    console.log(HR["employees"]);
}
livingWage();

// Question 6 
const wfh = ["Anna","Sean"];

for (let i =0; i < HR["employees"].length; i++){
    if (wfh.includes(HR["employees"][i]["name"])) {
        HR['employees'][i]["wfh"] = true;
    } else { 
        HR['employees'][i]["wfh"] = false;
    }
}

console.log(HR["employees"])