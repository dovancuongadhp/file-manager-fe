import { AppstoreOutlined } from '@ant-design/icons'
const navigation_category = [
    {
        id: "categories",
        label: "Categories",
        icon: AppstoreOutlined,
        children: [
            {
                id: "categories_list",
                label: "Categories List",
                path: "/categories",
            },
            {
                id: "categories_recent",
                label: "Recent",
                path: "/categories/recent",
            }
        ]
    }

]
export default navigation_category