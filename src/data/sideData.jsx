import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
const sideMenuData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <HomeOutlinedIcon />,
    to: "/",
  },
  {
    id: 2,
    title: "Manage Team",
    icon: <PeopleOutlinedIcon />,
    to: "/team",
  },
  {
    id: 3,
    title: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    to: "/contacts",
  },
  {
    id: 4,
    title: "Invoices Balance",
    icon: <ReceiptOutlinedIcon />,
    to: "/invoices",
  },
  {
    id: 5,
    title: "Profile Form",
    icon: <PersonOutlinedIcon />,
    to: "/form",
  },
  {
    id: 6,
    title: "Calendar",
    icon: <CalendarTodayOutlinedIcon />,
    to: "/calendar",
  },
  {
    id: 7,
    title: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    to: "/faq",
  },
  {
    id: 8,
    title: "Bar Chart",
    icon: <BarChartOutlinedIcon />,
    to: "/bar",
  },
  {
    id: 9,
    title: "Pie Chart",
    icon: <PieChartOutlineOutlinedIcon />,
    to: "/pie",
  },
  {
    id: 10,
    title: "Line Chart",
    icon: <TimelineOutlinedIcon />,
    to: "/line",
  },
  {
    id: 11,
    title: "Geography Chart",
    icon: <MapOutlinedIcon />,
    to: "/geography",
  },
];
export default sideMenuData;
