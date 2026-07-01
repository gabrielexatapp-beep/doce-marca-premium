import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O endereço que você procura não existe ou foi movido.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Voltar ao início</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Algo deu errado
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Tente recarregar a página em instantes.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Doceria da Rebeka | Pudins e Brigadeirões no Atacado" },
      { name: "description", content: "Conheça a Doceria da Rebeka, maior produtora de pudim do Brasil. Pudim 120g e Brigadeirão 80g para mercados, redes e distribuidores." },
      { name: "author", content: "Doceria da Rebeka" },
      { property: "og:title", content: "Doceria da Rebeka | Pudins e Brigadeirões no Atacado" },
      { property: "og:description", content: "Conheça a Doceria da Rebeka, maior produtora de pudim do Brasil. Pudim 120g e Brigadeirão 80g para mercados, redes e distribuidores." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Doceria da Rebeka" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#e91e63" },
      { name: "twitter:title", content: "Doceria da Rebeka | Pudins e Brigadeirões no Atacado" },
      { name: "twitter:description", content: "Conheça a Doceria da Rebeka, maior produtora de pudim do Brasil. Pudim 120g e Brigadeirão 80g para mercados, redes e distribuidores." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3effc367-5592-45cc-90b2-d902b22ea587/id-preview-3f0deabf--d166c8f4-2615-40cb-bc41-f3e4a37b7d94.lovable.app-1782919116625.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3effc367-5592-45cc-90b2-d902b22ea587/id-preview-3f0deabf--d166c8f4-2615-40cb-bc41-f3e4a37b7d94.lovable.app-1782919116625.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
