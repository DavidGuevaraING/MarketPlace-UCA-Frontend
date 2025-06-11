import Particles from "react-tsparticles";

const ParticlesDashboard = () => {
    return(
        <Particles
            id="tsparticles"
            options={{
                background: { color: { value: "transparent" } },
                fpsLimit: 60,
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 1500 } },
                    color: { value: ["#007BFF", "#FFFFFF", "#00C4B4"] },
                    shape: { type: "circle" },
                    opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1, opacity_min: 0.2, sync: false } },
                    size: { value: 5, random: true, anim: { enable: true, speed: 2, size_min: 0.5, sync: false } },
                    line_linked: { enable: false },
                    move: { enable: true, speed: 1.5, direction: "none", random: true, straight: false, out_mode: "out", bounce: false },
                },
                interactivity: {
                    detect_on: "canvas",
                    events: { onhover: { enable: false, mode: "repulse" }, onclick: { enable: false, mode: "push" }, resize: true },
                    modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } },
                },
                retina_detect: true,
            }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    )

}
export default ParticlesDashboard;