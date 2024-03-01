import { Pets, PetsProps } from "./Pets";
import NavTabs from '../navBar/NavBar';

import bearSrc from './bear.JPG'
import shastaSrc from './shasta.JPG'
import marleySrc from './marley.jpg'


export const PetsContainer = () => {

    const pets: PetsProps[] = [
        {
            title: 'Bear',
            description: 'German Shepard (8/8/20 - Present)',
            imgScr: bearSrc
        },
        {
            title: 'Marley',
            description: 'Cocker Spaniel (5/20/2010 - 3/20/2023)',
            imgScr: marleySrc
        },
        {
            title: 'Shasta',
            description: 'American Eskimo (9/10/08 - 5/5/2021)',
            imgScr: shastaSrc
        }
    ]

    return (
        <>
            <NavTabs />

            {
                pets.map((pet, index) => <Pets key={index} {...pet} />)
            }
        </>
    )
}