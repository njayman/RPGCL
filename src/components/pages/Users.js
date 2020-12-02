import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
export default function Users() {
    const history = useHistory();
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [queryUsers, setQueryUsers] = useState([])
    const [search, setSearch] = useState(false)
    const [query, setQuery] = useState('')
    const [errorMessage, setErrorMessage] = useState(null);
    const getUsers = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get('/api/admin/get/users')
            setUsers(data.users)
        } catch (error) {
            setErrorMessage(error.message)
        }
        setLoading(false)
    }

    const handleClick = e => {
        if (e.target.value === "add") {
            history.push('/adduser')
        } else if (e.target.value === "search") {
            if (search) {
                setQueryUsers(users)
            }
            setSearch(sr => !sr)
        } else if (e.target.value === "viewuser") {
            console.log(e.target.value, e.target.id)
            history.push(`/user/${e.target.id}`)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        setQueryUsers(users.filter(user => {
            return user.fullname.toLowerCase().includes(query.toLowerCase()) || !query;
        }))
    }, [query, users])
    if (loading)
        return <div>Loading . . .</div>
    else
        return (
            <Fragment>
                <div className="mainbody__nav">
                    <p className="mainbody__nav__title">Users {errorMessage ? <>| {errorMessage}</> : null}</p>
                    <div className="action">
                        <button className="action__button" value="add" onClick={handleClick}>Add User</button>
                        {search ? (
                            <>
                                <input placeholder="search user" className="action__input" onChange={e => setQuery(e.target.value)} />
                                <button className="action__button" value="search" onClick={handleClick}>Cancel</button>
                            </>
                        ) : <button className="action__button" value="search" onClick={handleClick}>Search</button>}
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th align="left">ID</th>
                            <th align="left">Full Name</th>
                            <th align="left">Email</th>
                            <th align="left">Phone</th>
                            <th align="left">Position</th>
                            <th align="left">Designation</th>
                            <th align="left">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {queryUsers.map((user, id) => (
                            <tr key={id} className="user__card">
                                <td>{id + 1}</td>
                                <td>{user.fullname}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.position}</td>
                                <td>{user.designation}</td>
                                <td><button value={user._id} className="action__button" onClick={e => history.push(`/user/${e.target.value}`, user)}>View Details</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
}