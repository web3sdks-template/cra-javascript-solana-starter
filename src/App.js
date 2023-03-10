import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "./styles/Home.css";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const Home = () => {
  // Here's how to get the web3sdks SDK instance
  // const sdk = useSDK();
  // Here's how to get a nft collection
  // const { data: program } = useProgram(
  //   your_nft_collection_address,
  //   "nft-collection"
  // );

  return (
    <>
      <div className="container">
        <div className="iconContainer">
          <img
            src="/web3sdks.svg"
            height={75}
            width={115}
            alt="web3sdks"
            className="icon"
          />
          <img
            width={75}
            height={75}
            src="/sol.png"
            className="icon"
            alt="sol"
          />
        </div>
        <h1 className="h1">Solana, meet web3sdks 👋</h1>
        <p className="explain">
          Explore what you can do with web3sdks&rsquo;s brand new{" "}
          <b>
            <a
              href="https://docs.web3sdks.com/solana"
              target="_blank"
              rel="noopener noreferrer"
              className="lightPurple"
            >
              Solana SDK
            </a>
          </b>
          .
        </p>
        <div className="buttonContainer">
          <WalletMultiButton style={{}} />
        </div>
      </div>
    </>
  );
};

export default Home;
