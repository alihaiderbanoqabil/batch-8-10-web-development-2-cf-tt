import React, { useCallback, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Table } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { constants } from '../constants'

const createTableColumns = (user) => {

  if (user) {
    const keys = Object.keys(user)
    const columns = keys.map(key => {

      return {
        title: key[0].toUpperCase() + key.slice(1, key.length),
        dataIndex: key,
        key: key,
      }
    })


    return columns;
  } return []


}
const Posts = () => {

  const { search } = useLocation()
  console.log(search);
  const [pagination, setPagination] = useState({ start: 0, limit: constants.PER_PAGE })
  const { isLoading, error, data: users } = useFetch(`http://localhost:3000/posts?_start=${pagination.start}&_limit=${pagination.limit}${search ? `&userId=${search.split("=")[1]}` : ""}`)
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
      total: 20, defaultCurrent: 1, pageSize: constants.PER_PAGE,
      // onChange: (page, pageSize) => { console.log({ page, pageSize }); }
      // onChange: (page, pageSize) => onPageChange(page)
      onChange: onPageChange
    }} />
  )
}

export default Posts