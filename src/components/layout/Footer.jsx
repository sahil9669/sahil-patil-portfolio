import SocialLinks from "../ui/SocialLinks";

function Footer() {
  return (
    <footer className="border-t border-[#e1e4e8] bg-white">
      <div
        className="
          mx-auto flex max-w-7xl
          flex-col items-center justify-between
          gap-5 px-6 py-8
          text-sm
          sm:flex-row
          lg:px-12
        "
      >
        {/* Copyright */}
        <p className="text-[#6b7280]">
          © {new Date().getFullYear()} Sahil Patil. All rights reserved.
        </p>

        {/* Social Links */}
        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;