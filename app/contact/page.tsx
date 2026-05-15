export default function Contact() {
  return (
    <section className="px-8 md:px-12 pt-8 pb-24">
      <h1 className="font-serif text-7xl md:text-8xl font-normal leading-[1] mb-24">
        Contact
      </h1>

      <div className="max-w-3xl mb-16">
        <p className="text-sm text-ink/70 mb-1">Email</p>
        <a
          href="mailto:hello@yourdomain.com"
          className="text-lg border-b border-ink/30 pb-1 hover:opacity-60 inline-block"
        >
          hello@yourdomain.com
        </a>
      </div>

      <form className="max-w-3xl space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="block text-sm text-ink/70 mb-2">Name</span>
            <input
              type="text"
              name="name"
              className="w-full border-b border-ink/30 py-2 bg-transparent focus:outline-none focus:border-ink"
            />
          </label>
          <label className="block">
            <span className="block text-sm text-ink/70 mb-2">Email</span>
            <input
              type="email"
              name="email"
              className="w-full border-b border-ink/30 py-2 bg-transparent focus:outline-none focus:border-ink"
            />
          </label>
        </div>

        <label className="block">
          <span className="block text-sm text-ink/70 mb-2">Message</span>
          <textarea
            name="message"
            rows={5}
            className="w-full border-b border-ink/30 py-2 bg-transparent focus:outline-none focus:border-ink resize-none"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-ink text-paper py-4 text-sm hover:opacity-90 transition"
        >
          Contact
        </button>
      </form>
    </section>
  );
}
