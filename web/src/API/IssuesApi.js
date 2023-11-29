// src/api/issuesApi.js

const BASE_URL = "http://localhost:3001"; // Reemplaza con la URL de tu servidor backend

// Obtener todas las incidencias
export const getAllIssues = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/issues`);
        const data = await response.json();
        return data.issueData;
    } catch (error) {
        console.error("Error al obtener incidencias:", error);
        throw error;
    }
};

// Crear una nueva incidencia
export const createIssue = async (issueData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/issues`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(issueData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al crear incidencia:", error);
        throw error;
    }
};

// Actualizar una incidencia
export const updateIssue = async (issueId, issueData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/issues/${issueId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(issueData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al actualizar incidencia:", error);
        throw error;
    }
};

// Eliminar una incidencia
export const deleteIssue = async (issueId) => {
    try {
        const response = await fetch(`${BASE_URL}/api/issues/${issueId}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al eliminar incidencia:", error);
        throw error;
    }
};
