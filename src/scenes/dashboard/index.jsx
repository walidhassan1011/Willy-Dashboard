import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex " justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="20px"
        gridAutoRows="140px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="431,225"
            subtitle="sales obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="32,441"
            subtitle="new clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="1,325,134"
            subtitle="traffic Inbound"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 8"
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt={"25px"}
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ color: colors.grey[100], fontWeight: "600" }}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                sx={{ color: colors.greenAccent[500], fontWeight: "bold" }}
              >
                $59,000
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{
                    fontSize: "26px",
                    color: colors.greenAccent[500],
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height={"230px"} mt={"-20px"}>
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          overflow={"auto"}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography
              color={colors.grey[100]}
              variant="h5"
              sx={{ fontWeight: "600" }}
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, index) => (
            <Box
              key={`${transaction.txId}-${index}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p={"15px"}
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  sx={{ fontWeight: "600" }}
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p={"5px 10px"}
                borderRadius={"4px"}
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography fontWeight={"600"} variant="h5">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{
                mt: "15px",
              }}
            >
              $48,000 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
        >
          <Typography
            fontWeight={"600"}
            variant="h5"
            sx={{
              p: "30px 30px 0 30px",
            }}
          >
            Sales Quantity
          </Typography>
          <Box height={"250px"}>
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          p={"30px"}
        >
          <Typography
            fontWeight={"600"}
            variant="h5"
            sx={{
              mb: "15px",
            }}
          >
            Geography Based Traffic
          </Typography>
          <Box height={"250px"} mt="-40px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
