const upcomingBookings = [
    {
        id: 0,
        propertyTitle: 'Property1'
    },
    {
        id: 1,
        propertyTitle: 'Property2'
    }
]

function Profile() {
    return (
        <div className="container mx-auto flex justify-between mt-5">
            <div className="flex flex-col items-center">
                <h1>Username</h1>
                <img alt={"image"}
                    className={"h-48 w-48 rounded-full md:h-56 md:w-56"}
                    src={'../../images/Group_Space.jpeg'}
                />
            </div>

            <div>
                <div>
                    <h3>Upcoming Bookings</h3>
                    <ul className={'bg-white'}>
                        {upcomingBookings.map((property) => (
                            <li key={property.id} >
                                {property.propertyTitle}
                            </li>
                        ))}
                    </ul>

                </div>
                <div>
                    <h3>Past Bookings</h3>
                </div>
                <div>
                    <h3>Favorite Bookings</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile;