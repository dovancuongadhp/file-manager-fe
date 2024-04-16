import Home from "./index"
import DefaultTemplate from "@components/templates/DefaultTemplate"
import { HomeOutlined } from "@ant-design/icons"
const routes_home = [
    {
        id: "home",
        path: "/",
        label: "Home",
        icon: HomeOutlined,
        element: Home,
        template: DefaultTemplate
    }
]
export default routes_home