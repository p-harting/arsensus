import React from 'react'

const Booking = () => {
  return (
    <div>
        <form className='flex flex-col'>
            <label>Zeitzone</label>
            <select>
                <option>Deutschland (GMT+1)</option>
            </select>
            <label>Datum</label>
            <input></input>
            <label>Zeit</label>
            <input></input>
            <label>Name</label>
            <input></input>
            <label>Email</label>
            <input></input>
            <label>Anmerkung</label>
            <input></input>
            <button>Buchen</button>
        </form>
    </div>
  )
}

export default Booking