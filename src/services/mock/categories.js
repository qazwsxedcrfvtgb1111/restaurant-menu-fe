export function getCategories() {
    return new Promise((resolve) => {
        resolve([
            {
                id: 1,
                title: 'Drinks',
                description: 'drinks',
                img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                id: 2,
                title: 'Meat',
                description: 'drinks',
                img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                id: 3,
                title: 'Desert',
                description: 'drinks',
                img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                id: 4,
                title: 'Salads',
                description: 'drinks',
                img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                id: 5,
                title: 'Soups',
                description: 'drinks',
                img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
        ])
    })
}