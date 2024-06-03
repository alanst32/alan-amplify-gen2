import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Schema } from "../../amplify/data/resource";

type ComponentProps = {
  events: Array<Schema["Todo"]["type"]>;
};

const getPrivacyText = (
  settings: "PRIVATE" | "FRIENDS_ONLY" | "PUBLIC" | null | undefined
) => {
  if (settings === "PRIVATE") {
    return "Private";
  } else if (settings === "FRIENDS_ONLY") {
    return "Friends only";
  } else if (settings === "PUBLIC") {
    return "Public";
  } else {
    return "";
  }
};

const createRowContent = (event: Schema["Event"]["type"]) => {
  return (
    <TableRow
      key={event.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {event.name}
      </TableCell>
      <TableCell>{event.category}</TableCell>
      <TableCell>{event.datetime}</TableCell>
      <TableCell>{getPrivacyText(event.privacySetting)}</TableCell>
      <TableCell>{event.address?.state}</TableCell>
    </TableRow>
  );
};

const EventGrid: React.FC<ComponentProps> = ({ events }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Date)</TableCell>
            <TableCell>Privacy Settings</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{events.map((evt) => createRowContent(evt))}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventGrid;
