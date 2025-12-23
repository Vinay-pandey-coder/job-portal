import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";

const AppliedJob = () => {
  return (
    <>
      <div>
        <Table>
          <TableCaption>Recent Applied Jobs</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Job Title</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className={"text-right"}>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1].map((item, index) => (
              <TableRow key={index}>
                <TableCell>23-12-2025</TableCell>
                <TableCell>MERN Developer</TableCell>
                <TableCell>Microsoft</TableCell>
                <TableCell className={"text-right"}><Badge variant={'outline'}>Selected</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default AppliedJob;
