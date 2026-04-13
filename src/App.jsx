function App() {
  return (
   <div className="bg-gray-950 text-white min-h-screen">
  <div className="px-6 md:px-20 py-10 max-w-6xl mx-auto">

      {/* HERO */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue-500">Dilan Vasantharaj</span> 👋
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Site Reliability Engineer  | DevOps | Systems Engineer | Platform Engineer | TechOps | SaaS | AWS | ITILv4
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
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["AWS", "Terraform", "CI/CD", "CloudWatch", "Datadog", "Docker"].map(skill => (
            <span
              key={skill}
              className="bg-blue-600/20 border border-blue-500 px-4 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Project 1 */}
          <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:scale-105 hover:border-blue-500 transition">
            <h3 className="font-bold text-lg">Monitoring Dashboard</h3>
            <p className="text-gray-400 text-sm mt-2">
              Built centralized monitoring using AWS CloudWatch & Datadog to improve visibility and reduce MTTR.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Enterprise project – code not publicly available
            </p>

            <div className="mt-4 flex gap-3">
              <button className="bg-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:scale-105 hover:border-blue-500 transition">
            <h3 className="font-bold text-lg">Terraform Infrastructure</h3>
            <p className="text-gray-400 text-sm mt-2">
              Automated AWS infrastructure provisioning using Terraform (ECS, EC2, IAM).
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com/Dilan8"
                target="_blank"
                className="bg-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-700"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:scale-105 hover:border-blue-500 transition">
            <h3 className="font-bold text-lg">CI/CD Pipeline</h3>
            <p className="text-gray-400 text-sm mt-2">
              Implemented CI/CD pipelines using GitHub Actions and AWS CodePipeline.
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com/Dilan8"
                target="_blank"
                className="bg-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-700"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>

        <div className="flex flex-col gap-2 text-gray-400">
          <a href="mailto:vasandarajdilan64@gmail.com" className="text-blue-400 hover:underline">
            📧 vasandarajdilan64@gmail.com
          </a>

          <a href="https://github.com/Dilan8" target="_blank" className="text-blue-400 hover:underline">
            💻 github.com/Dilan8
          </a>

          <a href="https://www.linkedin.com/in/dilan-vasandaraj" target="_blank" className="text-blue-400 hover:underline">
            🔗 linkedin.com/in/dilan-vasandaraj
          </a>
        </div>
      </section>

      </div>
</div>
  );
}

export default App;