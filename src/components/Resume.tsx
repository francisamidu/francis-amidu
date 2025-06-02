import { A } from "@solidjs/router";
import ContactCTA from "./ContactCTA";
import FooterCTA from "./FooterCTA";
import PDFViewerComponent from "./PdfViewer";

const Resume = () => {
  return (
    <div class="min-h-screen bg-white">
      {/* Floating Navigation */}
      <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <div class="flex items-center gap-3">
            <img src="/logo-1.png" class="w-10 h-auto" />
            <span class="font-medium text-lg">Francis Amidu</span>
          </div>
          <nav class="flex items-center gap-8">
            <A
              href="/"
              class="text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </A>
            <A
              href="/projects"
              class="text-gray-600 hover:text-primary transition-colors"
            >
              Projects
            </A>
          </nav>
        </div>
      </header>

      {/* Page Content - Add padding-top to account for fixed header */}
      <div class="pt-20">
        <PDFViewerComponent pdfFilePath="/Francis-Amidu-Frontend-Developer-Resume.pdf" />

        {/* Contact CTA */}
        <ContactCTA />

        {/* Footer */}
        <FooterCTA />
      </div>
    </div>
  );
};

export default Resume;
