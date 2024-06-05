import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Schema } from "../../../amplify/data/resource"
import DeleteIcon from '@mui/icons-material/Delete';;
import Button from "@mui/material/Button";

type ComponentProps = {
  events: Array<Schema["Event"]["type"]>;
  deleteFunc: (id: string) => void;
};

const getPrivacyText = (
  settings: "PRIVATE" | "FRIENDS_ONLY" | "PUBLIC" | null | undefined,
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

// export const seedCouncil = (council, envConfig: EnvConfig): (() => Promise<void>) => {
//     return async (): Promise<void> => {
//       await updateCouncilOnBackend(envConfig, council);
//     };
//   };
  

const createRowContent = (
    event: Schema["Event"]["type"],
    deleteFunc: (id: string) => void,
) => {
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
      <TableCell>
        <>
            <Button 
                variant="outlined" 
                onClick={() => deleteFunc(event.id)}><DeleteIcon /></Button>
        </>
    </TableCell>
    </TableRow>
  );
};

const EventGrid: React.FC<ComponentProps> = ({ events, deleteFunc }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ 
            minWidth: 650, 
            border: '1px solid black',
            borderRadius: '8px' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Privacy Settings</TableCell>
            <TableCell>Location</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{events.map((evt) => createRowContent(evt, deleteFunc))}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventGrid;
