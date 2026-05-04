import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kizwa Valongo — Construção, Fiscalização e Serviços | Kuito, Bié" },
      {
        name: "description",
        content:
          "Kizwa Valongo: construção civil, fiscalização de obras, transportes, instalações elétricas e AVAC em Angola. Sede no Kuito, Bié.",
      },
      { name: "author", content: "Kizwa Valongo" },
      { property: "og:title", content: "Kizwa Valongo — Construção, Fiscalização e Serviços | Kuito, Bié" },
      {
        property: "og:description",
        content:
          "Empresa angolana de construção civil, fiscalização e infraestrutura. Qualidade, rigor e compromisso.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kizwa Valongo — Construção, Fiscalização e Serviços | Kuito, Bié" },
      { name: "description", content: "Kizwa Valongo Digital Showcase is a modern, responsive website for Kizwa Valongo." },
      { property: "og:description", content: "Kizwa Valongo Digital Showcase is a modern, responsive website for Kizwa Valongo." },
      { name: "twitter:description", content: "Kizwa Valongo Digital Showcase is a modern, responsive website for Kizwa Valongo." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/9yFSWZOJ49hrabrg0EA3E3zpvfu2/social-images/social-1777892970090-KIZWA_VALONGO-_LOGOTIPO_1.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/9yFSWZOJ49hrabrg0EA3E3zpvfu2/social-images/social-1777892970090-KIZWA_VALONGO-_LOGOTIPO_1.webp" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <HeadContent />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
