import { useState } from "react";

const projects = [
  {
    id: "monitoring",
    title: "Monitoring Dashboard",
    short: "Centralized real-time dashboard to monitor business workflows and system health.",
    tech: "AWS · Node.js · Docker · SFTP · CloudWatch · Datadog · Varicent API · Cognito",
    badge: "Enterprise",
    badgeColor: "#7C3AED",
    icon: "📊",
    modal: {
      title: "Monitoring Dashboard",
      githubUrl: null,
      note: "Enterprise project – code not publicly available",
      sections: [
        { heading: "Overview", body: "Designed and implemented a centralized monitoring dashboard to provide real-time visibility into critical business workflows involving a third-party SaaS platform, Varicent." },
        { heading: "Business Impact", body: "Supported Sales Consultants, District Sales Managers, Protein and Produce Specialists, and New Business Developers — ensuring accurate and timely data processing for sales performance and incentive calculations." },
        { heading: "What I Built", body: "The platform handled daily and weekly scheduled processes — data extraction, file generation, secure file transfers via SFTP, and database updates across multiple systems using Node.js-based backend services. Integrated with Varicent APIs to trigger processes, monitor execution status, and validate outcomes." },
        { heading: "Scale", body: "The system processed millions of invoice records and ensured accurate reporting of sales performance and incentive payouts. Implemented automated data validation by comparing record counts between internal databases and Varicent systems — replacing manual verification entirely." },
        { heading: "Outcome", body: "Significantly reduced MTTR and improved operational visibility. Non-technical users could now monitor job status, detect failures, and ensure smooth workflow execution without engineering involvement." }
      ]
    }
  },
  {
    id: "cicd",
    title: "AWS CI/CD Pipeline",
    short: "Fully automated pipeline: git push triggers build, Docker image creation, ECR push and ECS deployment.",
    tech: "AWS ECS · ECR · EC2 · Jenkins · Docker · Terraform · VPC · IAM · S3",
    badge: "Personal Project",
    badgeColor: "#0284C7",
    icon: "🚀",
    modal: {
      title: "Automated CI/CD Pipeline — AWS",
      githubUrl: "https://github.com/Dilan8/Jenkins-Pipeline",
      note: null,
      sections: [
        { heading: "Overview", body: "Built a fully automated, production-equivalent CI/CD pipeline from scratch on AWS. A single git push triggers the entire flow — build, containerise, push to registry, and deploy — with zero manual steps." },
        { heading: "Pipeline Flow", body: "Developer pushes code to GitHub. GitHub webhook triggers Jenkins on EC2. Jenkins runs npm install and npm run build (React/Vite). Docker builds a multi-stage image. Image is pushed to Amazon ECR. ECS update-service forces a new Fargate deployment. React app is live." },
        { heading: "Infrastructure as Code", body: "Entire AWS infrastructure defined in Terraform across 7 files: vpc.tf (VPC, 2 public subnets across AZs, Internet Gateway, route tables), security.tf (security groups for EC2 and ECS), ec2.tf (Jenkins server with IAM role and user data bootstrap), ecr.tf (private Docker registry with lifecycle policy), ecs.tf (Fargate cluster, task definition, service), variables.tf, and outputs.tf. Remote state stored in S3." },
        { heading: "Networking Design", body: "Custom VPC (10.0.0.0/16) with two public subnets across separate Availability Zones. Internet Gateway enables inbound traffic. Security groups restrict Jenkins UI to port 8080 and the app to port 5173. SSH restricted to a specific IP only." },
        { heading: "Security", body: "No AWS credentials stored anywhere. Jenkins EC2 uses an IAM instance role for ECR push and ECS deploy permissions — credentials are temporary and auto-rotate. ECS tasks use a separate task execution role for ECR image pulls and CloudWatch log writes." },
        { heading: "Key Decisions", body: "Chose ECS Fargate over EC2-based containers to eliminate server management overhead. Used ECR lifecycle policy to retain only the last 10 images. Added ignore_changes on task_definition in Terraform to prevent state conflicts with Jenkins deployments." },
        { heading: "Outcome", body: "Fully automated pipeline where every git push results in a live deployment within minutes. Infrastructure can be destroyed and recreated with two commands. Demonstrates end-to-end SRE skills: networking, security, IaC, containerisation, and CI/CD automation." }
      ]
    }
  },
  {
    id: "terraform",
    title: "Terraform Infrastructure",
    short: "Complete AWS infrastructure as code — VPC, subnets, EC2, ECS, ECR, IAM roles, and S3 remote state.",
    tech: "Terraform · AWS VPC · EC2 · ECS · ECR · IAM · S3 · Security Groups",
    badge: "Personal Project",
    badgeColor: "#059669",
    icon: "⚙️",
    modal: null
  }
];

