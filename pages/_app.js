import "@/styles/globals.css";

// INTERNAL IMPORT
// import Navbar from "@/components/Navbar/Navbar";
// import Navbar from "../components/ComponentIndex";
import { Navbar } from "@/components/ComponentIndex";
import { Footer } from "@/components/ComponentIndex";

const App = ({ Component, pageProps }) => (
    <div>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
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
