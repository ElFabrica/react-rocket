import UserInfo from "./components/user-info";
import UserNewForm from "./components/user-new-form";
import UserList from "./components/users.list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();
export default function App() {


  return <QueryClientProvider client={queryClient}>
    <UserInfo />
    <hr />
    <hr />
    <hr />

    <UserNewForm />

    <hr />
    <hr />
    <hr />
    <UserList />
  </QueryClientProvider>
}