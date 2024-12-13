import Image from "next/image";
import React from "react";

function BookingList({ bookingList }) {
  console.log(bookingList);

  return (
    <div>
      {bookingList &&
        bookingList.map((item, index) => <div key={index}>{item.Name}</div>)}
    </div>
  );
}

export default BookingList;
