interface Slot {
    sourceEvent: string;
    dateTime: string;
}

interface SlotDate {
    date: string;
    slots: Slot[];
}

interface DoctorAvailability {
    idDoctor: string;
    slotdates: SlotDate[];
}

export const unifyAvailability = (doctorAvailabilities: DoctorAvailability[]): SlotDate[] => {
    const unifiedSlots: { [key: string]: Slot[] } = {};

    doctorAvailabilities.forEach((availability) => {
        availability.slotdates.forEach((slotdate) => {
            if (!unifiedSlots[slotdate.date]) {
                unifiedSlots[slotdate.date] = [];
            }

            // Filter out slots with undefined dateTime and keep the original Slot structure
            const validSlots = slotdate.slots
                ? slotdate.slots.filter(slot => slot.dateTime !== undefined && slot.dateTime !== null)
                : [];

            unifiedSlots[slotdate.date] = unifiedSlots[slotdate.date].concat(validSlots);
        });
    });

    return Object.entries(unifiedSlots).map(([date, slots]) => ({
        date,
        // Ensure all slots have valid dateTime and sort accordingly
        slots: slots.sort((a, b) => {
            if (a.dateTime && b.dateTime) {
                return a.dateTime.localeCompare(b.dateTime);
            }
            return 0; // Treat undefined or null dateTime as equal
        })
    }));
};