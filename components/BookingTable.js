import React from 'react'

const BookingTable = () => {

    return (
        <div className="bookingTableSide container">
            <div className="gameBlock suppressBooking">
                <h2>Angelo Miguel</h2>
                <p>5 personnes</p>
                <p>24/04/20</p>
                <p>19h30</p>
                <span className="suppressBookingSpan">X</span>
            </div>
            <div className="gameBlock suppressBooking">
                <h2>Jon Snow</h2>
                <p>3 personnes</p>
                <p>24/04/20</p>
                <p>20h00</p>
                <span className="suppressBookingSpan">X</span>
            </div>
            <div className="gameBlock suppressBooking">
                <h2>Joris Poupoune</h2>
                <p>4 personnes</p>
                <p>25/04/20</p>
                <p>21h30</p>
                <span className="suppressBookingSpan">X</span>
            </div>
        </div>
    )
}

export default BookingTable
