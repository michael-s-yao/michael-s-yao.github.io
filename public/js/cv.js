const CVEvent = {
  date: 0,
  description: "",
  create: function (date, description) {
    const newEvent = Object.create(this);
    newEvent.date = date;
    newEvent.description = description;
    return newEvent;
  }
};

all_history = [
  CVEvent.create(
    2025,
    "Research Scientist Intern at " +
    "<a href='https://www.gene.com/scientists/our-scientists/braid'>" +
    "Genentech</a> Generative AI"
  ),
  CVEvent.create(
    2025,
    "Human Frontier Collective Intern at " +
    "<a href='https://hfc.scale.com'>Scale AI</a>"
  ),
  CVEvent.create(
    2024,
    "VC Fellow at " +
    "<a href='https://www.25madison.com/health'>25madison Health Studio</a>"
  ),
  CVEvent.create(
    2023,
    "AI Clinical Fellow at " +
    "<a href='https://glass.health'>Glass Health</a>"
  ),
  CVEvent.create(
    2022,
    "Research Scientist Intern at " +
    "<a href='https://www.microsoft.com/en-us/research/'>" +
    "Microsoft Research</a> Health Futures"
  ),
  CVEvent.create(
    2021,
    "Software Engineering Intern at " +
    "<a href='https://hyperfine.io'>Hyperfine Research</a>"
  ),
  CVEvent.create(
    2021, "Graduated salutatorian from Caltech, BS Applied Physics"
  ),
];

all_changelog = [
  CVEvent.create(
    2025,
    "How can we ensure that offline optimization methods propose both " +
    "high-quality <em>and</em> diverse sets of designs? Learn more about " +
    "DynAMO in our new <a href='http://arxiv.org/abs/2501.18768'>paper" +
    "<i class='fa fa-link' aria-hidden='true'></i></a> accepted to ICML 2025!"
  ),
  CVEvent.create(
    2025,
    "Excited to share our work in Nature Communications on <a " +
    "href='https://www.nature.com/articles/s41467-025-58801-7'>multimodal " +
    "concept bottleneck models<i class='fa fa-link' aria-hidden='true'></i></a> " +
    "for interpretable eye cancer diagnostics, led by the incredible " +
    "<a href='https://yifannnwu.github.io'>Yifan Wu</a>!"
  ),
  CVEvent.create(
    2025,
    "New <a href='https://doi.org/10.1148/radiol.243659'>editorial<i " +
    "class='fa fa-link' aria-hidden='true'></i></a> on using LLMs " +
    "for radiology report parsing now out in RSNA Radiology."
  ),
  CVEvent.create(
    2025,
    "Can datathons be effective venues for teaching AI to med students? " +
    "Check out our work on <a href='https://mededu.jmir.org/2025/1/e63602'>" +
    "trainee-led datathons<i class='fa fa-link' aria-hidden='true'></i></a> " +
    "now out in JMIR Medical Education!"
  ),
  CVEvent.create(
    2024,
    "Can generative language models like ChatGPT help clinicians order " +
    "diagnostic imaging studies in the ED? Check out our new <a href=" +
    "'https://arxiv.org/abs/2409.19177v2'>preprint<i class='fa fa-link' " +
    "aria-hidden='true'></i></a> to learn more!"
  ),
  CVEvent.create(
    2024,
    "Can we reliably optimize against surrogate objectives in offline " +
    "optimization problems? Learn more about our method for " +
    "<a href='https://arxiv.org/abs/2402.06532'>Generative Adversarial " +
    "Model-Based Optimization (GAMBO)<i class='fa fa-link' aria-hidden='true'>" +
    "</i></a> accepted to NeurIPS 2024. Check out our work in Vancouver!"
  ),
  CVEvent.create(
    2024,
    "Grateful to have contributed to our NeurIPS Spotlight work on <a " +
    "href='https://yueyang1996.github.io/knobo/'>Knowledge Bottlenecks<i class=" +
    "'fa fa-link' aria-hidden='true'></i></a> for improved interpretability " +
    "and robustness of ML for healthcare, led by the fabulous " +
    "<a href='https://yueyang1996.github.io/'>Yue Yang</a>!"
  ),
  CVEvent.create(
    2024,
    "Check out our new review paper on " +
    "<a href='https://pubs.rsna.org/doi/10.1148/radiol.223170'>AI " +
    "deployment strategies for clinical radiology<i class='fa fa-link' " +
    "aria-hidden='true'></i></a> now out in RSNA Radiology."
  ),
  CVEvent.create(
    2023,
    "Excited to share our new work on " +
    "<a href='https://link.springer.com/chapter/10.1007/978-3-031-46005-0_5'>" +
    "predicting diabetes risk from abdominal CT scans <i class='fa fa-link' " +
    "aria-hidden='true'></i></a> in Proc PRIME MICCAI."
  ),
  CVEvent.create(
    2022,
    "What are the limits of machine learning methods for solving inverse " +
    "problems such as MRI image reconstruction? Check out our work on " +
    "<a href='https://arxiv.org/abs/2208.12835'>AI for accelerated MRI " +
    "<i class='fa fa-link' aria-hidden='true'></i></a> in Proc ML4H."
  )
];

all_teaching = [
  CVEvent.create(
    2025,
    "<b>TA</b>: Distributed Systems (CIS 5050, University of Pennsylvania)"
  ),
  CVEvent.create(
    2024,
    "<b>TA</b>: Principles of Deep Learning (ESE 5460, University of Pennsylvania)"
  ),
  CVEvent.create(
    2024,
    "<b>TA</b>: Imaging Informatics (EAS 5850, University of Pennsylvania)"
  ),
  CVEvent.create(
    2024,
    "<b>Head TA</b>: Health, Healthcare and Technology (CIS 7000, " +
    "University of Pennsylvania)"
  ),
  CVEvent.create(
    2024,
    "<b>TA</b>: Diagnostic Ultrasound for Medical Students " +
    "(University of Pennsylvania SOM)"
  ),
  CVEvent.create(
    2024,
    "<b>TA</b>: Pre-Clinical Medicine (University of Pennsylvania SOM)"
  ),
  CVEvent.create(
    2021, "<b>Head TA</b>: Applied Mathematics (ACM 95a, Caltech)"
  ),
  CVEvent.create(
    2020, "<b>TA</b>: Graduate Classical Physics (Ph 106a, Caltech)"
  ),
  CVEvent.create(
    2020, "<b>TA</b>: Applied Mathematics (ACM 95b, Caltech)"
  ),
  CVEvent.create(
    2020, "<b>TA</b>: Quantum Physics (Ph 12b, Caltech)"
  ),
  CVEvent.create(
    2019, "<b>TA</b>: Operating Systems (CS 24, Caltech)"
  ),
  CVEvent.create(
    2019, "<b>TA</b>: Waves and Oscillations (Ph 12a, Caltech)"
  ),
  CVEvent.create(
    2019, "<b>TA</b>: Electrodynamics and Magnetism (Ph 1c, Caltech)"
  ),
  CVEvent.create(
    2019, "<b>TA</b>: Special Relativity and Electrostatics (Ph 1b, Caltech)"
  )
];

function build_section(content, section) {
  for (var i = 0; i < content.length; i++) {
    var date = document.createElement("span");
    date.innerHTML = content[i].date;
    date.className = "date";
    var description = document.createElement("span");
    description.innerHTML = content[i].description;
    description.className = "description";
    section.appendChild(date);
    section.appendChild(description);
  }
}

build_section(all_history, document.getElementById("timeline"));
build_section(all_changelog, document.getElementById("changelog"));
build_section(all_teaching, document.getElementById("teaching"));
