import { useEffect, useState } from "react";
import { Container } from "./styled";

import { clientSchema } from "../utils";
import EventGrid from "./Event-Grid";
import { Schema } from "../../amplify/data/resource";

const EventLanding: React.FC = () => {
  const [events, setEvents] = useState<Array<Schema["Event"]["type"]>>([]);

  useEffect(() => {
    clientSchema.models.Event.observeQuery().subscribe({
      next: (data) => setEvents([...data.items]),
    });
  }, []);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * (1 - 100 + 1)) + 1;
  };

  function createEvent() {
    const randomNumber = getRandomNumber();

    clientSchema.models.Event.create({
      name: `Evet name-${randomNumber}`,
      category: randomNumber % 2 === 0 ? "Concert" : "Play",
      datetime: randomNumber % 2 === 0 ? "10/01/2024" : "15/02/2024",
      privacySetting: randomNumber % 2 === 0 ? "PRIVATE" : "FRIENDS_ONLY",
      address: {
        address: "Street",
        state: randomNumber % 2 === 0 ? "VIC" : "NSW",
        country: "Australia",
        postcode: randomNumber % 2 === 0 ? "3000" : "2000",
      },
    });
  }

  //   function deleteEvent(id: string) {
  //     client.models.Event.delete({ id });
  //   }

  return (
    <Container>
      <button onClick={createEvent}>+ new</button>
      <>
        <EventGrid events={events}></EventGrid>
      </>
    </Container>
  );
};

export default EventLanding;
