import { AppstoreOutlined } from '@ant-design/icons'
const navigation_category = [
    {
        id: "categories",
        label: "Categories",
        icon: AppstoreOutlined,
        path: "/categories",
        children: [
            {
                id: "categories_recent",
                label: "Recent",
                icon: AppstoreOutlined,
                path: "/categories/recent",
            }
        ]
    }

]
export default navigation_category