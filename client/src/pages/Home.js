import { useState, useRef, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import GetDMARCReport from './GetDMARCRecord';
import CreateDMARCRecord from './CreateDMARCRecord';

function Home() {
    const defaultActiveRef = useRef(null);

    useEffect(() => {
        // This will simulate a click on the button element when the component mounts
        let tabcontents = document.getElementsByClassName('vertical-nav-tabcontent')
        Array.from(tabcontents).forEach(content => {
            content.style.display = "none"
        });

        if (defaultActiveRef.current) {
            defaultActiveRef.current.click();
        }
    }, []);

    const openTab = (event, pageName) => {
        let i, tabcontents, tablinks;

        tabcontents = document.getElementsByClassName('vertical-nav-tabcontent');

        Array.from(tabcontents).forEach(content => {
            content.style.display = "none"
        });

        tablinks = document.getElementsByClassName('vertical-nav-link');

        Array.from(tablinks).forEach(tablink => {
            tablink.className = tablink.className.replace(" active", "")
        });

        document.getElementById(pageName).style.display = "block";
        event.currentTarget.className += " active"
    }

    return (
        <Container fluid className="page justify-content-center">
            <Nav defaultActiveKey="/home" className="vertical-nav flex-column">
                <Nav.Link ref={defaultActiveRef} className="vertical-nav-link" onClick={(event)=>openTab(event, 'getDMARCRecord')}>Get DMARC Record</Nav.Link>
                <Nav.Link className="vertical-nav-link" onClick={(event)=>openTab(event, 'createDMARCRecord')}>Create DMARC Record</Nav.Link>
            </Nav>

            <Container id="getDMARCRecord" className="vertical-nav-tabcontent m-0">
                <GetDMARCReport/>
            </Container>

            <Container id="createDMARCRecord" className="vertical-nav-tabcontent m-0">
               <CreateDMARCRecord/>
            </Container>
        </Container>
    )
}

export default Home;