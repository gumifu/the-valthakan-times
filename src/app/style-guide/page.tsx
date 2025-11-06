import Navbar from "@/components/Navbar";

export default function StyleGuidePage() {
  const colorPalettes = [
    {
      name: "Blue Gray",
      prefix: "blue-gray",
      colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    {
      name: "Indigo",
      prefix: "indigo",
      colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    {
      name: "Yellow",
      prefix: "yellow",
      colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    {
      name: "Red",
      prefix: "red",
      colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    {
      name: "Green",
      prefix: "green",
      colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    {
      name: "Blue",
      prefix: "blue",
      colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    {
      name: "Pink",
      prefix: "pink",
      colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    {
      name: "Purple",
      prefix: "purple",
      colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  ];

  const textStyles = [
    {
      name: "Extra Small",
      class: "text-xs-figma",
      description: "12px / 400 / 16px line-height",
    },
    {
      name: "Small",
      class: "text-sm-figma",
      description: "14px / 400 / 20px line-height",
    },
    {
      name: "Base",
      class: "text-base-figma",
      description: "16px / 500 / 24px line-height",
    },
    {
      name: "Large",
      class: "text-lg-figma",
      description: "18px / 400 / 28px line-height",
    },
    {
      name: "Extra Large",
      class: "text-xl-figma",
      description: "20px / 400 / 28px line-height",
    },
  ];

  const headingStyles = [
    {
      category: "PC",
      name: "H1",
      class: "heading-pc-h1",
      description: "128px / Italianno / 400",
    },
    {
      category: "PC",
      name: "H2",
      class: "heading-pc-h2",
      description: "72px / Italianno / 400",
    },
    {
      category: "PC",
      name: "H3 (Eczar)",
      class: "heading-pc-h3-eczar",
      description: "24px / Eczar / 600",
    },
    {
      category: "PC",
      name: "B-Text",
      class: "heading-pc-b-text",
      description: "20px / Eczar / 600",
    },
    {
      category: "PC",
      name: "R-Text",
      class: "heading-pc-r-text",
      description: "20px / Eczar / 400",
    },
    {
      category: "Tablet",
      name: "H1",
      class: "heading-tablet-h1",
      description: "64px / Italianno / 400",
    },
    {
      category: "Tablet",
      name: "H2",
      class: "heading-tablet-h2",
      description: "48px / Italianno / 400",
    },
    {
      category: "Tablet",
      name: "R-Text",
      class: "heading-tablet-r-text",
      description: "20px / Eczar / 400",
    },
    {
      category: "SP",
      name: "H1",
      class: "heading-sp-h1",
      description: "40px / Italianno / 400",
    },
    {
      category: "SP",
      name: "H2",
      class: "heading-sp-h2",
      description: "32px / Italianno / 400",
    },
    {
      category: "SP",
      name: "H3 (Eczar)",
      class: "heading-sp-h3-eczar",
      description: "20px / Eczar / 600",
    },
    {
      category: "SP",
      name: "B-Text",
      class: "heading-sp-b-text",
      description: "16px / Eczar / 600",
    },
    {
      category: "SP",
      name: "R-Text",
      class: "heading-sp-r-text",
      description: "16px / Eczar / 400",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 px-4 md:px-8 pb-20 bg-blue-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <section className="mb-16 text-center">
            <h1 className="heading-pc-h1 mb-6 text-white">Style Guide</h1>
            <p className="text-xl-figma text-blue-gray-300 max-w-3xl mx-auto">
              Complete design system documentation for The Valthakan Times,
              including colors, typography, and utilities.
            </p>
          </section>

          {/* Color Palettes */}
          <section className="mb-20">
            <h2 className="heading-pc-h2 mb-8 text-white">Color Palettes</h2>
            <p className="text-base-figma text-blue-gray-300 mb-12">
              Use Tailwind utility classes like{" "}
              <code className="bg-blue-gray-800 px-2 py-1 rounded text-yellow-400">
                bg-blue-gray-900
              </code>{" "}
              or{" "}
              <code className="bg-blue-gray-800 px-2 py-1 rounded text-yellow-400">
                text-indigo-500
              </code>
              .
            </p>

            <div className="space-y-12">
              {colorPalettes.map((palette) => (
                <div
                  key={palette.name}
                  className="bg-blue-gray-800 rounded-lg p-6"
                >
                  <h3 className="heading-pc-h3-eczar mb-6 text-white">
                    {palette.name}
                  </h3>
                  <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
                    {palette.colors.map((shade) => (
                      <div key={shade} className="text-center">
                        <div
                          className="w-full h-20 rounded-lg mb-2 border border-blue-gray-700"
                          style={{
                            backgroundColor: `var(--color-${palette.prefix}-${shade})`,
                          }}
                        />
                        <p className="text-xs-figma text-blue-gray-300">
                          {shade}
                        </p>
                        <code className="text-xs-figma text-yellow-400 block mt-1 break-all">
                          {palette.prefix}-{shade}
                        </code>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Base Text Styles */}
          <section className="mb-20">
            <h2 className="heading-pc-h2 mb-8 text-white">Base Text Styles</h2>
            <p className="text-base-figma text-blue-gray-300 mb-12">
              Use utility classes like{" "}
              <code className="bg-blue-gray-800 px-2 py-1 rounded text-yellow-400">
                text-base-figma
              </code>{" "}
              for consistent typography.
            </p>

            <div className="bg-blue-gray-800 rounded-lg p-6 space-y-8">
              {textStyles.map((style) => (
                <div
                  key={style.class}
                  className="border-b border-blue-gray-700 pb-6 last:border-0"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="heading-pc-b-text text-white mb-2">
                        {style.name}
                      </h4>
                      <p className="text-sm-figma text-blue-gray-400">
                        {style.description}
                      </p>
                    </div>
                    <code className="bg-blue-gray-900 px-4 py-2 rounded text-yellow-400 text-sm-figma mt-4 md:mt-0">
                      {style.class}
                    </code>
                  </div>
                  <p className={style.class + " text-white"}>
                    The quick brown fox jumps over the lazy dog. 1234567890
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Heading Styles */}
          <section className="mb-20">
            <h2 className="heading-pc-h2 mb-8 text-white">Heading Styles</h2>
            <p className="text-base-figma text-blue-gray-300 mb-12">
              Responsive heading styles for PC, Tablet, and SP devices. Use
              classes like{" "}
              <code className="bg-blue-gray-800 px-2 py-1 rounded text-yellow-400">
                heading-pc-h1
              </code>
              .
            </p>

            <div className="bg-blue-gray-800 rounded-lg p-6 space-y-12">
              {["PC", "Tablet", "SP"].map((device) => (
                <div key={device}>
                  <h3 className="heading-pc-h3-eczar mb-6 text-white">
                    {device}
                  </h3>
                  <div className="space-y-8">
                    {headingStyles
                      .filter((h) => h.category === device)
                      .map((heading) => (
                        <div
                          key={heading.class}
                          className="border-b border-blue-gray-700 pb-6 last:border-0"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h4 className="heading-pc-b-text text-white mb-2">
                                {heading.name}
                              </h4>
                              <p className="text-sm-figma text-blue-gray-400">
                                {heading.description}
                              </p>
                            </div>
                            <code className="bg-blue-gray-900 px-4 py-2 rounded text-yellow-400 text-sm-figma mt-4 md:mt-0">
                              {heading.class}
                            </code>
                          </div>
                          <div className={heading.class + " text-white"}>
                            {heading.name} Example
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Utilities */}
          <section className="mb-20">
            <h2 className="heading-pc-h2 mb-8 text-white">Utilities</h2>

            <div className="bg-blue-gray-800 rounded-lg p-6 space-y-8">
              {/* Shadow */}
              <div className="border-b border-blue-gray-700 pb-6">
                <h3 className="heading-pc-h3-eczar mb-4 text-white">
                  Shadow Yellow
                </h3>
                <p className="text-base-figma text-blue-gray-300 mb-4">
                  Use{" "}
                  <code className="bg-blue-gray-900 px-2 py-1 rounded text-yellow-400">
                    shadow-yellow
                  </code>{" "}
                  for yellow glow effects.
                </p>
                <div className="bg-white rounded-base shadow-yellow p-8 text-center">
                  <p className="text-base-figma text-blue-gray-900">
                    Example with shadow-yellow
                  </p>
                </div>
              </div>

              {/* Border Radius */}
              <div>
                <h3 className="heading-pc-h3-eczar mb-4 text-white">
                  Border Radius
                </h3>
                <p className="text-base-figma text-blue-gray-300 mb-4">
                  Use{" "}
                  <code className="bg-blue-gray-900 px-2 py-1 rounded text-yellow-400">
                    rounded-base
                  </code>{" "}
                  for 12px border radius.
                </p>
                <div className="bg-indigo-500 rounded-base p-8 text-center">
                  <p className="text-base-figma text-white">
                    Example with rounded-base
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Usage Examples */}
          <section className="mb-20">
            <h2 className="heading-pc-h2 mb-8 text-white">Usage Examples</h2>

            <div className="bg-blue-gray-800 rounded-lg p-6 space-y-6">
              <div>
                <h3 className="heading-pc-h3-eczar mb-4 text-white">
                  Color Usage
                </h3>
                <pre className="bg-blue-gray-900 rounded p-4 overflow-x-auto">
                  <code className="text-sm-figma text-blue-gray-300">
                    {`<div className="bg-blue-gray-900 text-yellow-400">
  Content with blue-gray background and yellow text
</div>`}
                  </code>
                </pre>
              </div>

              <div>
                <h3 className="heading-pc-h3-eczar mb-4 text-white">
                  Typography Usage
                </h3>
                <pre className="bg-blue-gray-900 rounded p-4 overflow-x-auto">
                  <code className="text-sm-figma text-blue-gray-300">
                    {`<h1 className="heading-pc-h1">Main Title</h1>
<p className="text-base-figma">Body text</p>
<h2 className="heading-sp-h2">Mobile heading</h2>`}
                  </code>
                </pre>
              </div>

              <div>
                <h3 className="heading-pc-h3-eczar mb-4 text-white">
                  Combined Example
                </h3>
                <pre className="bg-blue-gray-900 rounded p-4 overflow-x-auto">
                  <code className="text-sm-figma text-blue-gray-300">
                    {`<div className="bg-indigo-900 rounded-base shadow-yellow p-8">
  <h1 className="heading-pc-h1 text-white mb-4">Title</h1>
  <p className="text-base-figma text-indigo-100">
    Content with styled text
  </p>
</div>`}
                  </code>
                </pre>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
