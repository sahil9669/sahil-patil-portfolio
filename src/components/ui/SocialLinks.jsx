function SocialLinks() {
  return (
    <div className="flex gap-3.5">
      {/* GitHub */}
      <a
        href="https://github.com/sahil9669"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="
          flex h-[42px] w-[42px]
          items-center justify-center
          rounded-[11px]
          border border-[#e1e4e8]
          bg-white
          text-[#5f636d]
          shadow-sm
          transition-all duration-300
          hover:-translate-y-0.5
          hover:border-[#7c5cfc]
          hover:text-[#7c5cfc]
          hover:shadow-[0_8px_20px_-8px_rgba(124,92,252,0.25)]
        "
      >
        <svg
          viewBox="0 0 24 24"
          width="19"
          height="19"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.92c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.33 4.81-4.56 5.07.36.32.68.95.68 1.91v1.42c0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/sahil-patil-b3125a260/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="
          flex h-[42px] w-[42px]
          items-center justify-center
          rounded-[11px]
          border border-[#e1e4e8]
          bg-white
          text-[#5f636d]
          shadow-sm
          transition-all duration-300
          hover:-translate-y-0.5
          hover:border-[#7c5cfc]
          hover:text-[#7c5cfc]
          hover:shadow-[0_8px_20px_-8px_rgba(124,92,252,0.25)]
        "
      >
        <svg
          viewBox="0 0 24 24"
          width="19"
          height="19"
          fill="currentColor"
        >
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46Z" />
        </svg>
      </a>

      {/* Email */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=sahiilpatil9889@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        className="
          flex h-[42px] w-[42px]
          items-center justify-center
          rounded-[11px]
          border border-[#e1e4e8]
          bg-white
          text-[#5f636d]
          shadow-sm
          transition-all duration-300
          hover:-translate-y-0.5
          hover:border-[#7c5cfc]
          hover:text-[#7c5cfc]
          hover:shadow-[0_8px_20px_-8px_rgba(124,92,252,0.25)]
        "
      >
        <svg
          viewBox="0 0 24 24"
          width="19"
          height="19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </a>
    </div>
  );
}

export default SocialLinks;