from fastapi import FastAPI, Request

app = FastAPI()
rooms = {
        'ensuite': [
            {
            'id': 1,
            'name': 'Ensuite Room 1',
            'available_rooms': 10,
            'amenities': 'Rooms en-suite, fully air- conditioned with Tv, wardrobe and fan.',
            'walking_distance': 15,
            'driving_distance': 5,
            'image': 'room1.jpg',
            'price': 5000  # Price in Nigerian Naira   
        },
            {
            'id': 1,
            'name': 'Ensuite Room 2',
            'available_rooms': 10,
            'amenities': 'Rooms en-suite, fully air- conditioned with Tv, wardrobe and fan.',
            'walking_distance': 15,
            'driving_distance': 5,
            'image': 'room1.jpg',
            'price': 5000  # Price in Nigerian Naira   
        },
        ],
        'group':[
            {
            'id': 1,
            'name': 'Group Room 1',
            'available_rooms': 4,
            'amenities': 'Rooms en-suite, fully air- conditioned with Tv, wardrobe and fan.',
            'walking_distance': 5,
            'driving_distance': 1,
            'image': 'room1.jpg',
            'price': 10000  # Price in Nigerian Naira   
        },
            {
            'id': 1,
            'name': 'Group Room 2',
            'available_rooms': 4,
            'amenities': 'Rooms en-suite, fully air- conditioned with Tv, wardrobe and fan.',
            'walking_distance': 5,
            'driving_distance': 1,
            'image': 'room1.jpg',
            'price': 10000  # Price in Nigerian Naira   
        },
        ],
        'hostel':
            [{
            'id': 1,
            'name': 'Hostel Room 1',
            'available_rooms': 4,
            'amenities': 'Rooms en-suite, fully air- conditioned with Tv, wardrobe and fan.',
            'walking_distance': 5,
            'driving_distance': 1,
            'image': 'room1.jpg',
            'price': 10000  # Price in Nigerian Naira   
        },
            {
            'id': 1,
            'name': 'Room 2',
            'available_rooms': 4,
            'amenities': 'Rooms en-suite, fully air- conditioned with Tv, wardrobe and fan.',
            'walking_distance': 5,
            'driving_distance': 1,
            'image': 'room1.jpg',
            'price': 10000  # Price in Nigerian Naira   
        },
        ],
    }

@app.route('/api/rooms/<category>')
def get_rooms(category):
    if category in rooms:
        return json(rooms[category])
    else:
        return json([])
    # Replace this with your logic to fetch room data from the database
    # Sample room data


if __name__ == '__main__':
    app.run(debug=True)