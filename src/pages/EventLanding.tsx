import { useEffect, useState } from 'react';
import { Container, Divider } from './styled';

import { clientSchema } from '../utils';

import { Schema } from '../../amplify/data/resource';
import EventGrid from '../custom-components/event-grid';
import EventForm from '../custom-components/event-form';

const EventLanding: React.FC = () => {
  const [events, setEvents] = useState<Array<Schema['Event']['type']>>([]);

  useEffect(() => {
    clientSchema.models.Event.observeQuery().subscribe({
      next: data => setEvents([...data.items])
    });
  }, []);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * (1 - 100 + 1)) + 1;
  };

  function createRandomEvent() {
    const randomNumber = getRandomNumber();

    clientSchema.models.Event.create({
      name: `Evet name-${randomNumber}`,
      category: randomNumber % 2 === 0 ? 'Concert' : 'Play',
      datetime: randomNumber % 2 === 0 ? '10/01/2024' : '15/02/2024',
      privacySetting: randomNumber % 2 === 0 ? 'PRIVATE' : 'FRIENDS_ONLY',
      address: {
        address: 'Street',
        state: randomNumber % 2 === 0 ? 'VIC' : 'NSW',
        country: 'Australia',
        postcode: randomNumber % 2 === 0 ? '3000' : '2000'
      }
    });
  }

  function deleteEvent(id: string) {
    clientSchema.models.Event.delete({ id });
  }

  return (
    <Container>
      <div>
        <EventForm />
      </div>
      <Divider></Divider>
      <button onClick={createRandomEvent}>Create random event</button>
      <Divider></Divider>
      <EventGrid events={events} deleteFunc={deleteEvent}></EventGrid>
    </Container>
  );
};

export default EventLanding;
