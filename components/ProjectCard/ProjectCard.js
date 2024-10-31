import "./ProjectCard.css";

export const ProjectCard = (project) => `
<div class="main-container">
<div class="project-card">
<div class="frontside">
<img src=${project.image} alt=${project.title}/>
</div>
<div class="backside">
<div class="header">
<h2>${project.title}</h2>
<div>
<a href=${project.github}>
<img src="/icons/github.png" alt="GitHub Icon" />
</a>
<a href=${project.link}>
<img src="/icons/link.png" alt="Link icon" />
</a>
</div>
</div>

<div class="detail">
<p>${project.description}</p>
<p class="tech">${project.tech.map((tech) => tech.name).join(" - ")}</p>
</div>

<section class="logos">
${project.tech.map((tech) =>`<img src="${tech.logo}" alt="${tech.name} logo" class="tech-logo" />`).join("")}
</section>
</div>
</div>
<button class="hover-button">More info</button> 
</div>
`;
