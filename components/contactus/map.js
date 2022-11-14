import {Map, GoogleApiWrapper} from "google-maps-react";

function Maps(){

    return(
        <Map 
                google={PushSubscriptionOptions.google}
                style={{width: "100%", height: "100%"}}
                zoom = {10}
                initialCenter={
                    {
                        lat: 23.810331,
                        lng: 90.412521
                    }
                }
        />
    )
}

export default  GoogleApiWrapper({
    apikey: 'AIzaSyBqr9DpzbH3-A5JCjZ5t38g6XJiCn4ucM0'
})(Maps)