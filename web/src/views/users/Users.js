/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow,
} from '@coreui/react'
import clienteAxios from '../../config/axios'
import UserForm from './UserForm'
import DeleteConfirmation from './DeleteConfirmation'

const Users = () => {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const fetchUsers = async () => {
    try {
      const response = await clienteAxios.get('/users')
      setUsers(response.data)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }
  useEffect(() => {
    
    fetchUsers()
  }, [])

  const handleSaveUser = () => {
    setSelectedUser(null)
    setIsEditing(false)
    setIsDeleting(false)
    fetchUsers()
  }

  const handleDeleteUser = async (userId) => {
    try {
      await clienteAxios.delete(`/users/${userId}`)
      handleSaveUser()
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>
            Users
            <CButton color="primary" style={{ float: 'right' }} onClick={() => setIsEditing(true)}>
              Create User
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>User</CTableHeaderCell>
                  <CTableHeaderCell>Email</CTableHeaderCell>
                  <CTableHeaderCell>Role</CTableHeaderCell>
                  <CTableHeaderCell>Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {users.map((user, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{user.name}</CTableDataCell>
                    <CTableDataCell>{user.email}</CTableDataCell>
                    <CTableDataCell>{user.role}</CTableDataCell>

                    <CTableDataCell>
                      <CButton color="primary" onClick={() => { setSelectedUser(user); setIsEditing(true) }}>Edit</CButton>
                      <CButton color="danger" className='text-white' onClick={() => { setSelectedUser(user); setIsDeleting(true) }}>Delete</CButton>

                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
      {isEditing && (
        <UserForm
          user={selectedUser}
          onSave={handleSaveUser}
          onClose={() => setIsEditing(false)}
        />
      )}

      {isDeleting && (
        <DeleteConfirmation
          user={selectedUser}
          onDelete={handleDeleteUser}
          onClose={() => setIsDeleting(false)}
        />
      )}
    </CRow>
  )
}

export default Users
