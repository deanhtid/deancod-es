export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-xl">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            About Me
          </h1>
        </div>

        {/* Avatar Section */}
        <div className="flex justify-center">
          <div className="relative w-32 h-32 group">
            <img
              src="/avatar.png"
              alt="Dean Whittaker"
              className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
              loading="eager"
            />
          </div>
        </div>

        {/* Bio Section */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            Dean Whittaker
          </h2>
          <div className="space-y-2">
            <h3 className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
              Cloud Engineer
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Newcastle Upon Tyne, England, United Kingdom
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              AWS Cloud Engineer specialising in microservices, serverless
              technologies, and DevOps. Expert in Python, JavaScript, and
              building scalable cloud solutions with AWS services. Passionate
              about automation, infrastructure as code, and delivering secure,
              high-performance systems.
            </p>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/deanhtid99/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-gray-600 group-hover:fill-blue-600 dark:fill-gray-400 dark:group-hover:fill-blue-400 transition-colors duration-200"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/deanhtid"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-gray-600 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-200"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="mailto:deanhtid99@gmail.com"
            className="group p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Email"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6 stroke-gray-600 group-hover:stroke-gray-900 dark:stroke-gray-400 dark:group-hover:stroke-white transition-colors duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
