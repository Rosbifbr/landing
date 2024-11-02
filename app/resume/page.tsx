// pages/resume.tsx

interface Skill {
  category: string;
  skills: string[];
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies?: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
}

interface Award {
  title: string;
  location: string;
  description: string;
}
import Link from "next/link";
import React from "react";
import PrintButton from "./PrintButton";

export default function Resume() {
  // Skills Data
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
        "Web (APIs, JavaScript)",
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
        "Reverse Engineering",
        "Linux binaries",
        "IOT Devices (Mainly GPON ONTs)",
        "Linux (Ubuntu, Debian, Alpine)",
        "Shell scripting (POSIX, Fish)",
      ],
    },
    {
      category: "Workflow",
      skills: [
        "SCRUM/Agile development",
        "Git",
        "GitHub, Bitbucket",
        "Jira",
      ],
    },
  ];

  // Experience Data
  const experienceData: Experience[] = [
    {
      title: "Full Stack Software Engineer",
      company: "INT6 Tech",
      location: "Porto Alegre",
      period: "December 2021 - Present",
      responsibilities: [
        "Developed a large-scale Android application for automated CPE deployment, GPON installation quality control, and WiFi frequencies mapping.",
        "Implemented custom JavaScript compiler/processor microservice with WebDriver that is dynamically downloaded and executed by the mobile app.",
        "Refactored a large Kotlin codebase into OTA-Upgradable React Native Views.",
        "Maintained and extended existing Kotlin services interfacing with native Android APIs.",
        "Maintained a full-stack web application for complete L2 and L3 administration of GPON infrastructure, massive network analysis, and determination of the mobile app’s provisioning pipelines.",
        "Led a team of developers on the implementation of automated provisioning and management pipelines for various CPEs (Huawei, ZTE, Fiberhome, Intelbras, etc.).",
        "Developed multiple microservices for communication with different components of GPON infrastructure and mobile App.",
        "Reverse engineered a various networking hardware for better integration with our automated management services.",
      ],
      technologies: ["JavaScript", "NodeJS", "React", "React-Native", "Kotlin", "Ruby", "Python", "Binary Reverse Engineering", "Linux", "Docker", "Docker Compose", "Networking", "Jira"],
    },
    {
      title: "Software Engineering Intern",
      company: "INT6 Tech",
      location: "Porto Alegre",
      period: "April 2021 - December 2021",
      responsibilities: [
        "Developed modules for a large-scale Android application that conducts automated provisioning routines for various CPEs.",
        "Worked with Kotlin and JavaScript (Vanilla, NodeJS).",
      ],
      technologies: ["Kotlin", "JavaScript", "NodeJS"],
    },
    {
      title: "CNPq Scientific Initiation Scholarship, Promovid@ Project",
      company:
        "Federal Institute of Education, Science and Technology of Rio Grande do Sul (IFRS)",
      location: "Osório",
      period: "September 2020 - September 2021",
      responsibilities: [
        "Developed a full-stack COVID-19 patient, test, and vaccine management solution for regional health departments and hospitals, producing periodic reports for statistical analysis by higher administrative instances.",
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
      period: "April 2019 - December 2019",
      responsibilities: [
        "Developed a 3D-Printed digital key locker integrated with a local database and computer, with user identification done through RFID tags.",
        "Competed at the Brazilian Science and Technology Fair and was awarded 3rd place in the category of Electrical Engineering.",
      ],
      technologies: ["3D Printing", "Arduino", "Java"],
    },
  ];

  // Education Data
  const educationData: Education[] = [
    {
      degree: "B.S. in Computer Science",
      institution: "Federal University of Rio Grande do Sul (UFRGS)",
      period: "May 2023 - Present",
    },
    {
      degree: "B.S. in Computer Science",
      institution:
        "Pontifical Catholic University of Rio Grande do Sul (PUCRS)",
      period: "August 2022 - January 2023 (1 semester)",
    },
    {
      degree: "B.S. in Computer Science",
      institution: "University of Vale do Rio dos Sinos (Unisinos)",
      period: "February 2022 - August 2022 (1 semester)",
    },
    {
      degree:
        "High School with Associate Degree in Information Technology",
      institution:
        "Federal Institute of Education, Science and Technology of Rio Grande do Sul (IFRS)",
      period: "February 2018 - November 2021 (4 years)",
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
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-r from-purple-700 to-indigo-800 text-white p-8">
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
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2">
            <a
              href="https://linkedin.com/in/rodrigo-ourique-7aa30721b"
              className="text-indigo-200 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Rosbifbr/"
              className="text-indigo-200 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://stackoverflow.com/users/17733945/rodrigo-ourique"
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
            <p className="text-indigo-200">Portuguese - Native</p>
            <p className="text-indigo-200">English - Fluent</p>
            <p className="text-indigo-200">Spanish - Intermediate</p>
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
            location={exp.location}
            period={exp.period}
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
 * - period: Duration of employment
 * - responsibilities: Array of responsibilities or achievements
 */
function ExperienceItem({ title, company, location, period, responsibilities, technologies }: Experience) {
  return (
    <div>
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-indigo-100">{period}</p>
      <p className="text-indigo-200">{company}, {location}</p>
      <div className="space-y-3 mt-4">
        {responsibilities.map((item, index) => (
          <p key={index} className="text-indigo-100 pl-4 border-l-2 border-indigo-300">
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
function EducationSection({ educationData }: { educationData: Education[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <EducationItem
            key={index}
            degree={edu.degree}
            institution={edu.institution}
            period={edu.period}
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
function EducationItem({ degree, institution, period }: Education) {
  return (
    <div>
      <h4 className="text-xl font-semibold">{degree}</h4>
      <p className="text-indigo-100">{period}</p>
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
