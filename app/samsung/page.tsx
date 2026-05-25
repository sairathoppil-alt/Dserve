import Navbar from "@/components/layout/Navbar";

export default function SamsungPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-32">

        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-[0.2em] text-blue-700 font-semibold mb-6">
            Samsung Solutions
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-8 leading-tight">
            Enterprise Technology Infrastructure
          </h1>

          <p className="text-lg text-zinc-600 leading-relaxed">
            Professional Samsung enterprise solutions including commercial displays,
            digital signage, enterprise mobility, networking, and integrated
            infrastructure systems for commercial and industrial environments.
          </p>

        </div>

      </section>
    </main>
  );
}