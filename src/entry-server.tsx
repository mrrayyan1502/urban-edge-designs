import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { getRouteMeta } from "./lib/routeMeta";

export { getRouteMeta };

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  return { html };
}
