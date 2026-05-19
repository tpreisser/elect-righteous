"use client";

export default function BuiltByBadge() {
  const basePath = process.env.NODE_ENV === "production" ? "/elect-righteous" : "";

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 no-print">
      <a
        href="https://www.preissersolutions.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 max-w-12 items-center gap-3 overflow-hidden rounded-lg pl-2.5 pr-2.5 shadow-lg backdrop-blur-md transition-all duration-300 hover:max-w-[18rem] hover:shadow-xl focus:max-w-[18rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal sm:h-[3.25rem] sm:max-w-[3.25rem] sm:rounded-xl sm:pl-3 sm:pr-3"
        style={{
          backgroundColor: "rgba(16, 64, 93, 0.95)",
          border: "1px solid rgba(28, 195, 175, 0.25)",
        }}
        aria-label="Visit Preisser Solutions"
      >
        <img
          src={`${basePath}/preisser-solutions-logo.webp`}
          alt=""
          width={30}
          height={30}
          className="h-7 w-7 flex-shrink-0 rounded-md sm:h-[30px] sm:w-[30px]"
          aria-hidden="true"
        />
        <div className="hidden min-w-[13rem] flex-col leading-tight opacity-0 transition-opacity duration-200 group-hover:flex group-hover:opacity-100 group-focus:flex group-focus:opacity-100 sm:flex">
          <span className="text-[11px] sm:text-[13px] font-heading font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-teal">
            Built by Preisser Solutions
          </span>
          <span className="text-[9px] sm:text-[11px] font-body text-white/55">
            <span className="font-semibold text-white/70">Hays, KS</span>
          </span>
        </div>

        <svg
          className="ml-1 hidden h-4 w-4 flex-shrink-0 text-teal opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus:opacity-100 sm:block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>

        <span
          className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: "0 0 25px rgba(28, 195, 175, 0.2)",
          }}
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
