import { RouteObject } from 'react-router-dom';
import DashboardPage from './index.page';

export const dashboardIndexRoute: RouteObject = {
	index: true,
	path: '',
	Component: DashboardPage,
};
