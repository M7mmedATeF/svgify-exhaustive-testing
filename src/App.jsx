import Svgify from "@sumcode/svgify";
import "./App.css";

function App() {
    return (
        <main>
            <header>
                <img src="https://res.cloudinary.com/dclbtusww/image/upload/c_scale,h_60/f_webp/Sumcode/Svgify/spkctkwkydsmnvki85di.jpg" />
            </header>

            <section className="iconsList">
                {Array(10000)
                    .fill(0)
                    .map((_, index) => (
                        <Svgify
                            Scale={Math.random() * 7 + 1}
                            IconName={`${
                                (Number((Math.random() * 100).toFixed(0)) %
                                    71) +
                                1
                            }`}
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
