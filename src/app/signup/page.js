'use client'

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

import { register} from "../../../api/auth"

import { useState } from 'react'
import {useMutation} from "@tanstack/react-query"
import { useRouter } from 'next/navigation'


export default function Signingup() {
  const [emails, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [referralC, setRef] = useState("");
  const [passwords, setPassword] = useState("");
  const router = useRouter();

  const regMutation = useMutation({
    mutationFn: async (data) => {
      console.log(data)
      const res =  await register(data)
      return res

    },
    onSuccess: (data, variables, context) => {
      console.log(data);
      router.push("/login");
    },
    onError:(err, variables, context) => {
      
      console.log(JSON.stringify(err));

    },
  });

  const handleRegSubmit = (e) => {
    regMutation.mutate({
      name : name,
      email: emails,
      password: passwords,
      referralC : referralC,
      role : role

    });
  };

  return (
    <div className="flex justify-center items-center">
      <Card w={"40%"} className="max-w-1/2">
        <CardHeader className="">
          <h3 className="text-2xl">Login</h3>
        </CardHeader>
        <hr></hr>
        <CardBody>
        <FormControl className="mb-5">
            <FormLabel> Name </FormLabel>
            <Input
              type="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <FormHelperText>{name}</FormHelperText>
          </FormControl>
          <FormControl className="mb-5">
            <FormLabel> Email </FormLabel>
            <Input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText>{emails}</FormHelperText>
          </FormControl>
          <FormControl className="mb-5">
            <FormLabel>Passwords</FormLabel>
            <Input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText></FormHelperText>
          </FormControl>
          <FormControl className="mb-5">
            <FormLabel> Referral Code </FormLabel>
            <Input
              type="referralC"
              name="referralC"
              onChange={(e) => setRef(e.target.value)}
            />
            <FormHelperText>{referralC}</FormHelperText>
          </FormControl>
          <FormControl className="mb-5">
            <FormLabel> Role</FormLabel>
            <Input
              type="referralC"
              name="referralC"
              onChange={(e) => setRole(e.target.value)}
            />
            <FormHelperText>{"Please Type in user for user privilage or admin for event organizer"}</FormHelperText>
          </FormControl>
          <FormControl className="text-center">
            <Button
              type="button"
              colorScheme="blue"
              className="w-full"
              onClick={() => handleRegSubmit()}
            >
              {" "}
              Sign up{" "}
            </Button>
          </FormControl>
        </CardBody>
      </Card>
    </div>
  );
}