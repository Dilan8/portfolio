import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="px-6 md:px-20 py-10 max-w-6xl mx-auto">

        {/* HERO */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-blue-500">Dilan Vasantharaj</span> 👋
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Site Reliability Engineer | DevOps | Systems Engineer | Platform Engineer | TechOps | SaaS | AWS | ITILv4
          </p>
        </section>

        {/* ABOUT */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl">
            Site Reliability Engineer with 3.5+ years of experience in cloud operations, DevOps automation, and system reliability.
            Skilled in designing scalable AWS infrastructure, implementing CI/CD pipelines, and building monitoring solutions using CloudWatch and Datadog.
            Experienced in incident management, reducing MTTR, and improving system uptime through proactive observability and automation.
          </p>
        </section>

        {/* SKILLS */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <h3 className="text-blue-400">Cloud & DevOps</h3>
              <p className="text-gray-400 text-sm">
                AWS, Azure, Terraform, Docker, Kubernetes
              </p>
            </div>

            <div>
              <h3 className="text-blue-400">CI/CD</h3>
              <p className="text-gray-400 text-sm">
                AWS CodePipeline, GitHub Actions, Jenkins
              </p>
            </div>

            <div>
              <h3 className="text-blue-400">Monitoring & Observability</h3>
              <p className="text-gray-400 text-sm">
                CloudWatch, Datadog
              </p>
            </div>

            <div>
              <h3 className="text-blue-400">Programming</h3>
              <p className="text-gray-400 text-sm">
                Node.js, React, Python, JavaScript, Java
              </p>
            </div>

          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Monitoring Dashboard */}
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:scale-105 hover:border-blue-500 transition">
              <h3 className="font-bold text-lg">Monitoring Dashboard</h3>
              <p className="text-gray-400 text-sm mt-2">
                Centralized dashboard to monitor business workflows and system health.
              </p>

              <button
                onClick={() => setOpen(true)}
                className="mt-4 bg-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-700"
              >
                View Details
              </button>
            </div>

            {/* Terraform */}
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:scale-105 hover:border-blue-500 transition">
              <h3 className="font-bold text-lg">Terraform Infrastructure</h3>
              <p className="text-gray-400 text-sm mt-2">
                Automated AWS infrastructure provisioning using Terraform (ECS, EC2, IAM).
              </p>
            </div>

            {/* CI/CD */}
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:scale-105 hover:border-blue-500 transition">
              <h3 className="font-bold text-lg">CI/CD Pipeline</h3>
              <p className="text-gray-400 text-sm mt-2">
                Implemented CI/CD pipelines using GitHub Actions and AWS CodePipeline.
              </p>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-400">📧 vasandarajdilan64@gmail.com</p>
          <p className="text-gray-400">💻 github.com/Dilan8</p>
          <p className="text-gray-400">🔗 linkedin.com/in/dilan-vasandaraj</p>
        </section>

      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-gray-900 max-w-3xl w-full p-6 rounded-xl relative max-h-[85vh] overflow-y-auto border border-gray-800">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-blue-400">
              Monitoring Dashboard
            </h2>

            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">

              <p>
                I designed and implemented a centralized monitoring dashboard to provide real-time visibility into critical business workflows involving a third-party SaaS platform, Varicent.
              </p>

              <p>
                The system supported business users such as Sales Consultants, District Sales Managers (DSM), Protein and Produce Specialists, and New Business Developers by ensuring accurate and timely data processing for sales performance and incentive calculations.
              </p>

              <p>
                The platform handled daily and weekly scheduled processes, including data extraction, file generation, secure file transfers via SFTP, and database updates across multiple systems using Node.js-based backend services.
              </p>

              <p>
                Integrated with Varicent APIs to trigger processes, monitor execution status, and validate outcomes. Due to integration constraints, an intermediate BIS layer was introduced to securely transfer files between internal systems and the third-party platform.
              </p>

              <p>
                The system processed millions of invoice records and ensured accurate reporting of sales performance and incentive payouts.
              </p>

              <p>
                Implemented automated data validation by comparing record counts between internal databases and Varicent systems, replacing manual verification processes and improving data accuracy.
              </p>

              <p>
                The dashboard provided a simple and intuitive interface for non-technical users to monitor job status, detect failures, and ensure smooth execution of workflows, significantly reducing MTTR and improving operational visibility.
              </p>

            </div>

            <div className="mt-6 border-t border-gray-800 pt-4">
              <p className="text-gray-500 text-sm">
                <span className="text-gray-300 font-semibold">Tech:</span> AWS, Node.js, Docker, SFTP, CloudWatch, Datadog, Varicent API, Cognito (SSO)
              </p>

              <p className="text-gray-500 text-xs mt-2">
                Enterprise project – code not publicly available
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;