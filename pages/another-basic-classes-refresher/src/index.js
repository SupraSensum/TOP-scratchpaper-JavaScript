class HotelRoom {
    constructor({ roomNumber, numOccupants, occupied, guestName }) {
        this._roomNumber = roomNumber;
        this._numOccupants = numOccupants;
        this._occupied = occupied;
        this._guestName = guestName;
    }

    get guestName() {
        return this._guestName;
    }

    get firstName() {
        let splitName = this._guestName.split(' ');
        return splitName[0];
    }

    get lastName() {
        let splitName = this._guestName.split(' ');
        return (splitName.length > 1) ? splitName[splitName.length - 1] : null;
    }

    get middleNames() {
        let splitName = this._guestName.split(' ');
        if (splitName.length > 2) {
            return splitName.slice(1, splitName.length - 1).join(' ');
        } else {
            return null;
        }
    }

    set guestName(value) {
        this._guestName = value;
    }

    get numOccupants() {
        return this._numOccupants;
    }

    set numOccupants(value) {
        this._numOccupants = value;
    }

    get occupied() {
        return this._occupied;
    }

    set occupied(value) {
        if (typeof value === 'boolean') {
            this._occupied = value;
        }
        else {
            console.log('occupied must be a boolean value.');
        }
    }

    get guestName() {
        return this._guestName;
    }

    set guestName(value) {
        const sanitizedValue = typeof value === 'string' ? value.replace(/<[^>]*>/g, '') : null;
        this._guestName = sanitizedValue;
        console.log(`Guest name set to: ${sanitizedValue}`);
    }
}

const room = new HotelRoom(
    { 
        roomNumber: 101, 
        numOccupants: 2,
        occupied: false,
        guestName: "Bob",
    });
console.log(room);