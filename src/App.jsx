import Svgify from "@sumcode/svgify";
import "./App.css";
import logo from "./assets/svgify.png";

function App() {
    const listingSVG = Array(1000).fill(0);
    const ICONS = [
        {
            IconName: "t1",
            FontWeight: "stroke",
        },
        {
            IconName: "t2",
            FontWeight: "stroke",
        },
        {
            IconName: "t3",
            FontWeight: "fill",
        },
        {
            IconName: "t4",
            FontWeight: "fill",
        },
        {
            IconName: "t5",
            FontWeight: "stroke",
        },
        {
            IconName: "t6",
            FontWeight: "stroke",
        },
        {
            IconName: "t7",
            FontWeight: "fill",
        },
        {
            IconName: "t8",
            FontWeight: "stroke",
        },
        {
            IconName: "t9",
            FontWeight: "stroke",
        },
        {
            IconName: "t10",
            FontWeight: "stroke",
        },
        {
            IconName: "t11",
            FontWeight: "fill",
        },
        {
            IconName: "t12",
            FontWeight: "stroke",
        },
        {
            IconName: "t13",
            FontWeight: "stroke",
        },
        {
            IconName: "t14",
            FontWeight: "stroke",
        },
        {
            IconName: "t15",
            FontWeight: "stroke",
        },
        {
            IconName: "t16",
            FontWeight: "stroke",
        },
    ];

    return (
        <main>
            <header>
                <img src={logo} />
            </header>

            <section className="iconsList">
                {listingSVG.map((_, index) => (
                    <Svgify
                        Scale={Math.random() * 7 + 1}
                        {...ICONS[
                            Number((Math.random() * 10).toFixed(0)) %
                                ICONS.length
                        ]}
                        style={{
                            rotate: `${Math.random() * 360}deg`,
                        }}
                        key={index}
                    />
                ))}
            </section>
        </main>
    );
}

export default App;
