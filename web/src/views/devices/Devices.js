/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";

import clienteAxios from "../../config/axios";
import { CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from "@coreui/react";

const Devices = () => {
    const [devices, setDevices] = useState([])
    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await clienteAxios.get('/devices');
                setDevices(response.data)
            } catch (error) {
                console.log('Error fetching devices: ', error)
            }
        }
        fetchDevices()
    }, [])
    return(
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader><strong>Devices</strong></CCardHeader>
                    <CCardBody>
                        <CRow>
                            {devices.map(device => (
                                <CCol xs={12} sm={6} md={4} key={device.id}>
                                    <CCard>
                                        <CCardHeader>
                                            <h4>{device.code} {device.brand}</h4>
                                            
                                        </CCardHeader>
                                        <CCardBody>
                                            <p><strong>Descripcion: </strong>{device.description}</p>
                                            {/* Mostrar detalles de la habitación relacionada */}
                                            {device.room && (
                                                <div>
                                                    <p><strong>Salon:</strong> {device.room.nombre}{device.room.torre} - Piso {device.room.piso}</p>
                                                    <p><strong>Categoria:</strong> {device.room.categoria}</p>
                                                </div>
                                            )}
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
export default Devices;