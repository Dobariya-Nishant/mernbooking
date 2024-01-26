import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <div>Home</div>
      </Layout>
    ),
  },
  {
    path: "/sign-up",
  },
]);

export { browserRouter };
