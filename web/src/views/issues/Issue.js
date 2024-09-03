/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clienteAxios from "../../config/axios";
import { CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CCol, CRow } from "@coreui/react";

const Issue = () => {
    const { id } = useParams();
    const [issue, setIssue] = useState(null);

    useEffect(() => {
        const fetchIssue = async () => {
            try {
                const response = await clienteAxios.get(`/issues/${id}`);
                setIssue(response.data);
            } catch (error) {
                console.error('Error fetching issue:', error);
            }
        };

        fetchIssue();
    }, [id]);

    if (!issue) {
        return <div>Loading...</div>;
    }

    return (
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader><strong>Issue Details</strong></CCardHeader>
                    <CCardBody>
                        <CCardTitle>
                            <strong>Device:</strong> {issue.device.code} - {issue.device.brand} <br />
                            <strong>Room:</strong> {issue.device.room?.nombre || 'No room'} - Tower {issue.device.room?.torre || 'No tower'}
                        </CCardTitle>
                        <CCardText>
                            <strong>Created by:</strong> {issue.creator.name} <br />
                            <strong>Type:</strong> {issue.type} <br />
                            <strong>Description:</strong> {issue.description || 'No description'} <br />
                            <strong>Device Status:</strong> {issue.deviceStatus || 'No status'} <br />
                            <strong>Status:</strong> {issue.status || 'No status'}
                        </CCardText>
                        
                        {/* Mostrar notas si las hay */}
                        {issue.notes?.length > 0 && (
                            <div>
                                <strong>Notes:</strong>
                                <ul>
                                    {issue.notes.map((note, index) => (
                                        <li key={index}>
                                            {note.creatorName}: {note.content} (on {new Date(note.createdAt).toLocaleDateString()})
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

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
                </CCard>
            </CCol>
        </CRow>
    );
};

export default Issue;
