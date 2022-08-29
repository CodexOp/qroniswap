import React from "react";
import styled from "styled-components";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const BSCchainTestnet = {
  id: 97,
  name: "BSC - Testnet",
  network: "BSC",
  iconUrl: "https://example.com/icon.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Binance Smart Chain – Testnet",
    symbol: "BNB",
  },
  rpcUrls: {
    default: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://testnet.bscscan.com" },
    etherscan: { name: "SnowTrace", url: "https://testnet.bscscan.com" },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [
    BSCchainTestnet,
    chain.mainnet,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Qroniswap",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const Hero = () => {
  const Section = styled.section`
    padding: 200px 0 100px;
    position: relative;
    z-index: 1;

    &:before {
      content: "";
      width: 25vw;
      height: 25vw;
      left: -15%;
      top: 47px;
      position: absolute;
      background: #9f2dfe;
      filter: blur(127px);
      z-index: -1;
    }

    &:after {
      position: absolute;
      content: "";
      width: 25vw;
      height: 25vw;
      right: -15%;
      top: -90px;
      background: #3bb2f9;
      filter: blur(127px);
      z-index: -1;
    }
  `;
  const Heading = styled.div`
    margin-bottom: 50px;

    h1 {
      font-size: 32px;
      line-height: 1;
      font-weight: 600;
      margin-bottom: 25px;

      @media (min-width: 991px) {
        font-size: 60px;
      }
    }
    p {
      font-size: 16px;
      line-height: 1.5;
      font-weight: 400;

      @media (min-width: 991px) {
        font-size: 20px;
      }
    }
  `;
  return (
    <Section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <Heading>
              <h1>
                Next level digital marketplace to trade your favorite assets.
              </h1>
              <p>
                Multi-chain DEX. Get Exclusive NFT Tickets. Robust Pools
                Tailored for Your Favorite Tokens. Receive Eye-Catching Staking
                Rewards. High liquidity. Fast trade. Credit card support. No
                extra fees. Secure transaction.
              </p>
            </Heading>

            <div className="hero-area-buttons d-flex justify-content-center gap-3">
              <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider
                  chains={chains}
                  initialChain={BSCchainTestnet}
                >
                  <ConnectButton />
                </RainbowKitProvider>
              </WagmiConfig>
              <a
                href="https://qroniswap.gitbook.io/qroniswap-whitepaper-1/"
                className="btn btn-light"
              >
                Whitepaper
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
