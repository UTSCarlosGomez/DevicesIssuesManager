/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";

import clienteAxios from "../../config/axios";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";

const Rooms = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await clienteAxios.get('/rooms')
                setRooms(response.data)
            } catch (error) {
                console.error('Error fetching rooms: ', error)
            }
        }
        fetchRooms()
    }, [])
    return(
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader><strong>Rooms</strong></CCardHeader>
                    <CCardBody>
                        <CRow>
                            {rooms.map(room => (
                                <CCol xs={12} sm={6} md={4} key={room.id}>
                                    <CCard>
                                        <CCardHeader>
                                            <h5>Salon: {room.nombre}{room.torre}</h5>
                                        </CCardHeader>
                                        <CCardBody>
                                            
                                            <h6>piso: {room.piso}</h6>
                                            <p>{room.categoria}</p>
                                        </CCardBody>
                                    </CCard>
                                </CCol>
                            ))}
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Rooms