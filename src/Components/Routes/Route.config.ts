
import IRoute from "./Route.interface";
import Home from "../Presentational/Home/Home.component";

const routesConfig: Array<IRoute> = [
    {
        path: '/home',
        component: Home,
        icon: 'home',
        displayText: 'Home',
        float: 'right'
    }
]

export default routesConfig;
