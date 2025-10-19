import { useEffect, useState } from "react"
import ASCIIText from "./components/ASCIIText"
import DecryptedText from "./components/DecryptedText"
import FaultyTerminal from "./components/FaultyTerminal"
import useMediaQuery from "./hooks/useMediaQuery"

function App() {
  const [fontsReady, setFontsReady] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    document.fonts.ready.then(() => setFontsReady(true))
  }, [])

  return (
    <div>
      <div className='absolute -z-10 w-full h-screen'>
        <FaultyTerminal
          scale={2}
          gridMul={isMobile ? [0.5, 1] : [2, 1]}
          digitSize={1.4}
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
          mouseStrength={0.2}
          pageLoadAnimation={true}
          brightness={0.6}
        >
          {fontsReady &&
            <ASCIIText
              text='@daanqq'
              asciiFontSize={8}
              enableWaves={false}
              planeBaseHeight={3}
            />
          }
        </FaultyTerminal>
      </div>
      <div className='p-4 text-gray-100 text-7xl'>
        {fontsReady &&
          <div className="flex flex-col sm:flex-row justify-between cursor-default">
            <div>
              <DecryptedText
                text="Danila"
                characters="⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿"
              />
              <br />
              <DecryptedText
                text="Andreev"
                characters="⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿"
              />
            </div>
            <div className="text-right">
              <DecryptedText
                text="Web"
                characters="⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿"
              />
              <br />
              <DecryptedText
                text="Developer"
                characters="⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿"
              />
            </div>
          </div>
        }


      </div>
    </div>
  )
}

export default App
