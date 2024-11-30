export default function Footer() {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://do-it-now-project.vercel.app/"
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <img
            src="data:image/png;base64,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"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            DO IT NOW
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#about-us" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a
              href="https://github.com/fantasyfuerte/DO-IT-PROJECT"
              className="hover:underline me-4 md:me-6"
            >
              Github
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a
          href="https://do-it-now-project.vercel.app/"
          className="hover:underline"
        >
          Do-It-Project™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  );
}
