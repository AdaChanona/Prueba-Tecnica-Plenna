import { unifyAvailability } from '../src/utils/unifyAvailability';

describe('unifyAvailability function', () => {
    it('should unify the availability of doctors correctly', () => {
        const rawData = require('./test.json'); // Load the JSON file
        // Transform the raw JSON data into the expected DoctorAvailability format
        const input = rawData.schedules.map((schedule: any) => ({
            idDoctor: schedule.idDoctor,
            slotdates: schedule.slotdates.map((slotdate: any) => ({
                date: slotdate.date,
                slots: slotdate.slots ? slotdate.slots.map((slot: any) => ({
                    time: new Date(slot.dateTime).toISOString().split('T')[1].substring(0, 5) // Convert dateTime to HH:mm format
                })) : []
            }))
        }));

        const expectedOutput = [
            {
                "idDoctor": "45",
                "slotdates": [
                    {
                        "date": "2022-05-20T00:00:00Z",
                        "slots": []
                    },
                    {
                        "date": "2022-05-21T00:00:00Z",
                        "slots": []
                    },
                    {
                        "date": "2022-05-22T00:00:00Z",
                        "slots": []
                    },
                    {
                        "date": "2022-05-23T00:00:00Z",
                        "slots": []
                    },
                    {
                        "date": "2022-05-24T00:00:00Z",
                        "slots": []
                    },
                    {
                        "date": "2022-05-25T00:00:00Z",
                        "slots": []
                    },
                    {
                        "date": "2022-05-26T00:00:00Z",
                        "slots": []
                    },
                    {
                        "date": "2022-05-27T00:00:00Z",
                        "slots": []
                    }
                ]
            },
            {
                "idDoctor": "46",
                "slotdates": [
                    {
                        "date": "2022-05-20T00:00:00Z",
                        "slots": []
                    },
                    {
                        "date": "2022-05-21T00:00:00Z",
                        "slots": []
                    },
                    {
                        "date": "2022-05-22T00:00:00Z",
                        "slots": []
                    },
                    {
                        "date": "2022-05-23T00:00:00Z",
                        "slots": []
                    },
                    {
                        "date": "2022-05-24T00:00:00Z",
                        "slots": []
                    },
                    {
                        "date": "2022-05-25T00:00:00Z",
                        "slots": []
                    },
                    {
                        "date": "2022-05-26T00:00:00Z",
                        "slots": []
                    },
                    {
                        "date": "2022-05-27T00:00:00Z",
                        "slots": []
                    }
                ]
            }
        ];

        expect(unifyAvailability(input)).toEqual(expectedOutput);
    });
});
