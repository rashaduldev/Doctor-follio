/* eslint-disable react/prop-types */


const Bookingrow = ({booking}) => {
    const {serviceTitle,img,date,price}=booking;
    console.log(booking);
    return (
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
        
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} />
              </div>
            </div>

        </td>
        <td>
         {serviceTitle}
        </td>
        <td>{date}</td>
        <td>${price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default Bookingrow;