function generateAudit() {

let business = document.getElementById("businessName").value;

let problems = document.querySelectorAll(".problem");

let issues = 0;


problems.forEach(problem => {

    if(problem.checked){
        issues++;
    }

});


let score = 100 - (issues * 15);


if(score < 0){
    score = 0;
}


document.getElementById("result").innerHTML = `

<h2>${business} Website Audit</h2>

<p>
Website Score:
<strong>${score}/100</strong>
</p>

<p>
Found ${issues} issues that could be hurting customer conversions.
</p>

<p>
Forge Digital Recommendation:
Improve design, trust signals, and calls-to-action to help turn visitors into customers.
</p>

`;

}
