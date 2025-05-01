import Link from "next/link";
import React from "react";
import PrintButton from "./PrintButton";

interface Skill {
  category: string;
  skills: string[];
}

interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | null; // null for current position
  about: string;
  responsibilities: string[];
  technologies?: string[];
}

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

interface Education {
  degree: string;
  institution: string;
  startDate: Date;
  endDate: Date | null; // null for current education
}

interface Award {
  title: string;
  location: string;
  description: string;
}

export default function Resume() {
  const skillsData: Skill[] = [
    {
      category: "Web Development",
      skills: [
        "JavaScript (Vanilla, React, Express, NodeJS)",
        "TypeScript (Vanilla, React, Express, NodeJS)",
        "Ruby (Rails)",
        "PHP",
        "Python",
        "MongoDB",
        "SQL",
        "Docker, Docker Compose",
        "HTML",
      ],
    },
    {
      category: "Mobile Development",
      skills: [
        "Kotlin (Android, Pure)",
        "Java (Android, Pure)",
        "React-Native (JavaScript, TypeScript)",
      ],
    },
    {
      category: "Systems/Low-Level",
      skills: [
        "C",
        "Rust",
        "Networking",
        "Reverse Engineering (ASM, Linux, Ghidra)",
        "IOT Devices (Mainly GPON ONTs)",
        "Linux (Ubuntu, Debian, Alpine)",
        "Shell scripting (POSIX, Fish, Bash)",
        "Network infrastructure",
      ],
    },
    {
      category: "Workflow",
      skills: [
        "SCRUM/Agile development",
        "Git",
        "GitHub, Bitbucket",
        "Jira",
        "Agile software development methodologies",
        "Scrum",
      ],
    },
    {
      category: "Other",
      skills: [
        "Data structures",
        "Object-Oriented Programming (OOP)",
        "Software development",
        "Low-Level debugging (LLDB, Pure GDB)",
      ],
    },
  ];

  // Experience Data
  const experienceData: Experience[] = [
    {
      title: "Senior Software Engineer",
      company: "INT6 Tech",
      location: "Porto Alegre, Rio Grande do Sul, Brazil",
      startDate: new Date(2023, 9), // October 2023
      endDate: null, // Present
      about: "Largest South American telecom automations company",
      responsibilities: [
        "Led a team of developers on a full React-Native and TS backend rewrite of a legacy system for automated GPON, EPON, and L3 CPE provisioning, quality assessment, and WiFi mapping.",
        "Mentored a team of developers on the implementation of automated provisioning pipelines for devices of multiple vendors (Huawei, ZTE, Fiberhome, Intelbras, etc.).",
        "Reverse-engineered significant amounts of networking hardware, images and binaries for improved integration with management services. (C,ASM,Linux,Ghidra)",
        "Enhanced and maintained analytics service for TR-098/369 bulk data processing, failure clustering and event classification.",
        "Collaborated with multiple Senior Engineers on several architectural redesigns and stipulation of code standards and processes.",
        "Implemented a custom JavaScript compiler/processor microservice for WebDriver bundling and synchronization.",
        "Maintained a full-stack web app for L2/L3 administration of GPON infrastructure, network analysis, and provisioning pipeline determination.",
      ],
      technologies: [
        "JavaScript",
        "NodeJS",
        "React",
        "React-Native",
        "Kotlin",
        "Ruby",
        "Python",
        "C",
        "Reverse Engineering (ASM, Linux, Ghidra)",
        "Linux",
        "Docker",
        "Docker Compose",
        "Networking",
        "Jira",
      ],
    },
    {
      title: "Mid-Level Software Engineer",
      company: "INT6 Tech",
      location: "Porto Alegre, Rio Grande do Sul, Brazil",
      startDate: new Date(2021, 11), // December 2021
      endDate: new Date(2023, 9), // October 2023
      about: "Largest South American telecom automations company",
      responsibilities: [
        "Led a team of developers on the implementation of automated provisioning pipelines for devices of multiple vendors (Huawei, ZTE, Fiberhome, Intelbras, etc.).",
        "Implemented a custom JavaScript compiler/processor microservice for WebDriver bundling and synchronization.",
        "Maintained and thoroughly enhanced Android application for automated installation, management and ISP-specific configuration for end-user network infrastructure (Access Points, Routers and ONUs).",
        "Maintained a full-stack web app for L2/L3 administration of GPON infrastructure, network analysis, and provisioning pipeline determination.",
      ],
      technologies: [
        "JavaScript",
        "NodeJS",
        "React",
        "React-Native",
        "Kotlin",
        "Ruby",
        "Python",
        "Linux",
        "Docker",
        "Docker Compose",
        "Networking",
        "Jira",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "INT6 Tech",
      location: "Porto Alegre, Rio Grande do Sul, Brazil",
      startDate: new Date(2021, 3), // April 2021
      endDate: new Date(2021, 11), // December 2021
      about: "Largest South American telecom automations company",
      responsibilities: [
        "Maintained Android application for automated installation, management and ISP-specific configuration for end-user network infrastructure (Access Points, Routers and ONUs).",
      ],
      technologies: ["Kotlin", "JavaScript", "NodeJS"],
    },
    {
      title: "CNPq Scientific Initiation Scholarship, Promovid@ Project",
      company:
        "Federal Institute of Education, Science and Technology of Rio Grande do Sul (IFRS)",
      location: "Osório",
      startDate: new Date(2020, 8), // September 2020
      endDate: new Date(2021, 8), // September 2021
      about: "High-School scientific initiation",
      responsibilities: [
        "Developed a full-stack COVID-19 patient, test, and vaccine management solution for regional health departments and hospitals, aggregating data and producing periodic reports for statistical analysis by municipal governments of Rio Grande do Sul.",
        "Integrated web backend with a mobile app developed in React Native.",
      ],
      technologies: ["JavaScript", "React", "NodeJS", "MongoDB"],
    },
    {
      title:
        "Volunteer Scientific Initiation Program, Novas Tecnologias Project, ClavIF Group",
      company:
        "Federal Institute of Education, Science and Technology of Rio Grande do Sul (IFRS)",
      location: "Osório",
      startDate: new Date(2019, 3), // April 2019
      endDate: new Date(2019, 11), // December 2019
      about: "High-School scientific initiation",
      responsibilities: [
        "Developed a 3D-Printed digital key locker integrated with a local database and computer, with user identification via RFID tags.",
        "Competed at the Brazilian Science and Technology Fair and secured 3rd place in Electrical Engineering.",
      ],
      technologies: ["3D Printing", "Arduino", "Java"],
    },
  ];

  // Education Data
  const educationData: Education[] = [
    {
      degree: "B.S. in Computer Science",
      institution: "Federal University of Rio Grande do Sul (UFRGS)",
      startDate: new Date(2023, 4), // May 2023
      endDate: null, // Present
    },
    {
      degree: "B.S. in Computer Science",
      institution:
        "Pontifical Catholic University of Rio Grande do Sul (PUCRS)",
      startDate: new Date(2022, 7), // August 2022
      endDate: new Date(2023, 1), // January 2023
    },
    {
      degree: "B.S. in Computer Science",
      institution: "University of Vale do Rio dos Sinos (Unisinos)",
      startDate: new Date(2022, 1), // February 2022
      endDate: new Date(2022, 7), // August 2022
    },
    {
      degree:
        "High School with Associate Degree in Information Technology",
      institution:
        "Federal Institute of Education, Science and Technology of Rio Grande do Sul (IFRS)",
      startDate: new Date(2018, 1), // February 2018
      endDate: new Date(2021, 11), // November 2021
    },
  ];

  // Awards Data
  const awardsData: Award[] = [
    {
      title: "Brazilian Science and Technology Exhibit (Mostratec)",
      location: "Novo Hamburgo, 2019 Edition",
      description:
        "Third place in Electronic Engineering with project ClavIF.",
    },
    {
      title: "Education, Extension and Research Exposition (MoExP)",
      location: "Osório, 2021 Edition",
      description:
        "Highlight in Exact and Earth Sciences with project Promovid@.",
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-700 to-purple-800 text-white p-8">
      <h1 className="text-4xl font-bold mb-2">Rodrigo Guimarães Ourique</h1>
      <p className="text-xl mb-1">
        Full Stack Software Engineer at Int6Tech
      </p>
      <p className="text-indigo-200 mb-1">
        510 Delfino Riet Street, Porto Alegre, Rio Grande do Sul, Brazil
      </p>

      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 space-y-8 mt-6">
        {/* Contact Section */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-indigo-200">
            E-Mail:{" "}
            <a
              href="mailto:rodrigo.guima.ourique@gmail.com"
              className="underline hover:text-white"
            >
              rodrigo.guima.ourique@gmail.com
            </a>
          </p>
          <p className="text-indigo-200">
            Phone:{" "}
            <a
              href="tel:+5551998077812"
              className="underline hover:text-white"
            >
              +55 51 99807-7812
            </a>
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2">
            <a
              href="https://linkedin.com/in/rodrigo-ourique-7aa30721b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-200 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Rosbifbr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-200 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://stackoverflow.com/users/17733945/rodrigo-ourique"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-200 hover:text-white"
            >
              StackOverflow
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection skillsData={skillsData} />

        {/* Experience Section */}
        <ExperienceSection experienceData={experienceData} />

        {/* Education Section */}
        <EducationSection educationData={educationData} />

        {/* Awards Section */}
        <AwardsSection awardsData={awardsData} />

        {/* Languages Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Languages</h2>
          <div className="flex flex-wrap gap-4">
            <span className="px-3 py-1 text-sm bg-indigo-200/30 rounded-full text-indigo-100">
              🇺🇸 English (CEFR: C1)
            </span>
            <span className="px-3 py-1 text-sm bg-indigo-200/30 rounded-full text-indigo-100">
              🇧🇷 Portuguese (CEFR: C2)
            </span>
            <span className="px-3 py-1 text-sm bg-indigo-200/30 rounded-full text-indigo-100">
              🇪🇸 Spanish (CEFR: B1)
            </span>
            <span className="px-3 py-1 text-sm bg-indigo-200/30 rounded-full text-indigo-100">
              🇫🇷 French (CEFR: A1)
            </span>
          </div>
        </section>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link
          href="/"
          className="px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-100 transition-colors text-center"
        >
          Back to Home
        </Link>
        <PrintButton />
      </div>
    </main>
  );
}

/* -------------------- Sub-Components Below -------------------- */

/**
 * SkillsSection Component
 * Props:
 * - skillsData: Array of skill categories with their respective skills
 */
function SkillsSection({ skillsData }: { skillsData: Skill[] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="space-y-8">
        {skillsData.map((skillCategory, index) => (
          <SkillItem
            key={index}
            category={skillCategory.category}
            skills={skillCategory.skills}
          />
        ))}
      </div>
    </section>
  );
}

/**
 * SkillItem Component
 * Props:
 * - category: The category of skills (e.g., Web Development)
 * - skills: Array of skills under the category
 */
function SkillItem({ category, skills }: { category: string; skills: string[] }) {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-2">{category}</h4>
      <ul className="list-disc list-inside text-indigo-100">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

/**
 * ExperienceSection Component
 * Props:
 * - experienceData: Array of experience entries
 */
function ExperienceSection({ experienceData }: { experienceData: Experience[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            about={exp.about}
            location={exp.location}
            startDate={exp.startDate}
            endDate={exp.endDate}
            responsibilities={exp.responsibilities}
            technologies={exp.technologies}
          />
        ))}
      </div>
    </section>
  );
}

/**
 * ExperienceItem Component
 * Props:
 * - title: Job title
 * - company: Company name
 * - location: Job location
 * - responsibilities: Array of responsibilities or achievements
 */
function ExperienceItem({
  title,
  company,
  location,
  startDate,
  endDate,
  responsibilities,
  technologies,
  about,
}: Experience) {
  return (
    <div>
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-indigo-100">
        {formatDate(startDate)} - {endDate ? formatDate(endDate) : "Present"} ·{" "}
        {calculateDuration(startDate, endDate)}
      </p>
      <div className="flex items-center gap-2">
        <p className="text-indigo-200">
          {company}, {location}
        </p>
        <div className="group relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-indigo-300 cursor-help"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          <div className="absolute hidden group-hover:block bg-indigo-800 text-white text-sm px-3 py-2 rounded-lg w-64 -left-32 mt-2">
            {about}
          </div>
        </div>
      </div>
      <div className="space-y-3 mt-4">
        {responsibilities.map((item, index) => (
          <p
            key={index}
            className="text-indigo-100 pl-4 border-l-2 border-indigo-300"
          >
            {item}
          </p>
        ))}
      </div>
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-indigo-200/30 rounded-full text-indigo-100"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * EducationSection Component
 * Props:
 * - educationData: Array of education entries
 */
function EducationSection({
  educationData,
}: {
  educationData: Education[];
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <EducationItem
            key={index}
            degree={edu.degree}
            institution={edu.institution}
            startDate={edu.startDate}
            endDate={edu.endDate}
          />
        ))}
      </div>
    </section>
  );
}

/**
 * EducationItem Component
 * Props:
 * - degree: Degree name
 * - institution: Institution name
 * - period: Duration of study
 */
function EducationItem({
  degree,
  institution,
  startDate,
  endDate,
}: Education) {
  return (
    <div>
      <h4 className="text-xl font-semibold">{degree}</h4>
      <p className="text-indigo-100">
        {formatDate(startDate)} - {endDate ? formatDate(endDate) : "Present"} ·{" "}
        {calculateDuration(startDate, endDate)}
      </p>
      <p className="text-indigo-200">{institution}</p>
    </div>
  );
}

/**
 * AwardsSection Component
 * Props:
 * - awardsData: Array of awards entries
 */
function AwardsSection({ awardsData }: { awardsData: Award[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Awards</h2>
      <div className="space-y-4">
        {awardsData.map((award, index) => (
          <AwardItem
            key={index}
            title={award.title}
            location={award.location}
            description={award.description}
          />
        ))}
      </div>
    </section>
  );
}

/**
 * AwardItem Component
 * Props:
 * - title: Award title
 * - location: Award location and edition
 * - description: Award description or achievement
 */
function AwardItem({ title, location, description }: Award) {
  return (
    <div>
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-indigo-200">{location}</p>
      <p className="text-indigo-100">{description}</p>
    </div>
  );
}
