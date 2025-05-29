import React from "react";
import { Mail, Linkedin } from "lucide-react";
import styles from "./Portfolio.module.css";

const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg border p-4 shadow-sm ${className}`}>
    {children}
  </div>
);
const CardContent = ({ children }) => <div>{children}</div>;
const Button = ({ children, ...props }) => (
  <button
    className="px-4 py-2 rounded bg-amber-700 text-white hover:bg-amber-800"
    {...props}
  >
    {children}
  </button>
);

const SkillBar = ({ skill, level }) => (
  <div className={styles.skillWrapper}>
    <div className={styles.skillHeader}>
      <span className={styles.skillName}>{skill}</span>
      <span className={styles.skillLevel}>{level}%</span>
    </div>
    <div className={styles.skillBarBackground}>
      <div className={styles.skillBarFill} style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

export default function Portfolio() {
  return (
    <main className={styles.container}>
      <div className={styles.topRightIcons}>
        <a href="mailto:reddylavanya003@gmail.com" className={styles.icon}>
          <Mail />
        </a>
        <a
          href="https://www.linkedin.com/in/reddylavanya/"
          target="_blank"
          className={styles.icon}
        >
          <Linkedin />
        </a>
      </div>

      {/* About Section */}
      <section className={styles.section}>
        <h1 className={styles.header}>Hi, I'm Lavanya Reddy 👋</h1>
        <p className={styles.paragraph}>
          I’m a results-driven Full Stack Developer with over 9 years of
          experience building modern, scalable web applications. My core
          expertise lies in crafting interactive frontends using React, Angular,
          and Vue.js, while also building robust backend systems with Node.js
          and Java Spring Boot. I’ve successfully delivered enterprise-grade
          applications for leading organizations across fintech, healthcare,
          edtech, and media domains. I have built mobile applications too using
          Swift 5+, OKTA. I specialize in cloud-native development (AWS, Azure,
          GCP), CI/CD automation, container orchestration with
          Docker/Kubernetes, and security-first API design. With a strong
          foundation in agile delivery, cross-functional collaboration, and
          continuous learning, I thrive on solving real-world problems with
          clean, maintainable code.
        </p>
      </section>

      {/* Skills Section */}
      <section className={styles.section}>
        <h2 className={styles.subHeader}>Skills</h2>
        <div className={styles.skillGrid}>
          <Card className={styles.skillCard}>
            <CardContent>
              <SkillBar skill="React.js" level={90} />
              <SkillBar skill="Angular" level={95} />
              <SkillBar skill="Vue.js" level={75} />
              <SkillBar skill="Node.js / Express.js" level={90} />
              <SkillBar skill="Java / Spring Boot" level={88} />
              <SkillBar skill="REST / GraphQL / OpenAPI" level={90} />
            </CardContent>
          </Card>
          <Card className={styles.skillCard}>
            <CardContent>
              <SkillBar skill="AWS / Azure / GCP" level={95} />
              <SkillBar skill="Docker / Kubernetes" level={75} />
              <SkillBar skill="CI/CD (Jenkins, GitHub Actions)" level={90} />
              <SkillBar skill="OIDC / OAuth2 / SAML" level={85} />
              <SkillBar skill="Jest & Karma" level={95} />
              <SkillBar skill="Swift 5+" level={95} />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.section}>
        <h2 className={styles.subHeader}>Projects</h2>
        <Card>
          <CardContent>
            <ul className={styles.projectList}>
              <li>
                <strong>Associated Press – Elections Re-platforming:</strong>
                <ul>
                  <li>
                    Built Angular UIs for vote entry and decision desk teams.
                  </li>
                  <li>
                    Integrated AWS Lambda, AppSync, Kinesis, and Backstage.io.
                  </li>
                </ul>
              </li>
              <li>
                <strong>State Street – Financial Dashboard:</strong>
                <ul>
                  <li>
                    Developed multilingual SPAs using React, Vue.js, and
                    Next.js.
                  </li>
                  <li>
                    Used Laravel, GraphQL, and Chart.js for data-driven
                    visualizations.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Marshfield Clinic – Trial Management Platform:</strong>
                <ul>
                  <li>Built React UI and Node.js backend with AWS Lambda.</li>
                  <li>
                    Implemented OAuth2/OIDC for secure clinical workflows.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  Cantilever Labs – AI-Based Career Planning Platform:
                </strong>
                <ul>
                  <li>
                    Developed interactive React dashboards to visualize student
                    progress and skill gaps.
                  </li>
                  <li>
                    Implemented backend services in Node.js for personalized job
                    path predictions.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Merchant Onboarding Portal:</strong>
                <ul>
                  <li>
                    Created Angular interfaces for seamless merchant
                    registration and document verification.
                  </li>
                  <li>
                    Integrated Spring Boot microservices with PostgreSQL and
                    Redis for real-time validations.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Employee Self-Service Platform:</strong>
                <ul>
                  <li>
                    Designed reusable React components and integrated with
                    GraphQL APIs.
                  </li>
                  <li>
                    Optimized UI performance using React.memo and dynamic form
                    rendering logic.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cloud Migration Analytics Dashboard:</strong>
                <ul>
                  <li>
                    Built Vue.js analytics tools to monitor infrastructure
                    migration KPIs.
                  </li>
                  <li>
                    Used AWS Lambda and DynamoDB to generate real-time
                    operational metrics.
                  </li>
                </ul>
              </li>
              <li>
                <strong>eCommerce Admin Portal:</strong>
                <ul>
                  <li>
                    Designed a full-stack angular application for managing
                    inventory, orders, and promotions.
                  </li>
                  <li>
                    Enabled image uploads, dashboard analytics, and role-based
                    user management.
                  </li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Recommendation Section */}
      <section className={styles.section}>
        <h2 className={styles.subHeader}>Peer Recommendation</h2>
        <Card>
          <CardContent>
            <blockquote className={styles.quote}>
              <p>
                “I am writing to recommend Lavanya Reddy for any future software
                development opportunities. During their time with Associated
                Press, Lavanya worked as a software development contractor on
                the 1848 project which is the application the AP uses to
                collect, tabulate and distribute U.S. Election results. She
                demonstrated excellent technical skills and professionalism,
                particularly in front-end development with Angular.
              </p>
              <p>
                Lavanya delivered a number of key features specifically on the
                user interface screens used by several different user groups.
                These included vote entry and decision desk staff. It should be
                noted that these screens are very complex and data intensive and
                she was able to be productive in a short period of time. One
                particular feature she was able to build was a new data entry
                mode called Top of the Ticket which was critical for
                successfully handling the 2024 General Election.
              </p>
              <p>
                Lavanya was also able to integrate quickly into our team and our
                way of doing work. She quickly adapted to our workflows, and
                effectively communicated with both technical and project
                management teams. She was willing to take on new work and was
                always willing to learn.
              </p>
              <p>
                In summary, Lavanya is a skilled Angular developer and
                dependable team member. Her technical abilities, dedication, and
                ability to work well within a team make her a valuable asset to
                any organization. I am confident they will bring the same level
                of excellence to their future endeavors.”
              </p>
              <footer className={styles.footer}>
                – Fred Strauss, Director of Software Development, Associated
                Press
              </footer>
            </blockquote>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
