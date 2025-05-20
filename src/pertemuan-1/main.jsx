import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import './custom.css';
import ArtikelDetail from "./ArtikelDetail";
import OnASection from "./OnASection";

createRoot(document.getElementById("root"))
    .render(
        <div>
             <Container>
            <HelloWorld/>
            </Container>
            <ArtikelDetail/>
            <OnASection/>
        </div>
    )