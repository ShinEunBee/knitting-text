const API_URL = import.meta.env.VITE_API_URL;

export const updateVisitorCount = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.count;
    } catch (err) {
        console.error("Error:", err);
        return null;
    }
};