import ASCIIText from "./components/ASCIIText"
import FaultyTerminal from "./components/FaultyTerminal"

function App() {
  return (
    <div className='w-full h-screen'>
      <FaultyTerminal
        scale={3}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={1}
        pause={false}
        scanlineIntensity={1}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0.2}
        curvature={0.05}
        tint="#230046"
        mouseReact={true}
        mouseStrength={0.5}
        pageLoadAnimation={false}
        brightness={1}
      >
        <ASCIIText
          text='andreev danila'
          // enableWaves={true}
          asciiFontSize={10}
          planeBaseHeight={4}
        />
      </FaultyTerminal>
    </div>
  )
}

export default App
