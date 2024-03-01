import { Pets, PetsProps } from "./Pets";
import { NavBar } from '../navBar/NavBar';

import bearSrc from './bear.JPG'
import shastaSrc from './shasta.JPG'
import marleySrc from './marley.jpg'


export const PetsContainer = () => {

    const petList: PetsProps[] = [
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
            <NavBar />
            {
                petList.map((pet, index) => <Pets key={index} {...pet} />)
            }
        </>
    )
}