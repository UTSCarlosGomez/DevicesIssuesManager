/* eslint-disable prettier/prettier */
import React,{useEffect, useState} from 'react'
import classNames from 'classnames'

import {CAvatar, CButton, CButtonGroup, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CProgress, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow,} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibCcAmex, cibCcApplePay, cibCcMastercard, cibCcPaypal, cibCcStripe, cibCcVisa, cibGoogle, cibFacebook, cibLinkedin, cifBr, cifEs, cifFr, cifIn, cifPl, cifUs, cibTwitter, cilCloudDownload, cilPeople, cilUser, cilUserFemale, } from '@coreui/icons'
import clienteAxios from '../../config/axios'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'

const Dashboard = () => {
  const [users, guardarUsers] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      try {
        const usersConsulta = await clienteAxios.get('/users')
        guardarUsers(usersConsulta.data)
      } catch (error) {
        console.error('Error en la consulta de users: ', error)
      }
    }
    consultarAPI()
  }, [])

  return (
    <>
      <WidgetsDropdown className="mb-4" /> {/*Cuadros en el dashboard*/}
      <br></br>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Usuarios</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">User</CTableHeaderCell>

                    <CTableHeaderCell className="bg-body-tertiary">Email</CTableHeaderCell>

                    <CTableHeaderCell className="bg-body-tertiary">Accion</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {users.map((user, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" status="success">
                          <CIcon icon={cilPeople}/>
                        </CAvatar>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{user.name}</div>
                      </CTableDataCell>

                      <CTableDataCell>
                          <div className="fw-semibold">{user.email}</div>
                      </CTableDataCell>

                      <CTableDataCell>
                        <CButton color='primary'>Accion</CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
