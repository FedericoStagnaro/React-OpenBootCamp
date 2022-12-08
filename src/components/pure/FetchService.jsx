import React, { useState, useEffect } from 'react'
import { getAllUsers, getAllPagedUsers } from '../../services/fetchService'

export default function FetchService() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [totalUsers, setTotalUsers] = useState(0)
    const [usersPerPage, setUsersPerPage] = useState(0)


    useEffect(() => {
        obtainUsers()
    }, [])

    const obtainUsers = () => {
        getAllUsers()
            .then(response => {
                console.log('All users:', response.data)
                setUsers(response.data)
                setPage(response.page)
                setTotalPages(response.total_pages)
                setTotalUsers(response.total)
                setUsersPerPage(response.per_page)
            })
            .catch(error => {
                console.log('Error:', error)
            })
            .finally(() => {
                console.log('Ended ontain users...')
                console.table(users)
            })
    }

    const obtainPageUsers = (page) => {
        console.log('ON PAGES...')
        getAllPagedUsers(page)
            .then(response => {
                console.log('All users:', response.data)
                setUsers(response.data)
                setPage(response.page)
                setTotalPages(response.total_pages)
                setTotalUsers(response.total)
                setUsersPerPage(response.per_page)
            })
            .catch(error => {
                console.log('Error:', error)
            })
            .finally(() => {
                console.log('Ended ontain users...')
                console.table(users)
            })
    }

    const renderButtonsPage = () => {
        if (totalPages > 1) {
            return Array.from(
                Array(totalPages), 
                (data,index) => <button key={index + 1} onClick={() => obtainPageUsers(index + 1)}>{index + 1}</button>, 
                null)
        }
    }

    return (
        <div>
            <h2>FetchService</h2>
            <div>
                <h3>Users list</h3>
                <ul>
                    {users.map((user) => <li key={user.id}>{user.first_name}</li>)}
                </ul>
            </div>
            <div>
                <h4>Showing {usersPerPage} users per page  of {totalUsers} </h4>
                <nav >
                    <span className='mx-3'>On page {page}</span>

                    {renderButtonsPage()}
                    {/* <button onClick={() => obtainPageUsers(1)}>1</button>
                    <button onClick={() => obtainPageUsers(2)}>2</button>
                    <button onClick={() => obtainPageUsers(3)}>3</button> */}

                    <span className='mx-3'> Total pages : {totalPages}</span>
                </nav>




            </div>
        </div>
    )
}