const skills = [
  {
    category: "Cloud & Infrastructure",
    icon: "☁️",
    items: ["AWS", "Azure", "Terraform", "VPC", "EC2", "ECS", "ECR", "IAM", "S3"]
  },
  {
    category: "CI/CD & Automation",
    icon: "🔄",
    items: ["Jenkins", "GitHub Actions", "AWS CodePipeline", "Docker", "Webhooks", "Bash"]
  },
  {
    category: "Monitoring & Observability",
    icon: "📡",
    items: ["CloudWatch", "Datadog", "Log Analysis", "Alerting", "MTTR Reduction"]
  },
  {
    category: "Programming",
    icon: "💻",
    items: ["Node.js", "Python", "React", "JavaScript", "Java"]
  }
];

const stats = [
  { value: "3.5+", label: "Years Experience" },
  { value: "99.9%", label: "Uptime Target" },
  { value: "50%", label: "MTTR Reduction" },
  { value: "10+", label: "AWS Services" }
];

function ProjectModal({ project, onClose }) {
  const m = project.modal;
  return (
    <div
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 50, padding: "16px"
      }}
      onClick={function(e) { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        background: "#0F172A", maxWidth: "720px", width: "100%",
        padding: "32px", borderRadius: "20px", position: "relative",
        maxHeight: "88vh", overflowY: "auto",
        border: "1px solid #1E3A5F",
        boxShadow: "0 25px 60px rgba(0,0,0,0.6)"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "20px", right: "20px",
            background: "#1E293B", border: "1px solid #334155",
            borderRadius: "8px", color: "#94A3B8", cursor: "pointer",
            width: "32px", height: "32px", fontSize: "16px",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}
        >
          ✕
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          <span style={{ fontSize: "28px" }}>{project.icon}</span>
          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#60A5FA", margin: 0 }}>{m.title}</h2>
        </div>

        <p style={{ fontSize: "12px", color: "#475569", marginBottom: "24px" }}>{project.tech}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {m.sections.map(function(section, index) {
            return (
              <div key={index} style={{ borderLeft: "2px solid #1D4ED8", paddingLeft: "16px" }}>
                <h3 style={{ fontSize: "11px", fontWeight: 600, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
                  {section.heading}
                </h3>
                <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: "1.7", margin: 0 }}>
                  {section.body}
                </p>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid #1E293B", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px" }}>
          {m.githubUrl ? (
            <a
              href={m.githubUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "#1E293B", border: "1px solid #334155",
                color: "#60A5FA", padding: "8px 16px", borderRadius: "8px",
                fontSize: "13px", textDecoration: "none", fontWeight: 500
              }}
            >
              <span>⎋</span> View on GitHub
            </a>
          ) : null}
          {m.note ? (
            <span style={{ fontSize: "12px", color: "#475569" }}>{m.note}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [openProject, setOpenProject] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div style={{ background: "#080F1A", color: "#E2E8F0", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 40, background: "rgba(8,15,26,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid #0F2040", padding: "0 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#60A5FA", letterSpacing: "0.02em" }}>DV</span>
          <div style={{ display: "flex", gap: "28px" }}>
            {["About", "Skills", "Projects", "Contact"].map(function(item) {
              return (
                <a
                  key={item}
                  href={"#" + item.toLowerCase()}
                  style={{ fontSize: "13px", color: "#64748B", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
                  onMouseOver={function(e) { e.target.style.color = "#60A5FA"; }}
                  onMouseOut={function(e) { e.target.style.color = "#64748B"; }}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>

        {/* HERO */}
        <section id="about" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "700px" }}>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#0F2040", border: "1px solid #1D4ED8", borderRadius: "20px", padding: "6px 14px", width: "fit-content" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22C55E", display: "inline-block" }}></span>
              <span style={{ fontSize: "12px", color: "#60A5FA", fontWeight: 500 }}>Open to opportunities in Australia</span>
            </div>

            <div>
              <p style={{ fontSize: "16px", color: "#3B82F6", fontWeight: 500, marginBottom: "8px", letterSpacing: "0.05em" }}>
                SITE RELIABILITY ENGINEER
              </p>
              <h1 style={{ fontSize: "52px", fontWeight: 800, lineHeight: 1.1, margin: 0, color: "#F1F5F9" }}>
                Dilan<br />
                <span style={{ color: "#3B82F6" }}>Vasantharaj</span>
              </h1>
            </div>

            <p style={{ fontSize: "16px", color: "#64748B", lineHeight: 1.8, margin: 0 }}>
              SRE with <strong style={{ color: "#94A3B8" }}>3.5+ years</strong> of experience building reliable, scalable cloud infrastructure on AWS.
              I specialise in CI/CD automation, infrastructure as code with Terraform, container orchestration with ECS and Docker,
              and production observability using CloudWatch and Datadog.
            </p>

            <p style={{ fontSize: "15px", color: "#64748B", lineHeight: 1.8, margin: 0 }}>
              Previously based in Sri Lanka, now relocated to <strong style={{ color: "#94A3B8" }}>Melbourne, Australia</strong>.
              During my transition I built production-grade projects from scratch — including a fully automated
              CI/CD pipeline on AWS — to deepen hands-on cloud and DevOps skills beyond my professional experience.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="#projects"
                style={{ background: "#2563EB", color: "#fff", padding: "12px 24px", borderRadius: "10px", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                style={{ background: "transparent", color: "#60A5FA", padding: "12px 24px", borderRadius: "10px", textDecoration: "none", fontSize: "14px", fontWeight: 600, border: "1px solid #1D4ED8" }}
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* STATS */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginTop: "64px" }}>
            {stats.map(function(s) {
              return (
                <div key={s.label} style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "14px", padding: "20px", textAlign: "center" }}>
                  <div style={{ fontSize: "28px", fontWeight: 800, color: "#3B82F6" }}>{s.value}</div>
                  <div style={{ fontSize: "12px", color: "#475569", marginTop: "4px", fontWeight: 500 }}>{s.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHAT I DO */}
        <section style={{ paddingBottom: "80px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: 600, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
            What I Do
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {[
              { icon: "🏗️", title: "Infrastructure as Code", body: "Design and provision entire AWS environments using Terraform — VPC, EC2, ECS, IAM, S3 — reproducible and version controlled." },
              { icon: "🔄", title: "CI/CD Automation", body: "Build end-to-end pipelines using Jenkins and GitHub Actions. Code goes from git push to live deployment automatically." },
              { icon: "📡", title: "Observability", body: "Set up CloudWatch and Datadog dashboards, log pipelines, and alerting so teams know about issues before users do." },
              { icon: "🐳", title: "Containerisation", body: "Package applications in Docker using multi-stage builds, push to ECR, and orchestrate with ECS Fargate." },
              { icon: "🔒", title: "Security & IAM", body: "Apply least-privilege IAM roles, eliminate hardcoded credentials, and secure infrastructure at the network and identity layer." },
              { icon: "🚨", title: "Incident Management", body: "Drive MTTR reduction through runbooks, automated alerting, post-incident reviews, and proactive reliability improvements." }
            ].map(function(item) {
              return (
                <div
                  key={item.title}
                  style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "14px", padding: "24px" }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "12px" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#E2E8F0", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ paddingBottom: "80px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: 600, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
            Skills
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
            {skills.map(function(s) {
              return (
                <div
                  key={s.category}
                  style={{ background: "#0F172A", border: "1px solid " + (activeSkill === s.category ? "#2563EB" : "#1E293B"), borderRadius: "14px", padding: "24px", cursor: "default", transition: "border-color 0.2s" }}
                  onMouseOver={function() { setActiveSkill(s.category); }}
                  onMouseOut={function() { setActiveSkill(null); }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                    <span style={{ fontSize: "20px" }}>{s.icon}</span>
                    <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#CBD5E1", margin: 0 }}>{s.category}</h3>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {s.items.map(function(item) {
                      return (
                        <span
                          key={item}
                          style={{ background: "#0F2040", border: "1px solid #1D4ED8", color: "#60A5FA", padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: 500 }}
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ paddingBottom: "80px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: 600, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
            Projects
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {projects.map(function(p) {
              return (
                <div
                  key={p.id}
                  style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column", transition: "border-color 0.2s, transform 0.2s" }}
                  onMouseOver={function(e) { e.currentTarget.style.borderColor = "#2563EB"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseOut={function(e) { e.currentTarget.style.borderColor = "#1E293B"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span style={{ fontSize: "28px" }}>{p.icon}</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "20px", background: p.badgeColor + "22", color: p.badgeColor, border: "1px solid " + p.badgeColor + "55" }}>
                      {p.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#F1F5F9", marginBottom: "8px" }}>{p.title}</h3>
                  <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.7, flex: 1, marginBottom: "16px" }}>{p.short}</p>

                  <p style={{ fontSize: "11px", color: "#334155", lineHeight: 1.6, marginBottom: "16px" }}>{p.tech}</p>

                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {p.modal ? (
                      <button
                        onClick={function() { setOpenProject(p); }}
                        style={{ background: "#1D4ED8", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}
                      >
                        View Details
                      </button>
                    ) : null}
                    {p.modal && p.modal.githubUrl ? (
                      <a
                        href={p.modal.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{ background: "#1E293B", color: "#60A5FA", border: "1px solid #334155", padding: "8px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: 600, textDecoration: "none" }}
                      >
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ paddingBottom: "80px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: 600, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
            Contact
          </h2>
          <div style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "16px", padding: "40px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between" }}>

            <div>
              <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#F1F5F9", marginBottom: "8px" }}>
                Let's work together
              </h3>
              <p style={{ fontSize: "14px", color: "#475569", margin: 0, maxWidth: "400px", lineHeight: 1.7 }}>
                Open to SRE, DevOps, and Cloud Engineering roles in Melbourne and across Australia.
                Feel free to reach out via any channel below.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

              <a
                href="mailto:vasandarajdilan64@gmail.com"
                style={{ display: "flex", alignItems: "center", gap: "12px", background: "#1E293B", border: "1px solid #334155", borderRadius: "10px", padding: "12px 20px", textDecoration: "none", color: "#E2E8F0", fontSize: "14px", minWidth: "280px" }}
                onMouseOver={function(e) { e.currentTarget.style.borderColor = "#3B82F6"; }}
                onMouseOut={function(e) { e.currentTarget.style.borderColor = "#334155"; }}
              >
                <span style={{ fontSize: "20px" }}>📧</span>
                <div>
                  <div style={{ fontSize: "10px", color: "#475569", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>Email</div>
                  <div style={{ fontSize: "13px", color: "#94A3B8" }}>vasandarajdilan64@gmail.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/dilan-vasandaraj"
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "12px", background: "#1E293B", border: "1px solid #334155", borderRadius: "10px", padding: "12px 20px", textDecoration: "none", color: "#E2E8F0", fontSize: "14px" }}
                onMouseOver={function(e) { e.currentTarget.style.borderColor = "#3B82F6"; }}
                onMouseOut={function(e) { e.currentTarget.style.borderColor = "#334155"; }}
              >
                <span style={{ fontSize: "20px" }}>🔗</span>
                <div>
                  <div style={{ fontSize: "10px", color: "#475569", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>LinkedIn</div>
                  <div style={{ fontSize: "13px", color: "#94A3B8" }}>linkedin.com/in/dilan-vasandaraj</div>
                </div>
              </a>

              <a
                href="https://github.com/Dilan8"
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "12px", background: "#1E293B", border: "1px solid #334155", borderRadius: "10px", padding: "12px 20px", textDecoration: "none", color: "#E2E8F0", fontSize: "14px" }}
                onMouseOver={function(e) { e.currentTarget.style.borderColor = "#3B82F6"; }}
                onMouseOut={function(e) { e.currentTarget.style.borderColor = "#334155"; }}
              >
                <span style={{ fontSize: "20px" }}>💻</span>
                <div>
                  <div style={{ fontSize: "10px", color: "#475569", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>GitHub</div>
                  <div style={{ fontSize: "13px", color: "#94A3B8" }}>github.com/Dilan8</div>
                </div>
              </a>

              <div
                style={{ display: "flex", alignItems: "center", gap: "12px", background: "#1E293B", border: "1px solid #334155", borderRadius: "10px", padding: "12px 20px", fontSize: "14px" }}
              >
                <span style={{ fontSize: "20px" }}>📍</span>
                <div>
                  <div style={{ fontSize: "10px", color: "#475569", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>Location</div>
                  <div style={{ fontSize: "13px", color: "#94A3B8" }}>Melbourne, Australia</div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid #0F2040", padding: "20px 32px", textAlign: "center" }}>
        <p style={{ fontSize: "12px", color: "#1E3A5F", margin: 0 }}>
          Built with React + Vite · Deployed via Jenkins CI/CD → AWS ECS Fargate
        </p>
      </div>

      {openProject ? (
        <ProjectModal
          project={openProject}
          onClose={function() { setOpenProject(null); }}
        />
      ) : null}

    </div>
  );
}
