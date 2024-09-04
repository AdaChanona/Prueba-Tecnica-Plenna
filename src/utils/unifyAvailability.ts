interface Slot {
    time: string;
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
            unifiedSlots[slotdate.date] = unifiedSlots[slotdate.date].concat(slotdate.slots);
        });
    });

    return Object.entries(unifiedSlots).map(([date, slots]) => ({
        date,
        slots: slots.sort((a, b) => a.time.localeCompare(b.time))
    }));
};
