function Footer() {
  return (
    <footer class="p-4 bg-slate-500 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 w-screen snap-center">
      <span class="text-lg text-gray-300 sm:text-center">Thank you for viewing!</span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-300 sm:mt-0">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Work
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Contact
          </a>
        </li>
        <li>
          <a href="#" class="hover:underline">
            Links
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
