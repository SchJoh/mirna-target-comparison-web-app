import { Home, BarChart, Info, AccountCircle } from '@material-ui/icons';
import HomePage from '../pages/HomePage';
import ResultPage from '../pages/ResultPage';
import AboutPage from '../pages/AboutPage';

const Routes = [
    {
        path: '/home',
        sidebarName: 'Home',
        navbarName: 'Home',
        icon: Home,
        component: HomePage,
    },
    {
        path: '/results',
        sidebarName: 'Result',
        navbarName: 'Result',
        icon: BarChart,
        component: ResultPage,
    },
    {
        path: '/about',
        sidebarName: 'About',
        navbarName: 'About',
        icon: Info,
        component: AboutPage,
    },
];

export default Routes;
