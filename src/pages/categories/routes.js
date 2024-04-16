import DefaultTemplate from "@components/templates/DefaultTemplate"
import Categories from "./index"
import {AppstoreOutlined } from '@ant-design/icons'
const routes_category = [
    {
        id: "categories",
        label: "Categories",
        icon: AppstoreOutlined,
        path: "/categories",
        element: Categories,
        template: DefaultTemplate
    }
]
export default routes_category