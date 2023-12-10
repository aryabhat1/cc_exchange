import "@/styles/globals.css";

// INTERNAL IMPORT
// import Navbar from "@/components/Navbar/Navbar";
// import Navbar from "../components/ComponentIndex";
import { Navbar } from "@/components/ComponentIndex";
import { Footer } from "@/components/ComponentIndex";
import CC_Slider from "@/components/CC_Slider/CC_Slider";
// import { NFTMarketPlaceABI } from "@/Context/constants";
import { NFTMarketPlaceProvider } from "@/Context/NFTMarketPlaceContext";

const App = ({ Component, pageProps }) => (
    <div>
        <NFTMarketPlaceProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </NFTMarketPlaceProvider>
    </div>
);

export default App;

// export default function App({ Component, pageProps }) {
//   return (
//     <div>
//       <Navbar />
//       <Component {...pageProps} />
//     </div>
//   )

// }
