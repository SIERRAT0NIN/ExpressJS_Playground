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
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/api/login", {
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
    <>
      <form onSubmit={handleSubmit}>
        <Card className="shadow-lg w-full h-fit colored text-white mx-auto mt-10">
          <CardHeader className="w-fit mx-auto">Login</CardHeader>
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
              Login
            </Button>
          </CardBody>
          <CardFooter className="w-fit mx-auto">
            Not a member?
            <Link href={"/signup"}>
              <span className="ml-2">Sign up!</span>
            </Link>
          </CardFooter>
        </Card>
        <div className="w-full flex justify-center my-6">
          <Link href={"/"}>
            <Button className="rounded-full" variant="ghost" color="danger">
              Go back
            </Button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
