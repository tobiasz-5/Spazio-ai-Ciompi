// src/components/DoveSiamoSection.tsx

export default function DoveSiamoSection() {
    return (
      <section id="dove-siamo" className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">Dove Siamo</h2>
          <iframe
            className="w-full h-64 max-w-lg mx-auto rounded-lg shadow-md mt-4"
            src="https://www.google.com/maps/embed?pb=..."
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    );
  }
  