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
    "Received my <a href='https://www.proquest.com/docview/3298652850'>PhD " +
    "in Bioengineering</a> and MS in Computer Science from the University " +
    "of Pennsylvania"
  ),
  CVEvent.create(
    2025,
    "ML Scientist Intern at " +
    "<a href='https://www.gene.com/scientists/our-scientists/braid'>" +
    "Genentech</a> Generative AI"
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
    2026,
    "Can language models help us personalize treatment strategies for " +
    "patients? Learn more about how we can use LLMs for precision medicine " +
    "in our new <a href='https://openreview.net/forum?id=w025bYRVkO'>paper<i" +
    " class='fa fa-link' aria-hidden='true'></i></a> accepted to ICLR 2026!"
  ),
  CVEvent.create(
    2025,
    "Can generative language models like ChatGPT help clinicians order " +
    "diagnostic imaging studies in the ED? Check out our new <a href=" +
    "'https://www.nature.com/articles/s43856-025-01061-9'>paper<i " +
    "class='fa fa-link' aria-hidden='true'></i></a> in Communications " +
    "Medicine to learn more! <a href='https://www.linkedin.com/posts/" +
    "pennengai_using-ai-to-support-smarter-imaging-decisions-activity-" +
    "7425539042240360448-9wdP'>Penn press release<i class='fa fa-link' " +
    "aria-hidden='true'></i></a> &emsp;<a href='https://www.auntminnie" +
    ".com/imaging-informatics/artificial-intelligence/article/15752498/gene" +
    "rative-ai-improves-clinical-decisionmaking-in-the-ed'>Aunt Minnie " +
    "article<i class='fa fa-link' aria-hidden='true'></i></a>"
  ),
  CVEvent.create(
    2025,
    "How can we ensure that offline optimization methods propose both " +
    "high-quality <em>and</em> diverse sets of designs? Learn more about " +
    "our method DynAMO in our new <a href='http://arxiv.org/abs/2501.18768'>paper" +
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
    "Can datathons be effective venues for teaching AI to med students? " +
    "Check out our work on <a href='https://mededu.jmir.org/2025/1/e63602'>" +
    "trainee-led datathons<i class='fa fa-link' aria-hidden='true'></i></a> " +
    "now out in JMIR Medical Education!"
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
    "<a href='https://yueyang1996.github.io/'>Yue Yang</a>! <a href='https://" +
    "blog.seas.upenn.edu/training-medical-ai-with-knowledge-not-shortcuts/'>" +
    "Penn press release<i class='fa fa-link' aria-hidden='true'></i></a>"
  )
];

all_teaching = [
  CVEvent.create(
    2025,
    "<b>Course Author</b>: <a href='https://www.med.upenn.edu/eamc' target='_blank'>Ethical Algorithms for the Modern Clinician</a>"
  ),
  CVEvent.create(
    2025,
    "<b>TA</b>: Distributed Systems"
  ),
  CVEvent.create(
    2024,
    "<b>TA</b>: Principles of Deep Learning"
  ),
  CVEvent.create(
    2024,
    "<b>TA</b>: Imaging Informatics"
  ),
  CVEvent.create(
    2024,
    "<b>Head TA</b>: Health, Healthcare and Technology"
  ),
  CVEvent.create(
    2024,
    "<b>TA</b>: Diagnostic Ultrasound for Medical Students"
  ),
  CVEvent.create(
    2024,
    "<b>TA</b>: Clinical Reasoning for Medical Students"
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
