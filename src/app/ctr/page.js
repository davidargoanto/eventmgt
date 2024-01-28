"use client"
import {
    Flex,
    Box,
    Card,
    CardHeader,
    CardBody,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    FormHelperText
  } from '@chakra-ui/react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
  
import {useQuery, useIsFetching} from "@tanstack/react-query"
import { getctr } from '../../../api/profile';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  );
export default function stats (){
    const myData =[]
    const {
      data = myData,
      isError,
      isSuccess,
      isLoading,
    } = useQuery({
      queryKey: ["profile"],
      queryFn:getctr,
    });
    if (isLoading) {

      return <h3> Loading ... </h3>;
    }
    if (isSuccess) {
      console.log(data)
      var year = data.year.map(function (el) { return el.year; })
      var clicky = data.year.map(function (el) { return el._sum.clicks; });
      var boughtsy = data.year.map(function (el) { return el._sum.bought; });

      var month = data.month.map(function (el) { return el.yearmonth; })
      var clickm = data.month.map(function (el) { return el._sum.clicks; });
      var boughtsm = data.month.map(function (el) { return el._sum.bought; });

      var day = data.day.map(function (el) { return el.ymd; })
      var clickd = data.day.map(function (el) { return el._sum.clicks; });
      var boughtsd = data.day.map(function (el) { return el._sum.bought; });


        return (
          <div>
            <Box w ={"50vw"}>
            <Box>Data by Year</Box>
            <Line
              data={{
                labels: year,
                datasets: [
                  {
                    data: clicky,
                    backgroundColor: "black",
                  },
                  {
                    data: boughtsy,
                    backgroundColor: "blue"
                  },
                ],
              }}
            />
            <Box>Data by Month</Box>
            <Line
              data={{
                labels: month,
                datasets: [
                  {
                    data: clickm,
                    backgroundColor: "black",
                  },
                  {
                    data: boughtsm,
                    backgroundColor: "blue"
                  },
                ],
              }}
            />
            <Box>Data by Day</Box>
            <Line
              data={{
                labels: day,
                datasets: [
                  {
                    data: clickd,
                    backgroundColor: "black",
                  },
                  {
                    data: boughtsd,
                    backgroundColor: "blue"
                  },
                ],
              }}
            />
            </Box>
          </div>
          
          
        );
      

      
    }
    if (isError) {

      return <h3> Data does not exist </h3>;
    }

  }