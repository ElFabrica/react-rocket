import useUsers from "../hooks/user-users";


export default function UsersList() {
    const { users, isLoadingUsers } = useUsers()

    if (isLoadingUsers) {
        return <div>Carregando os usuários...</div>
    }

    return (
        <ul>
            {
                users.map((user) => <li key={user.id}>Id do cidadão: {user.id} / Nome do cidadão: {user.name} </li>)
            }
        </ul>
    )
}