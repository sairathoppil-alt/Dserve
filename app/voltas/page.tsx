import Navbar from "@/components/layout/Navbar";

export default function VoltasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-32">

        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-[0.2em] text-red-700 font-semibold mb-6">
            Voltas Solutions
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-8 leading-tight">
            HVAC & Engineering Services
          </h1>

          <p className="text-lg text-zinc-600 leading-relaxed">
            End-to-end Voltas engineering solutions including HVAC systems,
            climate control infrastructure, electromechanical services,
            industrial cooling, and integrated engineering support.
          </p>

        </div>

      </section>
    </main>
  );
}