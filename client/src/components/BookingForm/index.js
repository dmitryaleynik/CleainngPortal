import React from 'react'

class BookingForm extends React.Component {
    render() {
        return(
            <div>BookingForm for user {localStorage.getItem('user').email}</div>
        )
    }
}

export default BookingForm;