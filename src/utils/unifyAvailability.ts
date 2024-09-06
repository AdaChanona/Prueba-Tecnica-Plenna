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

interface UnifiedDoctorSlot {
    idDoctor: string;
    slotdates: SlotDate[];
}

export const unifyAvailability = (doctorAvailabilities: DoctorAvailability[]): UnifiedDoctorSlot[] => {
    const doctorSlotsMap: { [idDoctor: string]: { [date: string]: Slot[] } } = {};

    doctorAvailabilities.forEach((availability) => {
        if (!doctorSlotsMap[availability.idDoctor]) {
            doctorSlotsMap[availability.idDoctor] = {};
        }

        availability.slotdates.forEach((slotdate) => {
            if (!doctorSlotsMap[availability.idDoctor][slotdate.date]) {
                doctorSlotsMap[availability.idDoctor][slotdate.date] = [];
            }

            // Filter out slots with undefined dateTime and keep the original Slot structure
            const validSlots = slotdate.slots
                ? slotdate.slots.filter(slot => slot.dateTime !== undefined && slot.dateTime !== null)
                : [];

            // Concatenate valid slots
            doctorSlotsMap[availability.idDoctor][slotdate.date] = doctorSlotsMap[availability.idDoctor][slotdate.date].concat(validSlots);
        });
    });

    // Convert the map back to a list of unified slotdates for each doctor
    return Object.entries(doctorSlotsMap).map(([idDoctor, slotDatesMap]) => ({
        idDoctor,
        slotdates: Object.entries(slotDatesMap).map(([date, slots]) => ({
            date,
            // Sort slots by dateTime
            slots: slots.sort((a, b) => {
                if (a.dateTime && b.dateTime) {
                    return a.dateTime.localeCompare(b.dateTime);
                }
                return 0; // Treat undefined or null dateTime as equal
            })
        }))
    }));
};
