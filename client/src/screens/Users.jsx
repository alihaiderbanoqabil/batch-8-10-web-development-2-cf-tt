import React, { useCallback, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Table } from 'antd'
import { Link } from 'react-router-dom'
import { constants } from '../constants'

// const columns = [
//     {
//         title: 'ID',
//         dataIndex: 'id',
//         key: 'id',
//         // render: (record, index, indent, expanded) => {
//         //     console.log(record, index, indent, expanded);
//         // }
//     },
//     {
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//         // render: (record, index, indent, expanded) => {
//         //     console.log(record, index, indent, expanded);
//         // }
//     },
//     {
//         title: 'Username',
//         dataIndex: 'username',
//         key: 'username',
//     },
//     {
//         title: 'Email',
//         dataIndex: 'email',
//         key: 'email',
//     },
//     {
//         title: 'Phone',
//         dataIndex: 'phone',
//         key: 'phone',
//     },
//     {
//         title: 'Website',
//         dataIndex: 'website',
//         key: 'website',
//     },
//     {
//         title: 'Company',
//         dataIndex: 'company',
//         key: 'company',
//         render: (company, user, index, expanded) => {
//             console.log({ index, company, user, expanded });
//         }
//     },
// ];

const createTableColumns = (user) => {

    if (user) {
        const keys = Object.keys(user)
        const columns = keys.map(key => {

            if (key === "company") {
                return {
                    title: key[0].toUpperCase() + key.slice(1, key.length),
                    dataIndex: key,
                    key: key,
                    render: (company) => {
                        return `${company.name} - ${company.bs}`
                    }
                }
            } else if (key === "address") {
                return {
                    title: key[0].toUpperCase() + key.slice(1, key.length),
                    dataIndex: key,
                    key: key,
                    render: (address) => {
                        return `${address.street} - ${address.zipcode}`
                    }
                }
            }
            return {
                title: key[0].toUpperCase() + key.slice(1, key.length),
                dataIndex: key,
                key: key,
            }
        })
        columns.push({
            title: "Products",
            render: (_, user) => {
                // return <Link to={`/products/${user.id}`}>View Products</Link>
                return <Link to={`/products?userId=${user.id}`}>View Products</Link>
            }
        }, {
            title: "Posts",
            render: (_, user) => {
                // return <Link to={`/post/${user.id}`}>View Posts</Link>
                return <Link to={`/posts?userId=${user.id}`}>View Posts</Link>
            }
        })

        return columns;
    } return []


}
const Users = () => {
    const [pagination, setPagination] = useState({ start: 0, limit: constants.PER_PAGE })
    const { isLoading, error, data: users } = useFetch(`http://localhost:3000/users?_start=${pagination.start}&_limit=${pagination.limit}`)
    // console.log({ isLoading, error, users });

    const columns = createTableColumns(users[0]);
    // console.log(columns);

    const onPageChange = (page, pageSize) => {
        // console.log(page, pageSize);
        setPagination({ ...pagination, start: page + constants.PER_PAGE - 1 })
    }

    console.log(pagination);
    return (
        <Table dataSource={users} columns={columns} pagination={{
            total: 10, defaultCurrent: 1, pageSize: constants.PER_PAGE,
            // onChange: (page, pageSize) => { console.log({ page, pageSize }); }
            // onChange: (page, pageSize) => onPageChange(page)
            onChange: onPageChange

        }} />
    )
}

export default Users