"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="shadow-lg w-full h-fit colored text-white mx-auto ">
        <CardHeader className="w-fit mx-auto">Sign Up</CardHeader>
        <CardBody className="w-fit mx-auto">
          <Input
            className="mb-4"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            className="mb-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="flat" className="text-white" type="submit">
            Sign up
          </Button>
        </CardBody>
        <CardFooter className="w-fit mx-auto">
          Already a member?
          <Link href={"/login"}>
            <span className="ml-2">Login here</span>
          </Link>
        </CardFooter>
      </Card>
    </form>
  );
};

export default SignUp;
