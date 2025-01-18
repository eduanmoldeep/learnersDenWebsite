import { getCollection } from 'astro:content';

// Function to get all events
export async function getAllEvents() {
    const events = await getCollection('@events', ({ data }) => {
        return data.draft !== true; // Filter out drafts if needed
    });
    
    return events.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
}

// Function to get the latest events
export async function getLatestEvents(limit: number) {
    const events = await getAllEvents(); // Get all events
    return events.slice(0, limit); // Return the latest events limited by the count
}