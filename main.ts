const proSummary: any = document.getElementById("paragraph");

const showPara = () => {
  proSummary.innerHTML = ` 
          <p>      
            As an Assitant Team leader at KIA Motors I led a team of designers, welders, fabricators, Machinists and technicians in designing,
            developing, inspecting and repairing tools, dies, jigs, fixtures and other projects in compliance with KAIZEN activities.
            I received work orders from different departments for new manufacturing and repair projects, and delegated tasks
            to members accordingly. I maintained a preventive maintenance schedule for the repair of tools, jigs and fixtures
            and ensured that team members adhered to the schedule in addition, I kept a daily record of all working progress
            of projects and team members including recruitment and appraisal evaluation.
         </p>`;
};

const hidePara = () => {
  proSummary.innerHTML = ``;
};

const education: any = document.getElementById("educ");

const showEdu = () => {
  education.innerHTML = ` 
                            
          <div id="educ">
                           <H4><Strong>Governer Sindh IT Initiative for Cloud Computing</Strong></H4>
                            <p>Pursuing Cloud computing and Generative Engineering</p>

                            <H4><Strong>Dadabhoy Institute of Higher Education</Strong></H4>
                            <p>Bachelors In Commerce</p>

                            <H4><Strong>City & Guilds of London Institute</Strong></H4>
                            <p>IVQ Level 2 (Mechanical)</p>
                            
                            <H4><Strong>GSEZIT</Strong></H4>
                            <p>Diploma Associate Engineering (Mechanical)
                            </div>
                            `;
};
const hideEdu = () => {
  education.innerHTML = ``;
};

const experience: any = document.getElementById("Exp");
const showExp = () => {
  experience.innerHTML = `<div id="Exp">
                            <H4><Strong>Lucky Motor Corporation KIA|Peugeot|Samsung</Strong></H4>
                            <p>Team Leader (Production Engineering & projects)</p>

                            <H4><Strong>Yamaha Motors Pakistan</Strong></H4>
                            <p>Assistant Team Leader (Assembly)</p>

                            <H4><Strong>Ovais Engineering Works</Strong></H4>
                            <p>Machinist and Fabricator</p>
                        
                        </div>`;
};

const hideExp = () => {
  experience.innerHTML = ``;
};

const Skills: any = document.getElementById("Skill");
const showSkill = () => {
  Skills.innerHTML = `
                     <div class="skill" id="Skill">
  
                        <ul>                        
                            <li>Html</li>
                            <li>Css</li>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>Ms Office</li>
                            <li>AutoCAD</li>
                            <li>SAP MM</li>
                            <li>Creo Parametric</li>
                        </ul>
                        </div>`;
};

const hideSkill = () => {
  Skills.innerHTML = ``;
};
