/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";

import clienteAxios from "../../config/axios";
import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow } from "@coreui/react";
import FormDevices from "./FormDevices";
import DeleteDevicesConfirmation from "./DeleteDevicesConfirmation";

const Devices = () => {
    const [devices, setDevices] = useState([]);
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [isEditing, setIsEditing] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    
    const fetchDevices = async () => {
        try {
            const response = await clienteAxios.get('/devices');
            setDevices(response.data)
        } catch (error) {
            console.log('Error fetching devices: ', error)
        }
    }
    useEffect(() => {
        
        fetchDevices()
    }, [])
    const handleSaveDevice = () => {
        setSelectedDevice(null);
        setIsEditing(false);
        setIsDeleting(false);
        fetchDevices();
    }
    const handleDeleteDevice = async (deviceId) => {
        try {
            await clienteAxios.delete(`/devices/${deviceId}`)
            handleSaveDevice()
        } catch (error) {
            console.error('Error deleting room: ', error)
        }
    }
    return(
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader>
                        <strong>Devices</strong>
                        {user.role === 'admin' && (
                            <>
                                <CButton color="primary" style={{ float: 'right' }} onClick={() => setIsEditing(true)}>
                                Create Device
                                </CButton>
                            </>
                        )}
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            {devices.map(device => (
                                <CCol xs={12} sm={6} md={4} key={device._id}>
                                    <CCard style={{marginBottom:'10px'}}>
                                        <CCardHeader>
                                            <h4>{device.code} {device.brand}</h4>
                                        </CCardHeader>
                                        <CCardBody>
                                            <p><strong>Description: </strong>{device.description}</p>
                                            {device.room && (
                                                <div>
                                                    <p><strong>Room:</strong> {device.room.nombre} {device.room.torre} - Floor {device.room.piso}</p>
                                                    <p><strong>Category:</strong> {device.room.categoria}</p>
                                                </div>
                                            )}
                                        </CCardBody>
                                        <CCardFooter>
                                            {user.role === 'admin' && (
                                                <>
                                                    <CButton color="primary" style={{ marginRight: '10px' }} onClick={() => {
                                                    setSelectedDevice(device);
                                                    setIsEditing(true);
                                                    }}>
                                                        Edit
                                                    </CButton>
                                                    <CButton color="danger" className="text-white" onClick={() => {
                                                        setSelectedDevice(device);
                                                        setIsDeleting(true);
                                                    }}>
                                                        Delete
                                                    </CButton>
                                                </>
                                            )}
                                            <label style={{ float: 'right' }}>UTS</label>
                                        </CCardFooter>
                                    </CCard>
                                </CCol>
                            ))}
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>

            {isEditing && (
                <FormDevices
                    device={selectedDevice}
                    onSave={handleSaveDevice}
                    onClose={() => setIsEditing(false)}
                />
            )}

            {isDeleting && (
                <DeleteDevicesConfirmation
                    device={selectedDevice}
                    onDelete={handleDeleteDevice}
                    onClose={() => setIsDeleting(false)}
                />
            )}
        </CRow>
    );
};

export default Devices;