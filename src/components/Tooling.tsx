import nextLogo from "@/assets/nextjs-original.svg";
import reactLogo from "@/assets/react-original.svg";
import tailwindLogo from "@/assets/tailwindcss-original.svg";
import typescriptLogo from "@/assets/typescript-original.svg";

interface Tool {
  name: string;
  icon: string;
}

export function Tooling() {
  const tools: Tool[] = [
    {
      name: "React",
      icon: reactLogo,
    },
    {
      name: "Next.js",
      icon: nextLogo,
    },
    {
      name: "TypeScript",
      icon: typescriptLogo,
    },
    {
      name: "Tailwind CSS",
      icon: tailwindLogo,
    },
  ];

  return (
    <div class="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border mb-8">
      <h3 class="text-xl font-medium mb-4">Frontend Tooling</h3>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <div class="text-center">
            <img
              src={tool.icon}
              alt={tool.name}
              class="w-12 h-12 mx-auto mb-2"
            />
            <p class="text-sm font-medium">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
