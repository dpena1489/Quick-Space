// // TODO : I wasnt able to retreive user information.
// const startTimeExample1 = new Date(2024, 9, 10);
// const endTimeExample1 = new Date(startTimeExample1)
// endTimeExample1.setMonth(startTimeExample1.getMonth() + 1);

// const startTimeExample2 = new Date(2025, 0, 15);
// const endTimeExample2 = new Date(startTimeExample2)
// endTimeExample2.setMonth(startTimeExample1.getMonth() + 1);

// const mockUserResponse = {
//     data: {
//         firstName: "Taylor",
//         lastName: "Swift",
//         userName: "TaySwifty",
//         email: "tayswifty@gmail.com",
//         password: "test1234",
//         bookings: [
//             {
//                 listing: {
//                     title: "Spacious Meeting Room",
//                     address: "123 Main Street",
//                     amenities: ['Projector', 'Whiteboard', 'WiFi']
//                 },
//                 startTime: startTimeExample1.toLocaleDateString("en-US"),
//                 endTime: endTimeExample1.toLocaleDateString("en-US"),
//                 totalPrice: 202
//             },
//             {
//                 listing: {
//                     title: "Charming Cottage",
//                     address: "101 Forest Lane",
//                     amenities: ['Garden', 'Fire Pit', 'Porch Swing']
//                 },
//                 startTime: startTimeExample2.toLocaleDateString("en-US"),
//                 endTime: endTimeExample2.toLocaleDateString("en-US"),
//                 totalPrice: 1202.25
//             }
//         ]
//     }
// }

// const invoice = {
//     subTotal: '$8,800.00',
//     tax: '$1,760.00',
//     total: '$10,560.00',
//     items: [
//         {
//             id: 1,
//             title: 'Logo redesign',
//             description: 'New logo and digital asset playbook.',
//             hours: '20.0',
//             rate: '$100.00',
//             price: '$2,000.00',
//         },
//         {
//             id: 2,
//             title: 'Website redesign',
//             description: 'Design and program new company website.',
//             hours: '52.0',
//             rate: '$100.00',
//             price: '$5,200.00',
//         },
//         {
//             id: 3,
//             title: 'Business cards',
//             description: 'Design and production of 3.5" x 2.0" business cards.',
//             hours: '12.0',
//             rate: '$100.00',
//             price: '$1,200.00',
//         },
//         {
//             id: 4,
//             title: 'T-shirt design',
//             description: 'Three t-shirt design concepts.',
//             hours: '4.0',
//             rate: '$100.00',
//             price: '$400.00',
//         },
//     ],
// }

import { useQuery } from "@apollo/client";
import { GET_BOOKINGS } from "../utils/queries";

function Profile() {
    // TODO replace with useQuery from apollo
    const {data, loading} = useQuery(GET_BOOKINGS);

    const userData = data?.user || {};

    
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="container mx-auto flex flex-col justify-between mt-5">
            <div className="flex flex-col items-center mb-3">
                <h1 className={"mb-3"}>{userData.username}</h1>
                <img alt={"image"}
                    className={"h-48 w-48 rounded-full md:h-56 md:w-56"}
                    src={'https://t4.ftcdn.net/jpg/01/24/41/03/360_F_124410367_M538eQuhp4ItuXE2RVt5m75kODW2nTZz.jpg'}
                />
            </div>

            <div>
                <div className="overflow-hidden rounded-md bg-white shadow text-black">
                    <div className="border-b-4 border-b-sky-600 bg-white px-2 py-3 text-center">
                        <h3 className="text-xl font-semibold leading-6 text-gray-900">Upcoming Bookings</h3>
                    </div>
                    {userData.bookings.length === 0 ? <h1>No Upcoming Bookings</h1> : <table className="w-full whitespace-nowrap text-left text-sm leading-6">
                        <colgroup>
                            <col className="w-full" />
                            <col />
                            <col />
                            <col />
                        </colgroup>


                        <thead className="border-b border-gray-200 text-gray-900">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-semibold">
                                    Property Name
                                </th>
                                <th scope="col" className="hidden py-3 text-center font-semibold sm:table-cell">
                                    Amenities
                                </th>
                                <th scope="col" className="hidden py-3 pl-8 pr-0 text-center font-semibold sm:table-cell">
                                    Booking Dates
                                </th>
                                <th scope="col" className="py-3 pl-8 pr-6 text-right font-semibold">
                                    Price
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {userData.bookings.map((property) => (
                                <tr key={property.listing.title} className="border-b border-gray-100">
                                    <td className="max-w-0 px-6 py-5 align-top">
                                        <div className="truncate font-medium text-gray-900">{property.listing.title}</div>
                                        <div className="truncate text-gray-500">{property.listing.address}</div>
                                    </td>
                                    <td className="hidden py-5 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                                        {property.listing.amenities.map(amenity => (
                                            <p>{amenity}</p>
                                        ))}
                                    </td>
                                    <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                                        {`${property.startTime} - ${property.endTime}`}
                                    </td>
                                    <td className="py-5 pl-8 pr-6 text-right align-top tabular-nums text-gray-700">
                                        <span className="font-bold text-sky-600">$</span>
                                        {property.totalPrice}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>}
                    
                </div>

                {/* TODO : If have time then lets do this part */}
                {/* <div
                    className="my-3 divide-y overflow-hidden rounded-lg bg-gray-200 shadow border-1 border-sky-600 divide-sky-600">
                    <h2 className="h-8 p-1 bg-gray-500 text-center align-middle">Favorite Bookings</h2>


                    <ul className={"list-disc list-inside"}>

                    </ul>

                    {upcomingBookings.map((property) => (
                        <p key={property.id} className={"my-2 text-wrap"}>
                            {property.propertyTitle}
                        </p>
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default Profile;
