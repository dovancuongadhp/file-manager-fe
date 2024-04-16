import DefaultTemplate from "@components/templates/DefaultTemplate"
import Categories from "./index"
import CategoryRecent from "./recent"
const routes_categories = [
    {
        id: "categories",
        path: "/categories",
        element: Categories,
        template: DefaultTemplate,
       
    },
    {
        id: "categories_recent",
        path: "/categories/recent",
        element: CategoryRecent,
        template: DefaultTemplate,
       
    }
]
export default routes_categories