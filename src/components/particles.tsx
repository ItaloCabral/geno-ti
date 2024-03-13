import { useCallback } from 'react';
import Particles from "react-particles";
import { loadSlim } from 'tsparticles-slim';

export const ParticlesContainer = () => {

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine)
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // ...Logic here
  }, []);

  return (
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className='w-full'
            options={{
                background: {
                    color: {
                        value: "#090118",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "attract",
                        },
                        onHover: {
                            enable: true,
                            mode: "",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        attract: {
                            distance: 250,
                            duration: 1.5,
                            speed: 2,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#590AEB",
                    },
                    links: {
                        color: "#945DF8",
                        distance: 100,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 300,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 6 },
                    },
                },
                detectRetina: true,
                style: {
                  opacity: ".3",
                  height: "100%",
                  width: "100%",
                  zIndex: "-100"
                },
            }}
          />
  )
}
