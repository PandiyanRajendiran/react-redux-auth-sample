import { HomePage } from './app/pages/HomePage/Loadable';
import { LoginPage } from './app/pages/Login/Loadable';
import { IPLTablePage } from './app/pages/IPLTable/Loadable';
import { JSONContainerPage } from './app/pages/JSONContainer/Loadable';
import { MyAccountPage } from './app/pages/MyAccount/Loadable';

export const Pages = [
  {
    path: '/',
    displaText: 'Home',
    accessible: 'public',
    component: HomePage,
    disabled: true,
  },
  {
    path: '/my-account',
    displaText: 'My Account',
    accessible: 'private',
    component: MyAccountPage,
  },
  {
    path: '/ipl-schedule',
    displaText: 'IPL Schedule',
    accessible: 'public',
    component: IPLTablePage,
  },
  {
    path: '/json-container',
    accessible: 'public',
    displaText: 'JSON Container',
    component: JSONContainerPage,
  },
  {
    path: '/login',
    accessible: 'public',
    displaText: 'Login',
    component: LoginPage,
  },
];

export const IPLSchedule = [
  { matchNo: 31, team: 'MI vs CSK	', date: '19/09/2021	', time: '7:30PM' },
  { matchNo: 32, team: 'KKR vs RCB	', date: '20/09/2021	', time: '7:30PM' },
  {
    matchNo: 33,
    team: 'Punjab Kings vs RR	',
    date: '21/09/2021	',
    time: '7:30PM',
  },
  {
    matchNo: 34,
    team: 'DC vs Sunrisers Hyderabad	',
    date: '22/09/2021	',
    time: '7:30PM',
  },
  { matchNo: 35, team: 'MI vs KKR	', date: '23/09/2021	', time: '7:30PM' },
  { matchNo: 36, team: 'RCB vs CSK	', date: '24/09/2021	', time: '7:30PM' },
  { matchNo: 37, team: 'DC vs RR	', date: '25/09/2021	', time: '3:30PM' },
  {
    matchNo: 38,
    team: 'Sunrisers Hyderabad vs Punjab Kings	',
    date: '25/09/2021	',
    time: '7:30PM',
  },
  { matchNo: 39, team: 'CSK vs KKR	', date: '26/09/2021	', time: '3:30PM' },
  { matchNo: 40, team: 'RCB vs MI	', date: '26/09/2021	', time: '7:30PM' },
  {
    matchNo: 41,
    team: 'Sunrisers Hyderabad vs RR	',
    date: '27/09/2021	',
    time: '7:30PM',
  },
  { matchNo: 42, team: 'KKR vs DC	', date: '28/09/2021	', time: '3:30PM' },
  {
    matchNo: 43,
    team: 'MI vs Punjab Kings	',
    date: '28/09/2021	',
    time: '7:30PM',
  },
  { matchNo: 44, team: 'RR vs RCB	', date: '29/09/2021	', time: '7:30PM' },
  {
    matchNo: 45,
    team: 'Sunrisers Hyderabad vs CSK	',
    date: '30/09/2021	',
    time: '7:30PM',
  },
  {
    matchNo: 46,
    team: 'KKR vs Punjab Kings	',
    date: '1/10/2021	',
    time: '7:30PM',
  },
  { matchNo: 47, team: 'MI vs DC	', date: '2/10/2021	', time: '3:30PM' },
  { matchNo: 48, team: 'RR vs CSK	', date: '2/10/2021	', time: '7:30PM' },
  {
    matchNo: 49,
    team: 'RCB vs Punjab Kings	',
    date: '3/10/2021	',
    time: '3:30PM',
  },
  {
    matchNo: 50,
    team: 'KKR vs Sunrisers Hyderabad	',
    date: '3/10/2021	',
    time: '7:30PM',
  },
  { matchNo: 51, team: 'DC vs CSK	', date: '4/10/2021	', time: '7:30PM' },
  { matchNo: 52, team: 'RR vs MI	5/10/2021	', date: '5/10/2021', time: '7:30PM' },
  {
    matchNo: 53,
    team: 'RCB vs Sunrisers Hyderabad	',
    date: '6/10/2021	',
    time: '7:30PM',
  },
  {
    matchNo: 54,
    team: 'CSK vs Punjab Kings	',
    date: '7/10/2021	',
    time: '3:30PM',
  },
  { matchNo: 55, team: 'KKR vs RR	', date: '7/10/2021	', time: '7:30PM' },
  {
    matchNo: 56,
    team: 'Sunrisers Hyderabad vs MI	',
    date: '8/10/2021	',
    time: '3:30PM',
  },
  { matchNo: 57, team: 'RCB vs DC	', date: '8/10/2021	', time: '7:30PM' },
  { matchNo: 58, team: 'Qualifier 1	', date: '10/10/2021	', time: '7:30PM' },
  { matchNo: 59, team: 'Eliminator	', date: '11/10/2021	', time: '7:30PM' },
  { matchNo: 60, team: 'Qualifier 2	', date: '13/10/2021	', time: '7:30PM' },
  { matchNo: 61, team: 'Final	', date: '15/10/2021	', time: '7:30PM' },
];
