/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../../config/axios";
import { CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CCol, CRow, CButton, CCardFooter } from "@coreui/react";

const Issues = () => {
    const [issues, setIssues] = useState([]);
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))

    const fetchIssues = async () => {
        try {
            const response = await clienteAxios.get('/issues');
            setIssues(response.data);
        } catch (error) {
            console.error('Error fetching Issues: ', error);
        }
    };

    useEffect(() => {
        
        fetchIssues();
    }, []);

    return (
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader><strong>Issues</strong>
                    <CButton color="primary" style={{float: 'right'}} onClick={() => navigate('/issues/create-issues')}>
                        Create Issue
                    </CButton>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            {issues.map((issue) => (
                                <CCol xs={12} sm={6} md={4} key={issue._id}>
                                    <CCard style={{marginBottom: '10px'}}>
                                        <CCardHeader>
                                            <h6>Created by: {issue.creator.name}</h6>
                                        </CCardHeader>
                                        <CCardBody>
                                            <CCardTitle>
                                                <strong>Device:</strong> {issue.device.code} <br />
                                                <strong>Type:</strong> {issue.type}
                                            </CCardTitle>
                                            <CCardText>
                                                <strong>Description:</strong> {issue.description || 'No description'} <br />
                                                <strong>Status:</strong> {issue.status || 'No status'}
                                            </CCardText>
                                            {/* Mostrar notas si las hay */}
                                            <strong>Number of Notes:</strong> {issue.notes?.length || 0} <br />
                                            <strong>Status:</strong> {issue.status || 'No status'}
                                            {/* Mostrar detalles de issuesManagement si los hay */}
                                            {issue.issuesManagement?.length > 0 && (
                                                <div>
                                                    <strong>Management:</strong>
                                                    <ul>
                                                        {issue.issuesManagement.map((management, index) => (
                                                            <li key={index}>
                                                                <strong>Responsible:</strong> {management.responsible.name} <br />
                                                                <strong>Description:</strong> {management.description || 'No description'} <br />
                                                                <strong>Start Date:</strong> {new Date(management.startDate).toLocaleDateString()} <br />
                                                                {/* Corregir la expresión para la fecha de finalización */}
                                                                {management.endDate && (
                                                                    <>
                                                                        <strong>End Date:</strong> {new Date(management.endDate).toLocaleDateString()} <br />
                                                                    </>
                                                                )}
                                                                <strong>Used Objects:</strong> {management.usedObjects || 'None'}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </CCardBody>
                                        <CCardFooter>
                                            <CButton color="primary" style={{float: 'right'}} onClick={() => navigate(`/issues/view-issue/${issue._id}`)}>View</CButton>
                                        </CCardFooter>
                                    </CCard>
                                </CCol>
                            ))}
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
};

export default Issues;
