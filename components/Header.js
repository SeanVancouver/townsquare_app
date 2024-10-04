'use client'

import { NavbarContext } from '@/contexts/AppContext';
import React, {useContext} from 'react'

function Header({ pageKey }) {
    let content = null;
    let { sharedState } = useContext(NavbarContext);    


    switch (sharedState) {
        case "what_Project":
            content = <>
                <h1>About the Project</h1>
                <h2>Welcome, you have stumbled something that will revolutionize our world. Join us, to make this happen</h2>
            </>
            break;

        case "what_AboutMe":
            content = <>
                <h1>About me</h1>
                <h2>Nice to meet you. I am Sean, the founder of the TownSquare project, and here is my story</h2>
            </>
            break;

        case "why":
            content = <>
                <h1>Why TownSquare</h1>
                <h2>There are many good reasons, either read them all, or find yours by answering [these questions]</h2>
            </>
            break;

        case "how_timeline":
            content = <>
                <h1>how_timeline title placeholder</h1>
                <h2>how_timeline text placeholder</h2>
            </>
            break;

        case "how_youCanHelp":
            content = <>
                <h1>how_youCanHelp title placeholder</h1>
                <h2>how_youCanHelp text placeholder</h2>
            </>
            break;
    }

    return content;
}

export default Header