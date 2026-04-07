import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
    const skills = [
        "auth0",
        "framer-motion",
        "cplusplus",
        "stripe",
        "css3",
        "cloudinary",
        "git",
        "github",
        "html5",
        "javascript",
        "Clerk",
        "react",
        "threejs",
        "tailwindcss",
        "vitejs",
        "visualstudiocode",
    ];

    return (
        <div className="relative flex h-60 w-full flex-col items-center justify-center">

            <OrbitingCircles iconSize={40}>
                {
                    skills.map((skill, idx) => (
                        <Icon key={idx} src={`assets/logos/${skill}.svg`} />
                    ))
                }
            </OrbitingCircles>

            <OrbitingCircles
                iconSize={25}
                radius={100}
                reverse
                speed={2}
            >
                {
                    skills.reverse().map((skill, idx) => (
                        <Icon key={idx} src={`assets/logos/${skill}.svg`} />
                    ))
                }
            </OrbitingCircles>
        </div>
    )
}

const Icon = ({ src }) => {
    return <img src={src} className="duration-200 rounded-sm hover:scale-110" />
}