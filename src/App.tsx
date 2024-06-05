import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import EventLanding from './pages/EventLanding';
import Header from './custom-components/header';
import Footer from './custom-components/footer';
import { signOut } from 'aws-amplify/auth';

// const client = generateClient<Schema>();

function App() {
  // const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }

  // function deleteTodo(id: string) {
  //   client.models.Todo.delete({ id });
  // }

  async function handleSignOut() {
    await signOut();
  }

  return (
    <Authenticator>
      <main>
        <Header></Header>
        <EventLanding></EventLanding>
        <Footer signOut={handleSignOut}></Footer>
        {/* <button onClick={createTodo}>+ new</button>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
                {todo.content}
              </li>
            ))}
          </ul> */}
      </main>
    </Authenticator>
  );
}

export default App;
