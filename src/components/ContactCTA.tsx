import { A } from "@solidjs/router";
import { Mail } from "lucide-solid";

const ContactCTA = () => {
  return (
    <section class="container mx-auto px-4 py-16 border-t border-gray-100">
      <div class="bg-gray-50 rounded-xl p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h2 class="text-slate-800 text-3xl font-bold mb-4">
            Have a project in mind?
          </h2>
          <p class="text-gray-600 max-w-xl">
            I'm always open to discussing new projects and challenges. Let's
            create something amazing together.
          </p>
        </div>
        <A
          href="/contact"
          class="bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap text-center md:text-left flex items-center"
        >
          <Mail class="mr-2" size={20} />
          Get in Touch
        </A>
      </div>
    </section>
  );
};

export default ContactCTA;
