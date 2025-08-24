import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout("components/AppLayout.tsx", [
    index("routes/Products.tsx"),
    route("cart", "routes/Cart.tsx"),
  ]),
] satisfies RouteConfig;
