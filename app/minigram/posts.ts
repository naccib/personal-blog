import { MinigramPost } from "./types";

export const POSTS = [
    {
        id: 'graduation',
        date: new Date('04/26/2025'),
        media: [
            {
                id: 'wmremove-transformed.jpeg',
                type: 'image',
                provider: 'r2',
                alt: 'Me, just before graduating from medical school',
            }
        ],
        caption: 'Graduated from medical school!',
    },
    {
        id: 'loret-de-mar',
        date: new Date('04/26/2025'),
        media: [
            {
                id: 'loret-de-mar.jpg',
                type: 'image',
                provider: 'r2',
                alt: 'Me, in Loret de Mar',
            }
        ],
        caption: 'Loret de Mar, 2024',
    },
    {
        id: 'figueres',
        date: new Date('04/26/2025'),
        media: [
            {
                id: 'figueres.jpg',
                type: 'image',
                provider: 'r2',
                alt: 'Me, in Figueres',
            }
        ],
        caption: 'Figueres, 2024',
    },
    {
        id: 'orleans-2024',
        date: new Date('04/26/2025'),
        media: [
            {
                id: 'the-group-photo.jpg', 
                type: 'image',
                provider: 'r2',
                alt: 'The group photo',
            },
            {
                id: 'neruda-on-the-table.jpg',
                type: 'image',
                provider: 'r2',
                alt: 'Me, with Neruda on the table',
            },
            {
                id: 'nathan-flexing.jpg',
                type: 'image',
                provider: 'r2',
                alt: 'Nathan flexing',
            },
        ],
        caption: `Orléans, 2024

Late 2024 definetely changed my life.

After spending 3 months in the UK and meeting the most amazing research group, I decided to visit my friends in France.
Nathan (picture 3) came to Paris to meet me and we spent a few days roaming around that beautiful city. 
It wasn't long until we headed to Orléans to meet another childhoold friend of ours, Kahlil.

Kahlil is one of those people that won't let go of you no matter how much you try to leave. 
Naturally, I couldn't leave Europe without repaying the sentiment.

He introduced us to one of the coolest places I've been to: the Loire Valley. 
Me and Nathan got ourselves a very quaint townhouse and spent four devine days drinking wine, cooking and eating the most delicious food we could get our hands on.
Every night after they were done with Uni, Kahlil and his friends would come over and we would have the most amazing conversations I could have asked for.

One of his friends, Jõao Victor Porto Santos, turned out to be some of the most upbeat, positive and interesting people I've met.
It's like he's a Golden Retriever on steroids. Seriously. We became friends instantly. 

Anyhow, there is so much to thank for that trip. Nathan, Kahlil, people like you are few and far between. All of you whom I met on that blessed city, I'm so grateful for having you in my life in that moment.

See you soon, Órleans.
`
        
    },
] as MinigramPost[];