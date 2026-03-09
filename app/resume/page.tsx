"use client";

import Link from "next/link";
import React from "react";
import PrintButton from "./PrintButton";

const SKILLS = {
  // Web
  JS: "JavaScript",
  TS: "TypeScript",
  REACT: "React",
  NODE: "NodeJS",
  EXPRESS: "Express",
  RUBY: "Ruby",
  RAILS: "Rails",
  PHP: "PHP",
  PYTHON: "Python",
  MONGODB: "MongoDB",
  SQL: "SQL",
  DOCKER: "Docker",

  // Mobile
  KOTLIN: "Kotlin",
  JAVA: "Java",
  ANDROID: "Android",
  RN: "React-Native",

  // Systems/Low-Level
  C: "C",
  RUST: "Rust",
  DEBUG: "Debugging",
  LLDB: "LLDB",
  GDB: "GDB",
  QEMU: "QEMU",
  NET: "Networking",
  RE: "Reverse Engineering",
  ASM: "ASM",
  LINUX: "Linux",
  GHIDRA: "Ghidra",
  IOT: "IOT Devices",
  GPON: "GPON ONTs",
  UBUNTU: "Ubuntu",
  DEBIAN: "Debian",
  ALPINE: "Alpine",
  SHELL: "Shell scripting",
  FISH: "Fish",
  BASH: "Bash",
  INFRA: "Network infrastructure",

  // Workflow
  AGILE: "SCRUM/Agile development",
  GIT: "Git",
  GHA: "GitHub Actions",
  BBP: "Bitbucket Pipelines",
  JIRA: "Jira",
  VIM: "Vim (btw)",

  // Other
  DS: "Data structures",
  OPT: "optimization",
  TASTE: "good-taste",
  OOP: "Object-Oriented Programming (OOP)",

  // Specialized
  AUDIO: "Audio Processing",
  ML: "Machine Learning",
  ANNOTATION: "Data Annotation",
  PRINT_3D: "3D Printing",
  ARDUINO: "Arduino",
} as const;

type SkillName = (typeof SKILLS)[keyof typeof SKILLS];

interface Award {
  title: string;
  location: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  startDate: Date;
  endDate: Date | null;
}

interface Skill {
  category: string;
  skills: (SkillName | string)[];
}

interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  about: string;
  website?: string;
  responsibilities: string[];
  technologies?: SkillName[];
}

const skillsData: Skill[] = [
  {
    category: "Web Development",
    skills: [
      `${SKILLS.JS} (Vanilla, ${SKILLS.REACT}, ${SKILLS.EXPRESS}, ${SKILLS.NODE})`,
      `${SKILLS.TS} (Vanilla, ${SKILLS.REACT}, ${SKILLS.EXPRESS}, ${SKILLS.NODE})`,
      `${SKILLS.RUBY} (${SKILLS.RAILS})`,
      SKILLS.PHP,
      SKILLS.PYTHON,
      SKILLS.MONGODB,
      SKILLS.SQL,
      `${SKILLS.DOCKER}`,
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      `${SKILLS.KOTLIN} (${SKILLS.ANDROID}, Pure)`,
      `${SKILLS.JAVA} (${SKILLS.ANDROID}, Pure)`,
      `${SKILLS.RN} (${SKILLS.JS}, ${SKILLS.TS})`,
    ],
  },
  {
    category: "Systems/Low-Level",
    skills: [
      SKILLS.C,
      SKILLS.RUST,
      `${SKILLS.DEBUG} (${SKILLS.LLDB}, ${SKILLS.GDB}, ${SKILLS.GDB} + ${SKILLS.QEMU})`,
      SKILLS.NET,
      `${SKILLS.RE} (${SKILLS.ASM}, ${SKILLS.LINUX}, ${SKILLS.GHIDRA})`,
      `${SKILLS.IOT} (Mainly ${SKILLS.GPON})`,
      `${SKILLS.LINUX} (${SKILLS.UBUNTU}, ${SKILLS.DEBIAN}, ${SKILLS.ALPINE})`,
      `${SKILLS.SHELL} (${SKILLS.FISH}, ${SKILLS.BASH})`,
      SKILLS.INFRA,
    ],
  },
  {
    category: "Workflow",
    skills: [
      SKILLS.AGILE,
      SKILLS.GIT,
      `${SKILLS.GHA}, ${SKILLS.BBP}`,
      SKILLS.JIRA,
      SKILLS.VIM,
    ],
  },
  {
    category: "Other",
    skills: [
      `${SKILLS.DS}, ${SKILLS.OPT}, ${SKILLS.TASTE}`,
      SKILLS.OOP,
      SKILLS.AUDIO,
      SKILLS.ML,
      SKILLS.ANNOTATION,
      SKILLS.PRINT_3D,
      SKILLS.ARDUINO,
    ],
  },
];

