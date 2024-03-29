import { Card, CardBody } from "@nextui-org/react";
import React from "react";

const Footer = () => {
  return (
    <Card className="fixed bottom-0 left-0 w-full h-16 z-50">
      <CardBody className="bg-blue-200">
        <div className="mx-auto"> </div>
      </CardBody>
    </Card>
  );
};

export default Footer;
