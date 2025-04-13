function Footer() {
  return (
    <footer className="bg-white shadow-inner py-4 w-full mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">© {new Date().getFullYear()} Gaming News. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;