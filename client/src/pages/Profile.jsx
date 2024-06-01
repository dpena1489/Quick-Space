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
            <div className="container mx-auto flex flex-col justify-between mt-5">
                <div className="flex flex-col items-center mb-3">
                    <h1 className={"mb-3"}>Username</h1>
                    <img alt={"image"}
                         className={"h-48 w-48 rounded-full md:h-56 md:w-56"}
                         src={'../../images/Group_Space.jpeg'}
                    />
                </div>
    
                <div>
                    <div
                        className="my-3 divide-y overflow-hidden rounded-lg bg-gray-200 shadow border-1 border-sky-600 divide-sky-600">
                        <h2 className="h-8 p-1 bg-gray-500 text-center align-middle">Upcoming Bookings</h2>
    
    
                        <ul className={"list-disc list-inside"}>
    
                        </ul>
    
                        {upcomingBookings.map((property) => (
                            <p key={property.id} className={"my-2 text-wrap"}>
                                {property.propertyTitle}
                            </p>
                        ))}
    
    
                    </div>
                    <div
                          className="my-3 divide-y overflow-hidden rounded-lg bg-gray-200 shadow border-1 border-sky-600 divide-sky-600">
                        <h2 className="h-8 p-1 bg-gray-500 text-center align-middle">Favorite Bookings</h2>
    
    
                        <ul className={"list-disc list-inside"}>
    
                        </ul>
    
                        {upcomingBookings.map((property) => (
                            <p key={property.id} className={"my-2 text-wrap"}>
                                {property.propertyTitle}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
    
    export default Profile;

   