const ifrs =
  "Federal Institute of Education, Science and Technology of Rio Grande do Sul (IFRS)";
const ufrgs = "Federal University of Rio Grande do Sul (UFRGS)";
const experienceData: Experience[] = [
  // {
  //   title: "Senior Software Engineer",
  //   company: "Bond/Olibra",
  //   location: "Cresskill, NJ, USA (Hybrid)",
  //   startDate: new Date(2026, 3),
  //   endDate: null,
  //   about: "IOT and home automation startup focused on quality, ease-of-use and ease of integration",
  //   website: "https://bondhome.io/",
  //   responsibilities: [
  //     "Embedded firmware development. Bare-metal for ARMv7 and RiscV",
  //     "Reverse-engineering of significant amounts of IOT hardware, binary blobs and executables for improved integration with our products. (C,ASM,Linux,Ghidra)",
  //   ],
  //   technologies: [SKILLS.C, SKILLS.RE, SKILLS.LINUX, SKILLS.NET],
  // },
  {
    title: "Training and Annotation Pipeline Specialist (Part-Time)",
    company: "Boson AI",
    location: "Santa Clara, CA, USA (Remote)",
    startDate: new Date(2026, 2),
    endDate: null,
    about: "ASR and TTS audio model provider.",
    website: "https://boson.ai/",
    responsibilities: [
      "Supervised training and fitting of audio models for Brazilian Portuguese, including data pipeline management, model evaluation and hyperparameter tuning.",
      "Quality assurance and annotation of training data, including audio and transcriptions, with a focus on Brazilian Portuguese phonetics.",
    ],
    technologies: [SKILLS.PYTHON, SKILLS.AUDIO, SKILLS.ML, SKILLS.ANNOTATION],
  },
  {
    title: "Senior Software Engineer",
    company: "INT6 Tech",
    location: "Porto Alegre, Rio Grande do Sul, Brazil",
    startDate: new Date(2021, 3),
    endDate: new Date(2026, 3),
    about: "South American telecom automations startup",
    website: "https://int6tech.com.br/",
    responsibilities: [
      "Led and mentored a cross-functional team of 3 developers on the rewrite of a complex, multi-platform mobile application from scratch, which successfully delivered OTA-Updatable GUIs/assets and sophisticated features like secure, sandboxed function evaluation and offline CPE provisioning pipelines (via proprietary WebDrivers and SSH Drivers), supporting flexible and advanced business requirements for a telecom automation platform.",
      "Provided hands-on mentorship and technical guidance to 7 junior and mid-level developers, fostering skill growth and ensuring high standards in automated provisioning pipeline implementation for multi-vendor devices.",
      "Reverse-engineered significant amounts of networking hardware, images and binaries for improved integration with management services. (C,ASM,Linux,Ghidra)",
      "Enhanced and maintained analytics service for TR-098/369 bulk data processing, failure clustering and event classification.",
      "Acted as a key contributor in architectural redesigns, collaborating with senior engineers to establish robust code standards and scalable processes across the organization.",
      "Implemented a custom JavaScript compiler/processor microservice for WebDriver bundling and synchronization.",
      "Maintained a full-stack web app for L2/L3 administration of GPON infrastructure, network analysis, and provisioning pipeline determination.",
    ],
    technologies: [
      SKILLS.JS,
      SKILLS.NODE,
      SKILLS.REACT,
      SKILLS.RN,
      SKILLS.KOTLIN,
      SKILLS.RUBY,
      SKILLS.PYTHON,
      SKILLS.C,
      SKILLS.RE,
      SKILLS.LINUX,
      SKILLS.DOCKER,
      SKILLS.NET,
      SKILLS.JIRA,
    ],
  },
  {
    title: "CNPq Scientific Initiation Scholarship, Promovid@ Project",
    company: ifrs,
    location: "Osório",
    startDate: new Date(2020, 8),
    endDate: new Date(2021, 8),
    about: "High-School scientific initiation",
    website: "https://ifrs.edu.br/osorio/",
    responsibilities: [
      "Developed a full-stack COVID-19 patient, test, and vaccine management solution for regional health departments and hospitals, aggregating data and producing periodic reports for statistical analysis by municipal governments of Rio Grande do Sul.",
      "Integrated web backend with a mobile app developed in React Native.",
    ],
    technologies: [SKILLS.JS, SKILLS.REACT, SKILLS.NODE, SKILLS.MONGODB],
  },
  {
    title:
      "Volunteer Scientific Initiation Program, Novas Tecnologias Project, ClavIF Group",
    company: ifrs,
    location: "Osório",
    startDate: new Date(2019, 3),
    endDate: new Date(2019, 11),
    about: "High-School scientific initiation",
    website: "https://ifrs.edu.br/osorio/",
    responsibilities: [
      "Developed a 3D-Printed digital key locker integrated with a local database and computer, with user identification via RFID tags.",
      "Competed at the Brazilian Science and Technology Fair and secured 3rd place in Electrical Engineering.",
    ],
    technologies: [SKILLS.PRINT_3D, SKILLS.ARDUINO, SKILLS.JAVA],
  },
];

const educationData: Education[] = [
  {
    degree: "B.S. in Computer Science",
    institution: ufrgs,
    startDate: new Date(2022, 1),
    endDate: null,
  },
  /*
  {
    degree: "B.S. in Computer Science (Semester)",
    institution: "Pontifical Catholic University of Rio Grande do Sul (PUCRS)",
    startDate: new Date(2022, 7),
    endDate: new Date(2023, 1),
  },
  {
    degree: "B.S. in Computer Science (Semester)",
    institution: "University of Vale do Rio dos Sinos (Unisinos)",
    startDate: new Date(2022, 1),
    endDate: new Date(2022, 7),
  },
  */
  {
    degree: "High School with Associate Degree in Information Technology",
    institution: ifrs,
    startDate: new Date(2018, 1),
    endDate: new Date(2021, 11),
  },
];

const awardsData: Award[] = [
  {
    title: "Brazilian Science and Technology Exhibit (Mostratec)",
    location: "Novo Hamburgo, 2019 Edition",
    description: "Third place in Electronic Engineering with project ClavIF.",
  },
  {
    title: "Education, Extension and Research Exposition (MoExP)",
    location: "Osório, 2021 Edition",
    description:
      "Highlight in Exact and Earth Sciences with project Promovid@.",
  },
];

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function calculateDuration(start: Date, end: Date | null): string {
  const endDate = end || new Date();
  const months =
    (endDate.getFullYear() - start.getFullYear()) * 12 +
    (endDate.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const yearText =
    years > 0 ? `${years} ${years === 1 ? "year" : "years"}` : "";
  const monthText =
    remainingMonths > 0
      ? `${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`
      : "";

  return [yearText, monthText].filter(Boolean).join(" ");
}

export default function Resume() {
  const markdownCV = `
# Rodrigo Guimarães Ourique
Full Stack Software Engineer at Int6Tech
Porto Alegre, Rio Grande do Sul, Brazil
Email: rodrigo.guima.ourique@gmail.com
LinkedIn: https://linkedin.com/in/rodrigo-ourique-7aa30721b
GitHub: https://github.com/Rosbifbr/

## Skills
${skillsData.map((cat) => `### ${cat.category}\n${cat.skills.join(", ")}`).join("\n\n")}

## Experience
${experienceData
  .map(
    (exp) => `### ${exp.title}
Company: ${exp.company}
Location: ${exp.location}
Date: ${formatDate(exp.startDate)} — ${exp.endDate ? formatDate(exp.endDate) : "Present"}
About: ${exp.about}
${exp.website ? `Website: ${exp.website}\n` : ""}Responsibilities:
${exp.responsibilities.map((r) => `- ${r}`).join("\n")}
Technologies: ${exp.technologies?.join(", ") || "None"}`,
  )
  .join("\n\n")}

## Education
${educationData
  .map(
    (edu) => `### ${edu.degree}
Institution: ${edu.institution}
Date: ${formatDate(edu.startDate)} — ${edu.endDate ? formatDate(edu.endDate) : "Present"}`,
  )
  .join("\n\n")}

## Awards
${awardsData
  .map(
    (award) => `### ${award.title}
Location: ${award.location}
Description: ${award.description}`,
  )
  .join("\n\n")}

## Languages
- English 🇬🇧: C1
- Portuguese 🇵🇹: Native
- Spanish 🇪🇸: B1
- French 🇫🇷: A2
- Italian 🇮🇹: A2
`;

  return (
    <main className="min-h-screen p-4 md:p-12 max-w-5xl mx-auto space-y-6">
      <div className="hidden" aria-hidden="true" title="Markdown CV for LLMs">
        {markdownCV}
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Rodrigo Guimarães Ourique
          </h1>
          <p className="text-xl text-[var(--secondary)] font-medium">
            Full Stack Software Engineer at Int6Tech
          </p>
          <p className="text-[var(--secondary)]">
            Porto Alegre, Rio Grande do Sul, Brazil
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm font-medium">
            <a
              href="mailto:rodrigo.guima.ourique@gmail.com"
              className="hover:text-[var(--accent)] transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/rodrigo-ourique-7aa30721b"
              className="hover:text-[var(--accent)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Rosbifbr/"
              className="hover:text-[var(--accent)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="flex gap-3">
          <Link href="/" className="apple-button-secondary text-sm">
            Back
          </Link>
          <PrintButton />
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight border-b border-[var(--border)] pb-2">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsData.map((cat, i) => (
            <div key={i} className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--secondary)]">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 text-xs glass rounded-lg font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight border-b border-[var(--border)] pb-2">
              Experience
            </h2>
            <div className="space-y-10">
              {experienceData.map((exp, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-[var(--accent)]">
                          {exp.company}
                        </p>
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-opacity"
                          >
                            [Website]
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-[var(--secondary)] italic mt-1">
                        {exp.about}
                      </p>
                    </div>
                    <p className="text-sm text-[var(--secondary)] text-right">
                      {formatDate(exp.startDate)} —{" "}
                      {exp.endDate ? formatDate(exp.endDate) : "Present"}
                      <br />
                      <span className="italic">
                        {calculateDuration(exp.startDate, exp.endDate)}
                      </span>
                    </p>
                  </div>
                  <ul className="space-y-2 list-disc list-outside ml-4 text-[var(--foreground)] opacity-90">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="pl-1 text-sm md:text-base">
                        {r}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies?.map((t, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 text-xs font-medium bg-black/5 dark:bg-white/5 rounded-md border border-[var(--border)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight border-b border-[var(--border)] pb-2">
              Education
            </h2>
            <div className="space-y-6">
              {educationData.map((edu, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="font-medium text-[var(--secondary)]">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-[var(--secondary)]">
                    {formatDate(edu.startDate)} —{" "}
                    {edu.endDate ? formatDate(edu.endDate) : "Present"}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight border-b border-[var(--border)] pb-2">
              Awards
            </h2>
            <div className="space-y-4">
              {awardsData.map((award, i) => (
                <div key={i} className="space-y-1">
                  <h3 className="font-bold">{award.title}</h3>
                  <p className="text-sm text-[var(--secondary)]">
                    {award.location}
                  </p>
                  <p className="text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight border-b border-[var(--border)] pb-2">
              Languages
            </h2>
            <div className="space-y-3">
              {[
                { l: "English 🇬🇧", lvel: "C1" },
                { l: "Portuguese 🇵🇹", lvel: "Native" },
                { l: "Spanish 🇪🇸", lvel: "B1" },
                { l: "French 🇫🇷", lvel: "A2" },
                { l: "Italian 🇮🇹", lvel: "A2" },
              ].map((lang, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center glass p-3 rounded-xl"
                >
                  <span className="font-bold">{lang.l}</span>
                  <span className="text-xs font-bold px-2 py-1 bg-[var(--accent)] text-white rounded-md">
                    {lang.lvel}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <footer className="pt-12 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 text-sm font-medium">
        <p>© {new Date().getFullYear()} Rodrigo Guimarães Ourique</p>
      </footer>
    </main>
  );
}
