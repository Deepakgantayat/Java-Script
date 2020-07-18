const data = {
    "destination_addresses": ["Mysuru, Karnataka, India"],
    "origin_addresses": ["Bengaluru, Karnataka, India"],
    "rows": [
        {
            "elements": [
                {
                    "distance": {
                        "text": "144 km",
                        "value": 144337
                    },
                    "duration": {
                        "text": "3 hours 13 mins",
                        "value": 11607
                    },
                    "duration_in_traffic": {
                        "text": "3 hours 15 mins",
                        "value": 11701
                    },
                    "status": "OK"
                }
            ]
        }
    ],
    "status": "OK"
}
//function findDistance(){
let ending = data.destination_addresses[0].split(',')[0]
let starting = data.origin_addresses[0].split(',')[0]
let distance = data.rows[0].elements[0].distance.text
let duration = data.rows[0].elements[0].duration.text

//}

console.log(starting,ending,distance,duration)