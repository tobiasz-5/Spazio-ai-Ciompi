import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 bg-gradient-to-t from-black via-gray-800 to-transparent text-white py-8 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-glow">
        
        {/* Sinistra: Copyright */}
        <div className="md:w-1/3 p-2 flex justify-center items-center text-center">
          <p>
            &copy; {new Date().getFullYear()} Spazio... Ai Ciompi <br/> Tutti i diritti riservati.
          </p>
        </div>

        {/* Centro: Cookie & Privacy Policy */}
        <div className="md:w-1/3 p-2 flex justify-center items-center text-center">
          <Link href="/cookie-privacy" className="text-white hover:text-blue-300">
            Cookie & Privacy
          </Link>
        </div>

        {/* Destra: Crediti */}
        <div className="md:w-1/3 p-2 flex justify-center items-center text-center">
          <p>
            Code: T. Schettini <br/> Contents: T.N.T Media & Communication
          </p>
        </div>

      </div>
    </footer>
  );
}
