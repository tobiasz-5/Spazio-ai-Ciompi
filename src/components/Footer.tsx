export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 bg-gradient-to-t from-black via-gray-800 to-transparent text-white py-8 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        
        {/* Sinistra: Copyright */}
        <div className="md:w-1/3 text-left">
          <p>
            &copy; {new Date().getFullYear()} Spazio... Ai Ciompi | Tutti i diritti riservati.
          </p>
        </div>

        {/* Centro: Cookie & Privacy Policy */}
        <div className="md:w-1/3 text-center">
          <a href="#">
            Cookie & Privacy
          </a>
        </div>

        {/* Destra: Crediti */}
        <div className="md:w-1/3 text-right">
          <p>
            Code & Design: T. Schettini | Content: T.N.T Media & Communication
          </p>
        </div>

      </div>
    </footer>
  );
}
